/* Real DOM editing: stable identities, constrained ordering, one history entry per gesture. */
function mountWorkspaceElementEditor({ frame, canvas, edits, selectedId, select, commit, mode = 'select', view = 'select', lang = 'zh' }) {
  if (!frame) return () => {};
  frame.querySelectorAll('.global-resize-handle,.global-measure').forEach(el => el.remove());
  const nodes = new Map();
  const register = (el, path) => {
    el.dataset.editId = path;
    nodes.set(path, el);
    [...el.children].forEach((child, index) => { if (!['BR','HR'].includes(child.tagName)) register(child, `${path}-${index}`); });
  };
  register(frame, 'page');
  const originals = new Map([...nodes].map(([id,el]) => [id,{css:el.style.cssText,text:el.textContent,order:[...el.children].map(child=>child.dataset.editId).filter(Boolean)}]));
  let state = structuredClone(edits), current = nodes.get(selectedId) || null, gesture = null, raf = 0;
  let ignoreClick = false;
  const name = el => `${el.tagName.toLowerCase()}${[...el.classList].filter(c => c.startsWith('global-') && c !== 'global-select').map(c => `.${c}`).join('')}`;
  const apply = () => {
    nodes.forEach((el, id) => {
      const saved = state[id];
      if (!saved) return;
      Object.entries(saved.style || {}).forEach(([key, value]) => el.style.setProperty(key, value));
      if (saved.text !== undefined && !el.children.length) el.textContent = saved.text;
      if (saved.order) saved.order.forEach(childId => { const child = nodes.get(childId); if (child?.parentElement === el) el.append(child); });
    });
  };
  apply();
  const overlay = document.createElement('div');
  overlay.className = 'we-overlay';
  const zh = lang !== 'en';
  const copy = zh ? { width: '宽度', height: '最小高度', padding: '内边距', margin: '下方间距', gap: '子项间距', span: '跨列', close: '关闭属性面板', editText: '编辑元素文字', previous: '前移', next: '后移', restore: '恢复', help: '拖动边缘调整尺寸，切换到拖动模式可重排同级元素。', order: '拖动排序', resizeWidth: '左右拖动调整宽度', resizeHeight: '上下拖动调整最小高度', saveCss: '已调整，页面按实际 CSS 重新排版。', saveText: '文字已保存，内容长度会自然改变页面高度。', restored: '已恢复该元素的样式、文字和内部顺序。', rootSibling: '页面根容器没有同级元素。', reordered: '已调整同级 DOM 顺序。', cancelled: '已取消本次拖动。', orderSaved: '顺序已保存；撤销可恢复拖动前顺序。', sizeSaved: '尺寸已保存；一次拖动对应一次撤销。', rootOrder: '页面根容器不能排序。' } : { width: 'Width', height: 'Min height', padding: 'Padding', margin: 'Bottom spacing', gap: 'Child gap', span: 'Grid span', close: 'Close property panel', editText: 'Edit element text', previous: 'Move up', next: 'Move down', restore: 'Restore', help: 'Drag an edge to resize; switch to Move mode to reorder siblings.', order: 'Drag to reorder', resizeWidth: 'Drag left or right to resize', resizeHeight: 'Drag up or down to resize minimum height', saveCss: ' changed; the page reflowed using real CSS.', saveText: 'Text saved; content length can naturally change page height.', restored: 'Element styles, text, and child order restored.', rootSibling: 'The page root has no sibling elements.', reordered: 'Sibling DOM order updated.', cancelled: 'Drag cancelled.', orderSaved: 'Order saved; Undo restores the previous order.', sizeSaved: 'Size saved; one drag creates one history entry.', rootOrder: 'The page root cannot be reordered.' };
  overlay.innerHTML = `<div class="we-selection"><span class="we-label"></span><button data-we-drag="width" class="we-width" title="${copy.resizeWidth}" aria-label="${copy.resizeWidth}"></button><button data-we-drag="height" class="we-height" title="${copy.resizeHeight}" aria-label="${copy.resizeHeight}"></button><button data-we-drag="order" class="we-order" title="${copy.order}">⠿ ${copy.order}</button></div><div class="we-insertion" hidden></div>`;
  canvas.parentElement.append(overlay);
  const box = overlay.querySelector('.we-selection'), insertion = overlay.querySelector('.we-insertion');
  const panel = document.createElement('section');
  panel.className = 'we-panel we-floating-panel';
  panel.innerHTML = `<header class="we-floating-head"><div><span>SELECTED</span><strong class="we-current-name"></strong></div><button type="button" data-we-action="close" aria-label="${copy.close}">×</button></header><div class="we-fields"></div><div class="we-actions"><button data-we-action="previous">↑ ${copy.previous}</button><button data-we-action="next">↓ ${copy.next}</button><button data-we-action="clear">${copy.restore}</button></div><label class="we-text" hidden>${zh ? '文字' : 'Text'}<input aria-label="${copy.editText}"></label><div class="we-view-tabs"><button type="button" data-we-view="dom">DOM</button><button type="button" data-we-view="css">CSS</button></div><pre class="we-dom"></pre><pre class="we-css"></pre><small class="we-help" aria-live="polite">${copy.help}</small>`;
  document.querySelector('.global-floating-inspector-host')?.append(panel);
  const feedback = text => { panel.querySelector('.we-help').textContent = text; };
  const geometry = () => {
    if (!current || !current.isConnected) { box.hidden = true; return; }
    const rect = current.getBoundingClientRect(), host = overlay.getBoundingClientRect(), clip = canvas.getBoundingClientRect();
    const panelHost = panel.parentElement;
    panelHost?.classList.toggle('is-left', rect.left + rect.width / 2 > clip.left + clip.width / 2);
    box.hidden = rect.bottom < clip.top || rect.top > clip.bottom || rect.right < clip.left || rect.left > clip.right;
    Object.assign(box.style, { left: `${rect.left-host.left}px`, top: `${rect.top-host.top}px`, width: `${rect.width}px`, height: `${rect.height}px` });
    // Keep the drag grip reachable on tall containers while the canvas scrolls.
    box.querySelector('.we-order').style.top = `${Math.max(0,clip.top-rect.top)+4}px`;
    box.querySelector('.we-width').style.top = `${Math.max(12,Math.min(rect.height-24,(Math.max(rect.top,clip.top)+Math.min(rect.bottom,clip.bottom))/2-rect.top))}px`;
  };
  const schedule = () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; geometry(); }); };
  const describe = () => {
    if (!current) { panel.hidden = true; panel.querySelector('.we-fields').innerHTML = ''; box.hidden = true; return; }
    panel.hidden = false;
    const css = getComputedStyle(current), parentCSS = current.parentElement && getComputedStyle(current.parentElement);
    const isGridItem = parentCSS?.display === 'grid' && current !== frame;
    const properties = [['width',copy.width,parseFloat(css.width)],['min-height',copy.height,parseFloat(css.minHeight)||0],['padding',copy.padding,parseFloat(css.paddingTop)||0],['margin-bottom',copy.margin,parseFloat(css.marginBottom)||0]];
    if (['grid','flex'].includes(css.display)) properties.push(['gap',copy.gap,parseFloat(css.gap)||0]);
    if (isGridItem) properties.push(['grid-column',copy.span,Number(css.gridColumnEnd.replace('span ',''))||1]);
    panel.querySelector('.we-fields').innerHTML = properties.map(([key,label,value]) => `<label>${label}<input data-we-property="${key}" aria-label="${label}" type="number" min="${key === 'grid-column' ? 1 : 0}" max="${key === 'grid-column' ? Math.max(1,parentCSS.gridTemplateColumns.split(' ').length) : 2400}" value="${Math.round(value)}"></label>`).join('');
    panel.querySelector('.we-text').hidden = current.children.length > 0;
    panel.querySelector('.we-text input').value = current.children.length ? '' : current.textContent;
    overlay.querySelector('.we-label').textContent = name(current);
    panel.querySelector('.we-current-name').textContent = name(current);
    const ancestry=[]; let ancestor=current; while(ancestor && ancestor !== frame.parentElement){ancestry.unshift(name(ancestor)); if(ancestor===frame)break; ancestor=ancestor.parentElement;}
    panel.querySelector('.we-dom').textContent=ancestry.join('\n└─ ');
    const declarations = Object.entries(state[current.dataset.editId]?.style || {}).map(([key,value]) => `  ${key}: ${value};`).join('\n');
    panel.querySelector('.we-css').textContent = `[data-edit-id="${current.dataset.editId}"] {\n${declarations || `  /* ${Math.round(current.getBoundingClientRect().width)} × ${Math.round(current.getBoundingClientRect().height)} px */`}\n}`;
    const selectedView = view === 'dom' ? 'dom' : 'css';
    panel.dataset.view = selectedView;
    panel.querySelectorAll('[data-we-view]').forEach(button => button.classList.toggle('is-active', button.dataset.weView === selectedView));
    geometry();
  };
  const choose = el => { current = el; select(el.dataset.editId); describe(); };
  const save = message => { commit(structuredClone(state)); feedback(message); describe(); };
  const setStyle = (key, value) => {
    const id = current.dataset.editId;
    state[id] = { ...state[id], style: { ...state[id]?.style, [key]: value } };
    current.style.setProperty(key, value);
    if (key === 'width' || key === 'min-height') {
      current.style.setProperty('display', getComputedStyle(current).display === 'inline' ? 'inline-block' : getComputedStyle(current).display);
      state[id].style.display = current.style.display;
      current.style.maxWidth = '100%'; state[id].style['max-width'] = '100%';
      if (key === 'width' && current.classList.contains('global-aside')) {
        const parent=current.parentElement, pid=parent.dataset.editId;
        const columns=`${value} minmax(0, 1fr)`;
        parent.style.gridTemplateColumns=columns;
        state[pid]={...state[pid],style:{...state[pid]?.style,'grid-template-columns':columns}};
      }
    }
  };
  const capture = event => {
    let el = event.target.closest('[data-edit-id]');
    if (!el) return;
    if (event.type === 'pointerdown' && (event.button !== 0 || gesture)) return;
    event.preventDefault(); event.stopImmediatePropagation();
    if (event.type === 'click') { if (ignoreClick) { ignoreClick=false; return; } choose(el); return; }
    ignoreClick=false;
    // A selected container remains the drag target when grabbing its child text.
    if (current && current !== frame && current.contains(el)) el=current;
    const rect=el.getBoundingClientRect();
    const rightEdge=event.clientX >= rect.right-12;
    const bottomEdge=event.clientY >= rect.bottom-10;
    choose(el);
    const kind = rightEdge || el.classList.contains('global-aside') ? 'width' : bottomEdge ? 'height' : 'order';
    if (mode !== 'drag' && kind === 'order') return;
    startGesture(event, kind, frame);
  };
  frame.addEventListener('click', capture, true);
  frame.addEventListener('pointerdown', capture, true);
  const changeField = event => {
    if (!current) return;
    const input = event.target, key = input.dataset.weProperty;
    if (key) { const value = Math.max(Number(input.min),Math.min(Number(input.max),Number(input.value))); const cssValue=key === 'grid-column' ? `span ${value}` : `${value}px`; if(current.style.getPropertyValue(key)===cssValue)return; setStyle(key,cssValue); save(`${key}${copy.saveCss}`); }
    if (input.matches('.we-text input')) { const id=current.dataset.editId; state[id]={...state[id],text:input.value}; current.textContent=input.value; save(copy.saveText); }
  };
  panel.addEventListener('change',changeField);
  panel.addEventListener('focusout',event=>{if(event.target.dataset.weProperty)changeField(event);});
  panel.addEventListener('keydown',event=>{if(event.key==='Enter' && event.target.dataset.weProperty){event.preventDefault();changeField(event);}});
  const textInput=panel.querySelector('.we-text input');
  const saveText=()=>{if(!current || current.children.length || current.textContent===textInput.value)return; const id=current.dataset.editId; state[id]={...state[id],text:textInput.value}; current.textContent=textInput.value; save(copy.saveText);};
  textInput.addEventListener('blur',saveText);
  textInput.addEventListener('keydown',event=>{if(event.key==='Enter'){event.preventDefault();saveText();}});
  const rememberOrder = parent => { const id=parent.dataset.editId; state[id]={...state[id],order:[...parent.children].map(el=>el.dataset.editId)}; };
  panel.addEventListener('click', event => {
    const action=event.target.dataset.weAction;
    const nextView=event.target.dataset.weView;
    if(nextView){panel.dataset.view=nextView;panel.querySelectorAll('[data-we-view]').forEach(button=>button.classList.toggle('is-active',button.dataset.weView===nextView));return;}
    if(action === 'close'){current=null;select(null);describe();return;}
    if (!current || !action) return;
    if (action === 'clear') { const original=originals.get(current.dataset.editId); current.style.cssText=original.css; if(!current.children.length) current.textContent=original.text; original.order.forEach(id=>current.append(nodes.get(id))); delete state[current.dataset.editId]; save(copy.restored); return; }
    if (current === frame) { feedback(copy.rootSibling); return; }
    const sibling=action === 'previous' ? current.previousElementSibling : current.nextElementSibling;
    if (!sibling) return;
    const parent=current.parentElement; parent.insertBefore(current,action === 'previous' ? sibling : sibling.nextElementSibling); rememberOrder(parent); save(copy.reordered);
  });
  const move = event => {
    if (!gesture || event.pointerId !== gesture.pointerId) return;
    const dx=event.clientX-gesture.x, dy=event.clientY-gesture.y;
    if (!gesture.moved && Math.hypot(dx,dy)<5) return;
    gesture.moved=true;
    overlay.classList.add('is-dragging');
    if (gesture.kind === 'width') {
      const parentCSS=getComputedStyle(current.parentElement), tracks=parentCSS.gridTemplateColumns.split(' ').length;
      if (current.classList.contains('global-card') && parentCSS.display==='grid') setStyle('grid-column',`span ${Math.max(1,Math.min(tracks,Math.round((gesture.width+dx)/(current.parentElement.clientWidth/tracks))))}`);
      else setStyle('width',`${Math.max(24,Math.round(gesture.width+dx))}px`);
    }
    if (gesture.kind === 'height') setStyle('min-height',`${Math.max(0,Math.round(gesture.height+dy))}px`);
    if (gesture.kind === 'order') {
      box.style.transform=`translate(${dx}px, ${dy}px)`;
      const siblings=[...current.parentElement.children].filter(el=>el !== current && el.dataset.editId);
      const parentCSS=getComputedStyle(current.parentElement);
      const horizontal=parentCSS.display.includes('flex') && parentCSS.flexDirection.startsWith('row');
      gesture.before=siblings.find(el=>{const r=el.getBoundingClientRect(); return horizontal ? event.clientX<r.left+r.width/2 : event.clientY<r.top || (event.clientY<r.bottom && (parentCSS.display==='grid' ? event.clientX<r.left+r.width/2 : event.clientY<r.top+r.height/2));}) || null;
      const r=(gesture.before || siblings.at(-1) || current).getBoundingClientRect(), host=overlay.getBoundingClientRect();
      insertion.hidden=false; Object.assign(insertion.style,{left:`${r.left-host.left}px`,top:`${(gesture.before?r.top:r.bottom)-host.top}px`,width:`${r.width}px`});
      const clip=canvas.getBoundingClientRect(); if(event.clientY>clip.bottom-40) canvas.scrollTop+=16; if(event.clientY<clip.top+40) canvas.scrollTop-=16;
    }
    const declarations=Object.entries(state[current.dataset.editId]?.style||{}).map(([key,value])=>`  ${key}: ${value};`).join('\n');
    panel.querySelector('.we-css').textContent=`[data-edit-id="${current.dataset.editId}"] {\n${declarations}\n}`;
    panel.querySelectorAll('[data-we-property]').forEach(input=>{const val=current.style.getPropertyValue(input.dataset.weProperty); if(val) input.value=Math.round(parseFloat(val.replace('span ','')))||0;});
    schedule();
  };
  const end = event => {
    if (!gesture || (event.pointerId !== undefined && event.pointerId !== gesture.pointerId)) return;
    if (event.type === 'pointercancel' || event.type === 'keydown') { state=gesture.state; nodes.forEach((el,id)=>{el.style.cssText=originals.get(id).css;}); apply(); feedback(copy.cancelled); }
    else if (gesture.moved) {
      if (gesture.kind === 'order') { const parent=current.parentElement; parent.insertBefore(current,gesture.before); rememberOrder(parent); }
      save(gesture.kind === 'order' ? copy.orderSaved : copy.sizeSaved);
    }
    if (!gesture.moved && gesture.hit) choose(gesture.hit);
    ignoreClick=true;
    if(gesture.capture.hasPointerCapture(gesture.pointerId)) gesture.capture.releasePointerCapture(gesture.pointerId);
    gesture=null; insertion.hidden=true; box.style.transform=''; overlay.classList.remove('is-dragging'); describe();
    window.removeEventListener('pointermove',move); window.removeEventListener('pointerup',end); window.removeEventListener('pointercancel',end);
  };
  const startGesture = (event, kind, captureTarget) => {
    if (!current || !kind || event.button !== 0) return;
    if (kind === 'order' && current === frame) { feedback(copy.rootOrder); return; }
    event.preventDefault(); captureTarget.setPointerCapture(event.pointerId);
    const r=current.getBoundingClientRect(); gesture={kind,hit:event.target.closest('[data-edit-id]'),capture:captureTarget,moved:false,pointerId:event.pointerId,x:event.clientX,y:event.clientY,width:r.width,height:r.height,top:r.top,css:current.style.cssText,state:structuredClone(state),before:current.nextElementSibling};
    window.addEventListener('pointermove',move); window.addEventListener('pointerup',end); window.addEventListener('pointercancel',end);
  };
  overlay.addEventListener('pointerdown', event => startGesture(event,event.target.dataset.weDrag,event.target));
  const escape = event => { if(event.key==='Escape' && gesture) end(event); };
  const domSelect = event => { const button=event.target.closest('[data-global-dom-select]'); if(!button)return; const el=frame.querySelector(`[data-global-select="${button.dataset.globalDomSelect}"]`); if(el){event.preventDefault();event.stopImmediatePropagation();choose(el);el.scrollIntoView({block:'nearest',inline:'nearest'});} };
  document.addEventListener('click',domSelect,true);
  window.addEventListener('keydown',escape); window.addEventListener('resize',schedule); canvas.addEventListener('scroll',schedule); window.addEventListener('scroll',schedule,true);
  const observer=new ResizeObserver(schedule); nodes.forEach(el=>observer.observe(el));
  describe();
  return () => { if(gesture) end({type:'pointercancel',pointerId:gesture.pointerId}); document.removeEventListener('click',domSelect,true); observer.disconnect(); cancelAnimationFrame(raf); window.removeEventListener('keydown',escape); window.removeEventListener('resize',schedule); window.removeEventListener('scroll',schedule,true); canvas.removeEventListener('scroll',schedule); frame.removeEventListener('click',capture,true); frame.removeEventListener('pointerdown',capture,true); overlay.remove(); };
}
