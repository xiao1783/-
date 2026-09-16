const chapters = [
  {
    id: 1,
    title: { zh: '布局的本质', en: 'The Nature of Layout' },
    kicker: { zh: '页面布局基础', en: 'Layout foundations' },
    summary: { zh: '从一个混乱的课程主页开始，理解布局如何把内容、空间与视觉层级组织成可读的页面。', en: 'Start with a cluttered course homepage and learn how layout turns content, space, and hierarchy into a readable page.' },
    tags: { zh: ['空间约束', 'DOM 层级', '视觉动线'], en: ['Spatial constraints', 'DOM hierarchy', 'Visual path'] },
    question: { zh: '为什么有些页面“看起来很挤”，但代码并不长？', en: 'Why do some pages feel crowded even when the code is short?' },
    theory: { zh: ['布局不是把元素随意摆在画布上，而是建立一组空间关系：谁包含谁、谁优先被看到、哪些区域共享一条边线。', '浏览器不会像设计师一样“看懂”页面。它从 DOM 树出发，结合每个元素的布局规则，逐层计算可用空间、尺寸和位置。因此，父子关系会直接影响一个元素以谁为参照、能够占据多大范围。', '好的页面还需要明确的阅读顺序。标题、导航、正文和辅助信息不应同时争夺注意力；结构层级必须与视觉层级相互对应。', '在本案例中，我们先不写复杂 CSS，而是从内容结构开始。页面的视觉秩序应该能被 DOM 结构解释；如果结构混乱，后续的颜色和动画只能暂时遮盖问题。'], en: ['Layout is not placing elements freely on a canvas. It is a set of spatial relationships: containment, attention priority, and shared alignment edges.', 'A browser does not understand a page like a designer. It starts from the DOM tree and calculates available space, size, and position through each element’s layout rules. Parent-child relationships therefore determine the reference frame and available area of an element.', 'A good page also needs a clear reading order. Headings, navigation, body content, and supporting information should not compete for attention at the same level; structural hierarchy and visual hierarchy must reinforce each other.', 'In this case, we begin with content structure instead of complex CSS. Visual order should be explainable by the DOM; color and animation cannot repair a confused structure.'] },
    principle: { zh: '先回答“内容之间是什么关系”，再决定“它们应该放在哪里”。', en: 'First ask how the content is related; only then decide where it should go.' },
    deepDive: {
      concepts: [
        { mark: 'A', title: { zh: '包含关系', en: 'Containment' }, text: { zh: '父容器给子元素提供可用空间和定位参照。先确认谁属于谁，才能避免无意义的嵌套。', en: 'A parent provides available space and a positioning reference. Confirm ownership before adding wrappers.' } },
        { mark: 'B', title: { zh: '流动关系', en: 'Flow' }, text: { zh: '元素默认按照文档顺序占位。布局首先要尊重内容顺序，再决定是否需要并排或脱离文档流。', en: 'Elements occupy space in document order by default. Respect content order before arranging or removing items from flow.' } },
        { mark: 'C', title: { zh: '对齐关系', en: 'Alignment' }, text: { zh: '共享边线会把分散内容组织成一个整体。稳定的左边界、列线和基线能够降低阅读成本。', en: 'Shared edges organize separate items into one whole. Stable left edges, columns, and baselines reduce reading effort.' } },
        { mark: 'D', title: { zh: '优先关系', en: 'Priority' }, text: { zh: '尺寸、位置、留白和颜色共同形成视觉重量，告诉读者先看什么、随后看什么。', en: 'Size, position, whitespace, and color create visual weight and signal what should be read first and next.' } }
      ],
      steps: [
        { number: '01', title: { zh: '盘点内容', en: 'Inventory' }, text: { zh: '列出课程名称、章节导航、正文、代码和演示，不讨论样式。', en: 'List the course title, navigation, body, code, and demo without discussing style.' } },
        { number: '02', title: { zh: '建立关系', en: 'Relate' }, text: { zh: '判断哪些内容属于同一组，哪些是主信息，哪些只是辅助说明。', en: 'Decide what belongs together, what is primary, and what only supports the main message.' } },
        { number: '03', title: { zh: '划分区域', en: 'Zone' }, text: { zh: '把关系翻译成页面区域，为导航、正文和演示建立稳定边界。', en: 'Translate relationships into page regions with stable boundaries for navigation, content, and demos.' } },
        { number: '04', title: { zh: '验证动线', en: 'Verify' }, text: { zh: '从标题开始扫读页面，确认视线顺序与内容重要性一致。', en: 'Scan from the heading and verify that reading order matches content importance.' } }
      ]
    },
    code: '<main class="course-page">\n  <header class="course-header">课程信息</header>\n  <div class="course-body">\n    <aside class="chapter-nav">章节导航</aside>\n    <section class="course-content">\n      <article class="chapter-card">课程内容</article>\n    </section>\n  </div>\n</main>',
    demo: 'tree'
  },
  {
    id: 2,
    title: { zh: '视觉层级与色彩', en: 'Visual Hierarchy & Color' },
    kicker: { zh: '独立专题 · 色彩', en: 'Special topic · Color' },
    summary: { zh: '颜色不是装饰，而是区分区域、建立层级、表达状态并保证可读性的空间信号。', en: 'Color is not decoration. It separates regions, establishes hierarchy, communicates state, and protects readability.' },
    tags: { zh: ['色彩层级', '对比度', 'CVD 模拟'], en: ['Color hierarchy', 'Contrast', 'CVD simulation'] },
    question: { zh: '为什么同样的布局，换一种颜色就会改变阅读路径？', en: 'Why can a color change alter the reading path of the same layout?' },
    theory: { zh: ['色彩会改变视觉重量。高饱和色和高对比色会争夺注意力，因此强调色应该有明确职责，而不是每个区域都使用。', '本案例将颜色分成背景、结构、内容和交互四类角色，并用对比度检查来判断颜色是否真的帮助了布局。'], en: ['Color changes visual weight. Saturated and high-contrast colors compete for attention, so an accent color needs a clear job instead of appearing everywhere.', 'We assign color to four roles—background, structure, content, and interaction—and use contrast checks to test whether it truly supports layout.'] },
    principle: { zh: '颜色的数量越少，颜色和信息层级之间的关系越需要准确。', en: 'The fewer colors you use, the more precisely each color must map to information hierarchy.' },
    code: ':root {\n  --ink: #17233b;\n  --canvas: #f6f8fc;\n  --accent: #ffb45b;\n  --signal: #72d6bf;\n}\n\n.chapter-card.is-active {\n  border-color: var(--accent);\n}',
    demo: 'color'
  },
  {
    id: 3,
    title: { zh: '字体、间距与对齐', en: 'Type, Spacing & Alignment' },
    kicker: { zh: '阅读节奏', en: 'Reading rhythm' },
    summary: { zh: '用字号层级、行长、留白和基线对齐，让桌面端页面形成稳定的阅读节奏。', en: 'Use type scale, line length, whitespace, and baseline alignment to create a stable desktop reading rhythm.' },
    tags: { zh: ['排版层级', '基线网格', 'Gestalt 邻近'], en: ['Type hierarchy', 'Baseline grid', 'Gestalt proximity'] },
    question: { zh: '为什么内容相同，有的页面容易扫读，有的页面却让人迷路？', en: 'Why is the same content scannable in one page but confusing in another?' },
    theory: { zh: ['排版是布局的一部分：字号决定层级，行高决定节奏，行长决定阅读负担，间距决定哪些内容被感知为一组。', '我们把间距看成一个可重复的系统，而不是逐个元素凭感觉调整。对齐线越稳定，页面越容易被理解。'], en: ['Typography is part of layout: type size creates hierarchy, line height creates rhythm, line length controls effort, and spacing defines grouping.', 'We treat spacing as a repeatable system rather than tuning every element by feeling. The more stable the alignment edges, the easier the page is to understand.'] },
    principle: { zh: '一致的间距系统，比孤立的视觉特效更能建立秩序。', en: 'A consistent spacing system creates more order than isolated visual effects.' },
    code: '.content {\n  max-width: 760px;\n  line-height: 1.7;\n}\n\n.section + .section {\n  margin-top: 40px;\n}',
    demo: 'type'
  },
  {
    id: 4,
    title: { zh: '盒模型与正常文档流', en: 'Box Model & Normal Flow' },
    kicker: { zh: '尺寸计算', en: 'Size calculation' },
    summary: { zh: '解释元素尺寸、占位关系和溢出问题，理解浏览器如何计算每一个盒子。', en: 'Explain element size, occupied space, and overflow by making the browser’s box calculations visible.' },
    tags: { zh: ['content-box', 'border-box', '文档流'], en: ['content-box', 'border-box', 'Document flow'] },
    question: { zh: '为什么设置了 width，卡片还是比预期更宽？', en: 'Why can a card still be wider than expected after setting width?' },
    theory: { zh: ['一个元素的视觉大小不只由 width 决定。padding 和 border 可能继续向外增加尺寸，而 margin 还会影响它与邻居之间的关系。', '正常文档流让元素按照结构顺序占位。理解占位关系，是判断“应该调整间距”还是“应该改变布局模型”的基础。'], en: ['An element’s visual size is not determined by width alone. Padding and border may expand it outward, while margin changes its relationship with neighbors.', 'Normal flow lets elements occupy space in structural order. Understanding occupancy helps decide whether to adjust spacing or change the layout model.'] },
    principle: { zh: '先测量盒子占据了多少空间，再判断它为什么错位。', en: 'Measure the space a box occupies before deciding why it is misplaced.' },
    code: '.card {\n  width: 320px;\n  padding: 24px;\n  border: 1px solid #d8dfeb;\n  box-sizing: border-box;\n}',
    demo: 'box'
  },
  {
    id: 5,
    title: { zh: 'Flexbox 与 Grid', en: 'Flexbox & Grid' },
    kicker: { zh: '布局模型选择', en: 'Choosing a layout model' },
    summary: { zh: '用一维与二维的理论区别解释导航栏、卡片组和整页骨架应该如何布局。', en: 'Use the one-dimensional versus two-dimensional distinction to choose layouts for toolbars, card groups, and page skeletons.' },
    tags: { zh: ['主轴交叉轴', '网格轨道', '剩余空间'], en: ['Main/cross axis', 'Grid tracks', 'Free space'] },
    question: { zh: '什么时候应该用 Flexbox，什么时候应该用 Grid？', en: 'When should you use Flexbox, and when should you use Grid?' },
    theory: { zh: ['Flexbox 主要解决一条轴线上的排列与空间分配；Grid 同时管理行和列，更适合页面级区域关系。', '选择布局模型不是记忆属性，而是先判断问题的维度：是在组织一组并排项目，还是在建立一张二维页面地图。'], en: ['Flexbox mainly arranges and distributes space along one axis; Grid manages rows and columns and is better for page-level regions.', 'Choosing a layout model is not about memorizing properties. Identify the problem’s dimension: arranging a row of items or building a two-dimensional page map.'] },
    principle: { zh: '先判断布局问题是一维还是二维，再选择工具。', en: 'Identify whether the layout problem is one-dimensional or two-dimensional before choosing the tool.' },
    code: '.page {\n  display: grid;\n  grid-template-columns: 240px 1fr 320px;\n  gap: 24px;\n}\n\n.toolbar {\n  display: flex;\n  justify-content: space-between;\n}',
    demo: 'layout'
  },
  {
    id: 6,
    title: { zh: '定位、层叠与组件', en: 'Positioning, Stacking & Components' },
    kicker: { zh: '空间层级', en: 'Spatial layers' },
    summary: { zh: '解释 sticky 导航、提示层和弹窗为什么会脱离文档流，以及 z-index 为什么并非万能。', en: 'Explain why sticky navigation, tooltips, and dialogs leave normal flow—and why z-index is not magic.' },
    tags: { zh: ['定位参照', 'z-index', '层叠上下文'], en: ['Containing block', 'z-index', 'Stacking context'] },
    question: { zh: '两个元素都设置了 z-index，为什么仍然无法正确覆盖？', en: 'Why can two elements with z-index still fail to overlap correctly?' },
    theory: { zh: ['定位改变的是元素与空间的关系。absolute 需要定位参照物，sticky 需要滚动容器，z-index 还受到层叠上下文的边界限制。', '在案例中，我们把“页面骨架”和“浮在页面上的信息”分开分析，避免用定位去替代正常布局。'], en: ['Positioning changes an element’s relationship with space. Absolute positioning needs a containing block, sticky needs a scroll container, and z-index is bounded by stacking contexts.', 'We separate the page skeleton from information floating above it, so positioning does not replace normal layout.'] },
    principle: { zh: '先完成页面骨架，再把真正需要覆盖的内容提升到独立层。', en: 'Build the page skeleton first; elevate only content that truly needs to overlap.' },
    code: '.sidebar {\n  position: sticky;\n  top: 24px;\n}\n\n.tooltip {\n  position: absolute;\n  z-index: 10;\n}',
    demo: 'layers'
  },
  {
    id: 7,
    title: { zh: '综合案例：重构课程主页', en: 'Case Study: Rebuild the Course Homepage' },
    kicker: { zh: '从分析到重构', en: 'From analysis to rebuild' },
    summary: { zh: '把前六章的理论组合起来，诊断一个混乱的课程主页，并完成结构、色彩和布局重构。', en: 'Combine the first six chapters to diagnose a cluttered course homepage and rebuild its structure, color, and layout.' },
    tags: { zh: ['案例诊断', '布局选择', '质量检查'], en: ['Case diagnosis', 'Layout choice', 'Quality audit'] },
    question: { zh: '面对一个真实页面，应该按什么顺序分析布局？', en: 'In what order should you analyze a real page layout?' },
    theory: { zh: ['布局分析应该从外到内：先看页面骨架，再看容器关系，然后看组件尺寸、排版节奏、颜色层级和浮层行为。', '本章不要求记住所有 CSS 属性，而是训练一个可重复的判断流程，把视觉问题翻译成空间问题，再选择最小修复。'], en: ['Analyze layout from outside in: page skeleton, container relationships, component size, type rhythm, color hierarchy, and floating layers.', 'The goal is not to memorize every CSS property. It is to build a repeatable judgment process that translates visual issues into spatial problems and chooses the smallest repair.'] },
    principle: { zh: '好的布局不是属性越多，而是每条规则都有清楚的空间职责。', en: 'Good layout is not about more properties; every rule should have a clear spatial responsibility.' },
    code: '.course-page {\n  display: grid;\n  grid-template-columns: 240px minmax(0, 1fr) 320px;\n}\n\n.course-content {\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n}',
    demo: 'audit'
  }
];

const ui = {
  zh: { course: '可视化导论', title: '构页有方', subtitle: '用理论理解空间，用交互验证布局。', home: '课程目录', progress: '课程进度', available: '已上线', enter: '进入章节', back: '返回章节目录', explain: '讲解', code: '关键代码', demo: '动态演示', case: '贯穿案例', copy: '复制代码', copied: '已复制', previous: '上一章', next: '下一章', question: '案例问题', principle: '本章原则', tags: '知识标签', control: '调整参数，观察布局如何重新计算', reset: '重置', current: '当前状态', desktop: '桌面端教学站', d3: 'D3 可视化模型' },
  en: { course: 'Introduction to Visualization', title: 'Layout with Intent', subtitle: 'Understand space through theory. Validate layout through interaction.', home: 'Course map', progress: 'Progress', available: 'Available', enter: 'Enter chapter', back: 'Back to course map', explain: 'Explanation', code: 'Key code', demo: 'Interactive demo', case: 'Running case', copy: 'Copy code', copied: 'Copied', previous: 'Previous', next: 'Next', question: 'Case question', principle: 'Chapter principle', tags: 'Knowledge tags', control: 'Adjust the controls and observe the layout recalculate', reset: 'Reset', current: 'Current state', desktop: 'Desktop teaching site', d3: 'D3 visual model' }
};

let lang = localStorage.getItem('layout-lab-language') || 'zh';
const originalTitle = document.title;
let state = { boxSizing: 'border-box', padding: 24, border: 2, margin: 18, colorMode: 'balanced', typeScale: 1, spacing: 24, layout: 'grid', columns: 3, layer: 'sticky', z: 4, audit: 'clean' };
const t = (value) => typeof value === 'string' ? value : value[lang];
const root = document.body.dataset.root || (['chapter', 'section'].includes(document.body.dataset.page) ? '../' : './');
const chapterId = Number(document.body.dataset.chapter || 0);
const currentChapter = chapters.find((chapter) => chapter.id === chapterId);
document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
if (lang === 'en') document.title = currentChapter ? `${ui.en.course} · ${t(currentChapter.title)}` : 'Layout with Intent · Introduction to Visualization';

function esc(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
}

function shell(content, activeId = 0, auxiliary = '') {
  if (activeId) localStorage.setItem('layout-lab-last-chapter', String(activeId));
  const nav = chapters.map((chapter) => `<a class="nav-item ${chapter.id === activeId ? 'is-active' : ''}" style="--radial-index:${chapter.id - 1}" data-radial-index="${chapter.id - 1}" aria-label="${esc(t(chapter.title))}" href="${root}chapters/chapter-0${chapter.id}.html"><span class="nav-index">0${chapter.id}</span><span>${esc(t(chapter.title))}</span></a>`).join('');
  return `<div class="site-frame">
    <header class="topbar">
      <a class="brand" href="${root}index.html"><img class="brand-logo" src="${root}assets/course-logo.png" alt=""><span><strong>${ui[lang].course}</strong><small>${ui[lang].title}</small></span></a>
      <div class="topbar-actions"><button class="language-toggle" type="button" aria-label="${lang === 'zh' ? '切换语言' : 'Switch language'}">${lang === 'zh' ? 'EN' : '中文'}</button></div>
    </header>
    <div class="body-frame ${auxiliary ? 'has-auxiliary' : activeId ? 'chapter-shell radial-nav-shell' : document.body.dataset.page === 'home' ? 'knowledge-home-shell' : ''}">
      <aside class="sidebar"><div class="sidebar-heading"><span>${ui[lang].home}</span><span class="live-dot"></span></div><div class="sidebar-meta">WEB LAYOUT · 7 CHAPTERS</div><nav>${nav}</nav><div class="sidebar-footer"><span class="sidebar-progress-title">${lang === 'zh' ? '学习进度' : 'Learning progress'}</span><div class="sidebar-progress-count"><strong>${String(activeId || 0).padStart(2, '0')}</strong><span>/ 07</span></div><div class="progress-track"><span style="width:${activeId ? Math.round((activeId / chapters.length) * 100) : 0}%"></span></div></div></aside>
      <main class="main-content">${content}</main>
      ${auxiliary}
    </div>
  </div>`;
}

function cardTags(chapter) { return chapter.tags[lang].map((tag) => `<span class="tag">${esc(tag)}</span>`).join(''); }

function renderHome() {
  const path = chapters.map((chapter) => `<a class="path-row" href="./chapters/chapter-0${chapter.id}.html" data-map-chapter="${chapter.id}"><span class="path-number">0${chapter.id}</span><span class="path-copy"><strong>${esc(t(chapter.title))}</strong><small>${esc(t(chapter.kicker))}</small></span><span class="path-tags">${chapter.tags[lang].slice(0, 2).map((tag) => `<i>${esc(tag)}</i>`).join('')}</span><span class="path-arrow">↗</span></a>`).join('');
  const content = `<article class="home-reader"><header class="home-hero"><div class="hero-copy"><nav class="home-breadcrumb" aria-label="Breadcrumb"><span>${ui[lang].course}</span><i>/</i><span>2026</span><i>/</i><strong>${lang === 'zh' ? '第 1 章' : 'Chapter 1'}</strong></nav><h1>${lang === 'zh' ? '布局是一种 <em>空间语言</em>' : 'Layout is a <em>spatial language</em>'}</h1><p>${lang === 'zh' ? '一门从真实页面出发的桌面端布局课程。先看内容关系，再理解空间约束，最后用代码让结构成立。' : 'A desktop layout course built around a real page. Read content relationships first, understand spatial constraints next, then make the structure real with code.'}</p><div class="hero-actions"><a class="primary-action" href="./chapters/chapter-01.html">${lang === 'zh' ? '从案例开始' : 'Start the case'} <span>→</span></a><span class="hero-note">${lang === 'zh' ? '07 个章节 · 01 条案例线' : '07 chapters · 01 running case'}</span></div></div></header><section class="case-canvas" id="case"><div class="canvas-head"><div><span class="eyebrow">${ui[lang].case}</span><strong>${lang === 'zh' ? '课程主页重构现场' : 'Course homepage rebuild'}</strong></div></div><div class="canvas-stage"><div class="browser-wire"><div class="wire-browser-bar"><span></span><span></span><span></span><em>visual-intro / layout-study</em></div><div class="wire-page"><div class="wire-page-head"><b></b><i></i><i></i><i></i></div><div class="wire-page-grid"><div class="wire-zone zone-1 is-highlighted" data-zone="1"><span>DOM</span><b></b><b></b><b></b></div><div class="wire-zone zone-2" data-zone="2"><span>COLOR</span><b></b><b></b><b></b></div><div class="wire-zone zone-3" data-zone="3"><span>TYPE</span><b></b><b></b></div><div class="wire-zone zone-4" data-zone="4"><span>BOX</span><b></b><b></b><b></b></div><div class="wire-zone zone-5" data-zone="5"><span>GRID</span><b></b><b></b><b></b></div><div class="wire-zone zone-6" data-zone="6"><span>LAYER</span><b></b><b></b></div></div></div></div></div><div class="map-detail" id="map-detail"><span class="eyebrow">${lang === 'zh' ? '当前聚焦 · 第 1 章' : 'Focused · Chapter 1'}</span><strong>${esc(t(chapters[0].title))}</strong><p>${esc(t(chapters[0].summary))}</p></div></section><section class="path-section" id="chapters"><div class="path-heading"><div><span class="eyebrow">${lang === 'zh' ? '学习路径' : 'Learning path'}</span><h2>${lang === 'zh' ? '让一个页面逐步成立' : 'Make one page make sense'}</h2></div><p>${lang === 'zh' ? '每一章只解决一个空间问题，最后回到同一个真实案例。' : 'Each chapter solves one spatial problem before returning to the same real case.'}</p></div><div class="path-list">${path}</div></section></article>`;
  document.querySelector('#app').innerHTML = shell(content, 1, renderHomeRail());
  const pathSection = document.querySelector('.path-section');
  pathSection?.insertAdjacentHTML('beforebegin', renderHomeMethod());
  pathSection?.insertAdjacentHTML('afterend', renderHomeOutcomes());
  bindGlobal();
  bindHomeMap();
  bindHomeRail();
}

function renderHome() {
  const positions = [
    [17, 17], [47, 14], [76, 27], [62, 48], [29, 44], [20, 73], [59, 78]
  ];
  const subtitles = lang === 'zh'
    ? ['Layout awareness', 'Content relationships', 'Spatial constraints', 'Visual hierarchy', 'Structure building', 'Responsive layout', 'Integrated practice']
    : ['Layout awareness', 'Content relationships', 'Spatial constraints', 'Visual hierarchy', 'Structure building', 'Responsive layout', 'Integrated practice'];
  const lastChapter = Math.min(7, Math.max(1, Number(localStorage.getItem('layout-lab-last-chapter') || 1)));
  const current = chapters[lastChapter - 1] || chapters[0];
  const completedCount = Math.max(0, lastChapter - 1);
  const statusLabel = (id) => id < lastChapter ? (lang === 'zh' ? '✓ 已完成' : '✓ Complete') : id === lastChapter ? (lang === 'zh' ? '● 学习中' : '● Current') : (lang === 'zh' ? '未开始' : 'Not started');
  const nodeClass = (id) => id < lastChapter ? 'is-complete' : id === lastChapter ? 'is-current' : 'is-upcoming';
  const nodes = chapters.map((chapter, index) => `<a class="knowledge-node node-kind-${chapter.id} ${nodeClass(chapter.id)}" data-node-id="${chapter.id}" href="./chapters/chapter-0${chapter.id}.html" style="--node-x:${positions[index][0]}%;--node-y:${positions[index][1]}%;--node-delay:${index * 70}ms" aria-label="${esc(t(chapter.title))}"><span class="knowledge-node-index">0${chapter.id}</span><strong>${esc(t(chapter.title))}</strong><small>${subtitles[index]}</small><em>${statusLabel(chapter.id)}</em><span class="node-glyph" aria-hidden="true"></span></a>`).join('');
  const lines = [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]].map(([from, to]) => {
    const a = positions[from - 1]; const b = positions[to - 1];
    return `<path d="M ${a[0] * 10} ${a[1] * 7.2} C ${a[0] * 10} ${(a[1] + b[1]) * 3.6}, ${b[0] * 10} ${(a[1] + b[1]) * 3.6}, ${b[0] * 10} ${b[1] * 7.2}" data-edge="${from}-${to}" class="knowledge-edge is-primary ${to <= lastChapter ? 'is-complete' : ''} ${from < lastChapter && to <= lastChapter ? 'is-active-path' : ''}" />`;
  }).join('');
  const secondaryLines = [[1, 5], [2, 4], [3, 7], [5, 7]].map(([from, to]) => {
    const a = positions[from - 1]; const b = positions[to - 1];
    return `<path d="M ${a[0] * 10} ${a[1] * 7.2} C ${a[0] * 10} ${(a[1] + b[1]) * 3.6}, ${b[0] * 10} ${(a[1] + b[1]) * 3.6}, ${b[0] * 10} ${b[1] * 7.2}" data-edge="${from}-${to}" class="knowledge-edge is-secondary" />`;
  }).join('');
  const tags = current.tags[lang].slice(0, 4).map((tag) => `<span>${esc(tag)}</span>`).join('');
  const ambientParticles = Array.from({ length: 18 }, (_, index) => {
    const x = (index * 37 + 9) % 96;
    const y = (index * 53 + 12) % 92;
    const size = 3 + (index % 4) * 1.5;
    const duration = 15 + (index % 6) * 3;
    const delay = -(index % 7) * 2.4;
    return `<i style="--particle-x:${x}%;--particle-y:${y}%;--particle-size:${size}px;--particle-duration:${duration}s;--particle-delay:${delay}s"></i>`;
  }).join('');
  const content = `<div class="home-ambient-particles" aria-hidden="true">${ambientParticles}</div><article class="knowledge-home">
    <header class="knowledge-header">
      <div class="knowledge-heading">
        <span class="eyebrow">${lang === 'zh' ? 'VISUAL INTRODUCTION · 可视化导论' : 'VISUAL INTRODUCTION · COURSE MAP'}</span>
         <h1>${lang === 'zh' ? '构页有方' : 'Layout with Intent'}</h1>
        <p>${lang === 'zh' ? '从内容关系、空间约束与视觉层级出发，探索一张页面如何逐步成立。' : 'Explore how a page takes shape through content relationships, spatial constraints, and visual hierarchy.'}</p>
      </div>
      <div class="knowledge-header-actions" aria-label="${lang === 'zh' ? '课程进度' : 'Course progress'}">
        <div><span>COURSE PROGRESS</span><strong>${String(lastChapter).padStart(2, '0')} <i>/ 07</i></strong><span class="header-progress"><b style="width:${Math.round((lastChapter / chapters.length) * 100)}%"></b></span></div>
      </div>
    </header>
    <section class="knowledge-layout">
      <div class="knowledge-map-panel">
        <div class="knowledge-map-meta"><span>${lang === 'zh' ? '课程知识地图' : 'Course knowledge map'}</span><small>${lang === 'zh' ? '悬停探索关系 · 点击进入章节' : 'Hover to explore · Click to enter'}</small></div>
        <div class="knowledge-map-stage"><div class="map-grid" aria-hidden="true"></div><div class="map-axis map-axis-x" aria-hidden="true"></div><div class="map-axis map-axis-y" aria-hidden="true"></div><svg class="knowledge-edges" viewBox="0 0 1000 720" preserveAspectRatio="none" aria-hidden="true">${lines}${secondaryLines}</svg><div class="knowledge-nodes">${nodes}</div><div class="knowledge-subsection-popover" id="knowledge-subsections" aria-hidden="true"></div></div>
        <div class="learning-loop"><span>LEARNING LOOP</span><strong>01&nbsp; ${lang === 'zh' ? '观察' : 'Observe'}</strong><b></b><strong>02&nbsp; ${lang === 'zh' ? '建模' : 'Model'}</strong><b></b><strong>03&nbsp; ${lang === 'zh' ? '实现' : 'Build'}</strong><b></b><strong>04&nbsp; ${lang === 'zh' ? '验证' : 'Explore'}</strong></div>
      </div>
      <aside class="knowledge-detail" id="knowledge-detail"><div class="detail-status"><span>${lang === 'zh' ? 'CURRENT FOCUS · 当前章节' : 'CURRENT FOCUS'}</span><i></i></div><span class="detail-index">0${current.id}</span><h2>${esc(t(current.title))}</h2><p class="detail-subtitle">${subtitles[current.id - 1]}</p><p class="detail-summary">${esc(t(current.summary))}</p><div class="detail-label">${lang === 'zh' ? '本章学习' : 'IN THIS CHAPTER'}</div><div class="detail-tags">${tags}</div><div class="detail-stats"><span>${lang === 'zh' ? '5 个小节' : '5 Sections'}</span><span>${lang === 'zh' ? '约 32 分钟' : '32 min'}</span></div><a class="detail-action" href="./chapters/chapter-0${current.id}.html">${lastChapter > 1 ? (lang === 'zh' ? '继续本章' : 'Continue chapter') : (lang === 'zh' ? '进入第 1 章' : 'Enter chapter 1')} <b>→</b></a></aside>
    </section>
  </article>`;
  document.querySelector('#app').innerHTML = shell(content, 0);
  document.body.classList.add('knowledge-home-page');
  bindGlobal();
  bindKnowledgeMap(current.id);
}

function bindKnowledgeMap(defaultId) {
  const nodes = Array.from(document.querySelectorAll('.knowledge-node'));
  const detail = document.querySelector('#knowledge-detail');
  const popover = document.querySelector('#knowledge-subsections');
  const stage = document.querySelector('.knowledge-map-stage');
  if (!nodes.length || !detail || !popover || !stage) return;
  if (window.d3) d3.selectAll('.knowledge-edge').attr('vector-effect', 'non-scaling-stroke').style('opacity', 0).transition().duration(650).delay((_, index) => index * 65).style('opacity', 1);
  let hideTimer = 0;
  const subsectionItems = (id) => {
    const chapter = chapters.find((item) => item.id === Number(id));
    if (!chapter) return [];
    if (chapter.id === 1) return chapterOneSections.map((item) => ({ title: t(item.title), href: `./chapters/chapter-01-section-0${item.id}.html` }));
    return chapter.tags[lang].map((tag, index) => ({ title: tag, href: `./chapters/chapter-0${chapter.id}.html`, index }));
  };
  const showSubsections = (id) => {
    window.clearTimeout(hideTimer);
    const node = nodes.find((item) => item.dataset.nodeId === String(id));
    const items = subsectionItems(id);
    if (!node || !items.length) return;
    const nodeRect = node.getBoundingClientRect();
    const stageRect = stage.getBoundingClientRect();
    const top = nodeRect.top - stageRect.top;
    popover.innerHTML = `<div class="subsection-popover-kicker"><span>${lang === 'zh' ? '本章小节' : 'SECTIONS'}</span><small>0${id} / ${String(items.length).padStart(2, '0')}</small></div><div class="subsection-popover-list">${items.map((item, index) => `<a href="${item.href}"><span>0${index + 1}</span><strong>${esc(item.title)}</strong><i>→</i></a>`).join('')}</div>`;
    const isTopNode = top < 190;
    popover.style.left = `${nodeRect.left - stageRect.left + nodeRect.width / 2}px`;
    popover.style.top = `${isTopNode ? top + nodeRect.height + 12 : Math.max(10, top - 12)}px`;
    popover.classList.toggle('is-below', isTopNode);
    popover.classList.add('is-visible');
    popover.setAttribute('aria-hidden', 'false');
  };
  const hideSubsections = () => {
    window.clearTimeout(hideTimer);
    hideTimer = window.setTimeout(() => { popover.classList.remove('is-visible'); popover.setAttribute('aria-hidden', 'true'); }, 120);
  };
  const setFocus = (id, dim = true) => {
    const chapter = chapters.find((item) => item.id === Number(id));
    if (!chapter) return;
    const node = nodes.find((item) => item.dataset.nodeId === String(id));
    nodes.forEach((item) => item.classList.toggle('is-dimmed', dim && item !== node));
    document.querySelectorAll('.knowledge-edge').forEach((edge) => { const related = dim && edge.dataset.edge.split('-').includes(String(id)); edge.classList.toggle('is-related', related); edge.classList.toggle('is-muted', dim && !related); });
    const subtitle = (lang === 'zh' ? ['布局认知', '内容关系', '空间约束', '视觉层级', '结构建立', '响应式布局', '综合实践'] : ['Layout awareness', 'Content relationships', 'Spatial constraints', 'Visual hierarchy', 'Structure building', 'Responsive layout', 'Integrated practice'])[chapter.id - 1];
    detail.innerHTML = `<div class="detail-status"><span>${lang === 'zh' ? 'CURRENT FOCUS · 当前章节' : 'CURRENT FOCUS'}</span><i></i></div><span class="detail-index">0${chapter.id}</span><h2>${esc(t(chapter.title))}</h2><p class="detail-subtitle">${subtitle}</p><p class="detail-summary">${esc(t(chapter.summary))}</p><div class="detail-label">${lang === 'zh' ? '本章学习' : 'In this chapter'}</div><div class="detail-tags">${chapter.tags[lang].slice(0, 4).map((tag) => `<span>${esc(tag)}</span>`).join('')}</div><div class="detail-stats"><span>${lang === 'zh' ? '5 个小节' : '5 sections'}</span><span>${lang === 'zh' ? '约 32 分钟' : 'About 32 min'}</span></div><a class="detail-action" href="./chapters/chapter-0${chapter.id}.html">${chapter.id === defaultId ? (lang === 'zh' ? '继续本章' : 'Continue chapter') : (lang === 'zh' ? '进入本章' : 'Enter chapter')} <b>→</b></a>`;
  };
  nodes.forEach((node) => {
    node.addEventListener('mouseenter', () => { setFocus(node.dataset.nodeId); showSubsections(node.dataset.nodeId); });
    node.addEventListener('focus', () => { setFocus(node.dataset.nodeId); showSubsections(node.dataset.nodeId); });
    node.addEventListener('mouseleave', () => { setFocus(defaultId, false); hideSubsections(); });
  });
  popover.addEventListener('mouseenter', () => window.clearTimeout(hideTimer));
  popover.addEventListener('mouseleave', hideSubsections);
  setFocus(defaultId, false);
}

function renderHomeMethod() {
  const stages = lang === 'zh' ? [
    ['01', '观察', '先识别页面中的内容角色、阅读顺序和实际问题。'],
    ['02', '建模', '把视觉问题翻译成包含、对齐、流动和层叠关系。'],
    ['03', '验证', '通过真实 CSS 和动态演示观察浏览器如何重新计算。']
  ] : [
    ['01', 'Observe', 'Identify content roles, reading order, and the actual problem in the page.'],
    ['02', 'Model', 'Translate visual problems into containment, alignment, flow, and stacking relationships.'],
    ['03', 'Validate', 'Use real CSS and interactive demos to observe how the browser recalculates layout.']
  ];
  return `<section class="course-method" id="method"><div class="method-lead"><span class="eyebrow">${lang === 'zh' ? '课程方法' : 'Course method'}</span><h2>${lang === 'zh' ? '不是背属性，<br>而是学会判断。' : 'Do not memorize properties.<br>Learn to make judgments.'}</h2><p>${lang === 'zh' ? '每章都从一个可见的问题开始，经过理论模型，最后回到可操作的页面。' : 'Every chapter begins with a visible problem, passes through a theoretical model, and returns to an operable page.'}</p></div><div class="method-stages">${stages.map((stage, index) => `<article><span>${stage[0]}</span><div><strong>${stage[1]}</strong><p>${stage[2]}</p></div><div class="stage-visual stage-${index + 1}" aria-hidden="true"><i></i><i></i><i></i></div></article>`).join('')}</div></section>`;
}

function renderHomeRail() {
  const links = lang === 'zh' ? [['案例预览', 'case'], ['学习方法', 'method'], ['课程章节', 'chapters'], ['学习成果', 'outcomes']] : [['Case preview', 'case'], ['Learning method', 'method'], ['Chapters', 'chapters'], ['Outcomes', 'outcomes']];
  return `<aside class="auxiliary"><div class="aux-block"><span class="aux-title">${lang === 'zh' ? '本页目录' : 'On this page'}</span><nav>${links.map((item, index) => `<a class="toc-item ${index === 0 ? 'is-current' : ''}" href="#${item[1]}">${item[0]}</a>`).join('')}</nav></div><div class="aux-block aux-progress"><span class="aux-title">${ui[lang].progress}</span><strong>01 <i>/ 07</i></strong><div class="progress-track"><span style="width:14%"></span></div><p>${lang === 'zh' ? '当前 · 布局的本质' : 'Current · The Nature of Layout'}</p></div></aside>`;
}

let homeRailScrollHandler = null;

function bindHomeRail() {
  const links = Array.from(document.querySelectorAll('.toc-item'));
  const sections = links.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  if (!links.length || !sections.length) return;
  if (homeRailScrollHandler) window.removeEventListener('scroll', homeRailScrollHandler);
  homeRailScrollHandler = () => {
    let current = sections[0];
    sections.forEach((section) => { if (section.getBoundingClientRect().top <= 150) current = section; });
    if (Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight - 2) current = sections[sections.length - 1];
    links.forEach((link) => link.classList.toggle('is-current', link.getAttribute('href') === `#${current.id}`));
  };
  window.addEventListener('scroll', homeRailScrollHandler, { passive: true });
  homeRailScrollHandler();
}

function renderHomeOutcomes() {
  const questions = lang === 'zh' ? [
    ['结构', '这个元素应该属于哪个容器？'],
    ['空间', '可用宽度应该如何分配？'],
    ['节奏', '哪些内容应该被看作一组？'],
    ['模型', '此处应该使用普通流、Flex、Grid 还是定位？']
  ] : [
    ['Structure', 'Which container should this element belong to?'],
    ['Space', 'How should the available width be distributed?'],
    ['Rhythm', 'Which items should be perceived as one group?'],
    ['Model', 'Should this use normal flow, Flex, Grid, or positioning?']
  ];
  return `<section class="outcomes-section" id="outcomes"><div class="outcomes-copy"><span class="eyebrow">${lang === 'zh' ? '学习成果' : 'Learning outcomes'}</span><h2>${lang === 'zh' ? '完成课程后，先问对问题，再写代码。' : 'After the course, ask the right question before writing code.'}</h2><p>${lang === 'zh' ? '面对一个真实网页，你将能够从外到内分析页面骨架、容器关系、视觉节奏和交互层级。' : 'When facing a real page, you will be able to analyze its skeleton, container relationships, visual rhythm, and interaction layers from the outside in.'}</p><div class="outcome-flow"><span>CONTENT</span><b>→</b><span>RELATION</span><b>→</b><span>SPACE</span><b>→</b><span>CODE</span></div></div><div class="outcome-questions">${questions.map((item, index) => `<article><span>0${index + 1}</span><div><strong>${item[0]}</strong><p>${item[1]}</p></div></article>`).join('')}</div></section>`;
}

function enhanceChapterOne() {
  const badge = document.querySelector('.chapter-badge');
  const heading = document.querySelector('.chapter-heading');
  const lessonGrid = document.querySelector('.lesson-grid');
  const theoryCopy = document.querySelector('.theory-card .theory-copy');
  const codeWindow = document.querySelector('.code-card .code-window');
  if (!badge || !heading || !lessonGrid || !theoryCopy || !codeWindow) return;
  const goals = lang === 'zh' ? ['理解内容关系', '理解空间约束', '建立阅读顺序', '从结构而非 CSS 出发'] : ['Understand content relationships', 'Understand spatial constraints', 'Establish reading order', 'Start from structure, not CSS'];
  badge.innerHTML = `<div class="chapter-meta-kicker">CHAPTER</div><strong>01</strong><div class="chapter-goals"><span>${lang === 'zh' ? '本章目标' : 'Chapter goals'}</span><ul>${goals.map((goal) => `<li>${goal}</li>`).join('')}</ul></div><div class="chapter-status"><i></i>${ui[lang].available}</div>`;
  heading.insertAdjacentHTML('afterend', `<div class="chapter-path" aria-label="${lang === 'zh' ? '章节学习路径' : 'Chapter learning path'}"><div class="chapter-path-item is-current"><span>OBSERVE</span><small>${lang === 'zh' ? '观察' : 'Observe'}</small></div><b></b><div class="chapter-path-item"><span>MODEL</span><small>${lang === 'zh' ? '建模' : 'Model'}</small></div><b></b><div class="chapter-path-item"><span>VERIFY</span><small>${lang === 'zh' ? '验证' : 'Verify'}</small></div></div>`);
  theoryCopy.insertAdjacentHTML('afterbegin', `<div class="theory-quote"><span>①</span><strong>${lang === 'zh' ? '布局不是摆放元素，而是建立空间关系。' : 'Layout is not placing elements; it is establishing spatial relationships.'}</strong></div>`);
  codeWindow.insertAdjacentHTML('beforebegin', `<div class="code-bridge"><span>①</span>${lang === 'zh' ? '结构关系 → 页面骨架' : 'Spatial relationships → Page skeleton'}</div>`);
}

function bindHomeMap() {
  const detail = document.querySelector('#map-detail');
  const update = (id) => {
    const chapter = chapters.find((item) => item.id === Number(id));
    if (!chapter) return;
    document.querySelectorAll('[data-map-node]').forEach((node) => node.classList.toggle('is-selected', node.dataset.mapNode === String(id)));
    document.querySelectorAll('[data-zone]').forEach((zone) => zone.classList.toggle('is-highlighted', zone.dataset.zone === String(id)));
    document.querySelectorAll('[data-map-chapter]').forEach((row) => row.classList.toggle('is-focused', row.dataset.mapChapter === String(id)));
    detail.innerHTML = `<span class="eyebrow">${lang === 'zh' ? `当前聚焦 · 第 ${chapter.id} 章` : `Focused · Chapter ${chapter.id}`}</span><strong>${esc(t(chapter.title))}</strong><p>${esc(t(chapter.summary))}</p>`;
  };
  document.querySelectorAll('[data-map-node]').forEach((node) => node.addEventListener('click', () => update(node.dataset.mapNode)));
  document.querySelectorAll('[data-map-chapter]').forEach((row) => row.addEventListener('mouseenter', () => update(row.dataset.mapChapter)));
}

function renderDeepDive(chapter) {
  if (!chapter.deepDive) return '';
  const concepts = chapter.deepDive.concepts.map((concept) => `<article class="concept-item"><span>${concept.mark}</span><div><h3>${esc(t(concept.title))}</h3><p>${esc(t(concept.text))}</p></div></article>`).join('');
  const steps = chapter.deepDive.steps.map((step) => `<li><span>${step.number}</span><div><strong>${esc(t(step.title))}</strong><p>${esc(t(step.text))}</p></div></li>`).join('');
  return `<section class="deep-dive" id="theory"><div class="deep-dive-heading"><div><span class="eyebrow">${lang === 'zh' ? '理论展开' : 'Theory in depth'}</span><h2>${lang === 'zh' ? '判断布局的四个维度' : 'Four dimensions of layout judgment'}</h2></div><p>${lang === 'zh' ? 'CSS 属性只是实现手段；真正决定页面质量的是元素之间的关系。' : 'CSS properties are implementation tools; relationships between elements determine layout quality.'}</p></div><div class="concept-grid">${concepts}</div><div class="case-process" id="case-method"><div class="process-intro"><span class="eyebrow">${lang === 'zh' ? '案例方法' : 'Case method'}</span><h3>${lang === 'zh' ? '从内容到页面骨架' : 'From content to page skeleton'}</h3><p>${lang === 'zh' ? '按照固定顺序分析，可以避免一开始就陷入颜色、阴影和像素调整。' : 'A fixed analysis order prevents premature decisions about color, shadows, and pixel values.'}</p></div><ol>${steps}</ol></div></section>`;
}

const chapterOneSections = [
  {
    id: 1,
    title: { zh: '观察问题：布局不是摆放元素', en: 'Observe the problem: layout is not placement' },
    summary: { zh: '先从一个看起来很挤的页面开始，识别布局真正要解决的问题。', en: 'Start with a crowded-looking page and identify the problem layout actually needs to solve.' },
    explanation: { zh: ['布局不是把元素随意摆在画布上，而是建立一组空间关系：谁包含谁、谁优先被看到、哪些区域共享一条边线。', '浏览器不会像设计师一样“看懂”页面。它从 DOM 树出发，结合每个元素的布局规则，逐层计算可用空间、尺寸和位置。'], en: ['Layout is not placing elements freely on a canvas. It is a set of spatial relationships: containment, attention priority, and shared alignment edges.', 'A browser does not understand a page like a designer. It starts from the DOM tree and calculates available space, size, and position through layout rules.'] },
    code: '.course-body {\n  display: grid;\n  grid-template-columns: 38% 1fr;\n  gap: 12px;\n}\n\n.course-content {\n  max-width: none;\n}',
    demo: 'tree',
    principle: { zh: '先回答内容之间是什么关系，再决定它们应该放在哪里。', en: 'First ask how the content is related; only then decide where it should go.' }
  },
  {
    id: 2,
    title: { zh: '建立模型：四种空间关系', en: 'Build the model: four spatial relationships' },
    summary: { zh: '用包含、流动、对齐和优先四个维度，把视觉感受翻译成可讨论的结构问题。', en: 'Translate visual impressions into structural questions through containment, flow, alignment, and priority.' },
    explanation: { zh: ['父容器给子元素提供可用空间和定位参照；元素默认按照文档顺序占位；共享边线能够组织分散内容；尺寸、位置和留白共同形成视觉优先级。', '这四种关系比单独记忆 CSS 属性更重要，因为它们解释了页面为什么这样组织。'], en: ['A parent provides space and a positioning reference; elements occupy space in document order; shared edges organize separate content; size, position, and whitespace create priority.', 'These relationships matter more than memorizing individual CSS properties because they explain why a page is organized this way.'] },
    code: '<main class="course-page">\n  <header class="course-header">课程信息</header>\n  <div class="course-body">\n    <aside class="chapter-nav">章节导航</aside>\n    <section class="course-content">学习内容</section>\n  </div>\n</main>',
    demo: 'layout',
    principle: { zh: '先判断空间关系，再选择布局工具。', en: 'Identify the spatial relationship before choosing the layout tool.' }
  },
  {
    id: 3,
    title: { zh: '从内容到页面骨架', en: 'From content to page skeleton' },
    summary: { zh: '按照固定顺序分析内容，避免一开始就陷入颜色、阴影和像素调整。', en: 'Analyze content in a fixed order instead of starting with color, shadows, and pixel tuning.' },
    explanation: { zh: ['第一步盘点内容，第二步建立关系，第三步划分区域，最后验证阅读动线。', '这个过程让页面从内容结构出发，而不是从视觉装饰出发。'], en: ['First inventory the content, then establish relationships, divide regions, and finally verify the reading path.', 'This process makes the page grow from content structure instead of visual decoration.'] },
    code: '.course-page {\n  display: grid;\n  grid-template-areas:\n    "header header"\n    "nav content";\n}\n\n.course-header { grid-area: header; }\n.chapter-nav { grid-area: nav; }\n.course-content { grid-area: content; }',
    demo: 'audit',
    principle: { zh: '结构先成立，视觉层级才有可靠的基础。', en: 'Structure must work before visual hierarchy can be reliable.' }
  },
  {
    id: 4,
    title: { zh: 'DOM 结构如何变成页面空间', en: 'How DOM structure becomes page space' },
    summary: { zh: '观察 DOM 层级与页面区域之间的对应关系，理解浏览器如何计算布局。', en: 'Observe the correspondence between DOM hierarchy and page regions to understand browser layout calculation.' },
    explanation: { zh: ['DOM 不是内容的清单，它还决定了元素之间的包含关系、继承关系和布局参照。', '当页面结构能够解释视觉结构时，后续的 CSS 才会变得可维护、可验证。'], en: ['The DOM is not only a content list. It also defines containment, inheritance, and layout references.', 'When the DOM explains the visual structure, later CSS becomes maintainable and verifiable.'] },
    code: '<div class="course-body">\n  <aside class="chapter-nav">章节导航</aside>\n  <main class="course-content">\n    <article class="chapter-card">课程内容</article>\n    <div class="demo-panel">动态演示</div>\n  </main>\n</div>\n\n.course-body {\n  display: grid;\n  grid-template-columns: 240px 1fr;\n}',
    demo: 'tree',
    principle: { zh: '页面的视觉秩序应该能被 DOM 结构解释。', en: 'The page’s visual order should be explainable by its DOM structure.' }
  },
  {
    id: 5,
    title: { zh: '验证：让布局问题变得可观察', en: 'Verify: make layout problems observable' },
    summary: { zh: '通过动态演示调整布局参数，观察浏览器如何重新计算空间。', en: 'Adjust layout parameters in an interactive demo and observe how the browser recalculates space.' },
    explanation: { zh: ['理论不是停留在结论里。通过调整列数、间距和布局模型，可以把“感觉拥挤”变成可观察的变化。', '验证的目标不是追求唯一答案，而是确认每条布局规则都有清楚的空间职责。'], en: ['Theory should not stop at conclusions. Adjusting columns, gaps, and layout models turns “it feels crowded” into an observable change.', 'Verification is not about finding one correct answer; it is about confirming that every layout rule has a clear spatial responsibility.'] },
    code: '/* Before */\n.course-body {\n  grid-template-columns: 38% 1fr;\n  gap: 12px;\n}\n\n/* After */\n.course-body {\n  grid-template-columns: 240px 1fr;\n  gap: 32px;\n}\n.course-content { max-width: 820px; }',
    demo: 'layout',
    principle: { zh: '用可观察的变化验证理论，而不是只凭感觉调整。', en: 'Validate theory through observable changes instead of adjusting by feeling.' }
  }
];

const chapterOverviewMeta = {
  1: {
    keyConcepts: {
      zh: [['内容关系', 'Content Relationships'], ['空间模型', 'Spatial Model'], ['页面骨架', 'Page Structure'], ['DOM 与页面空间', 'DOM & Page Space'], ['布局验证', 'Layout Validation']],
      en: [['Content Relationships', 'Content relationships'], ['Spatial Model', 'Spatial model'], ['Page Structure', 'Page structure'], ['DOM & Page Space', 'DOM & page space'], ['Layout Validation', 'Layout validation']]
    },
    outcomes: {
      zh: ['识别内容关系', '建立空间模型', '组织页面骨架', '理解 DOM 与视觉布局', '验证布局判断'],
      en: ['Read content relationships', 'Build a spatial model', 'Organize a page skeleton', 'Connect DOM with visual layout', 'Validate layout judgment']
    }
  }
};

const chapterModel = {
  1: {
    zh: { title: '本章知识模型', subtitle: '从内容关系到页面空间，理解布局如何被建立', intro: '这一章不是在记 CSS 属性，而是在建立一套判断页面布局的方法。', stages: [['RELATION', '内容关系', '哪些内容应该属于一组，哪些内容应该保持距离。', 'Content Relationships'], ['MODEL', '空间模型', '将视觉感受转化为宽度、间距、对齐和流动关系。', 'Spatial Model'], ['STRUCTURE', '页面结构', '把内容关系组织成稳定的页面骨架。', 'Page Structure'], ['MAPPING', '布局映射', '理解 DOM 结构如何通过 CSS Layout 进入页面空间。', 'Layout Mapping'], ['VALIDATION', '验证反馈', '通过交互调整与对比，判断布局是否真正改善。', 'Validation Feedback']] },
    en: { title: 'CHAPTER MODEL', subtitle: 'How layout emerges from content relationships', intro: 'This chapter builds a method for judging layout instead of memorizing CSS properties.', stages: [['RELATION', 'Content Relationships', 'Identify what belongs together and what should stay apart.', 'Content Relationships'], ['MODEL', 'Spatial Model', 'Translate visual impressions into width, spacing, alignment, and flow.', 'Spatial Model'], ['STRUCTURE', 'Page Structure', 'Organize content into a stable page skeleton.', 'Page Structure'], ['MAPPING', 'Layout Mapping', 'Understand how DOM structure enters page space through CSS Layout.', 'Layout Mapping'], ['VALIDATION', 'Validation Feedback', 'Use interaction and comparison to test whether layout improves.', 'Validation Feedback']] }
  }
};

const sectionTeaching = {
  1: {
    zh: { explain: ['案例背景：课程主页同时放入课程信息、章节导航、正文和演示，所有内容都在争夺首屏空间。问题不在于元素太多，而在于它们没有被组织成清晰的关系。', '学习这一节时，先不要写 CSS。先把内容分成页面级信息、导航信息、学习内容和辅助演示四类，再观察它们各自应该占据什么空间。'], points: ['阅读宽度：一行文字是不是过长？', '间距：内容组之间有没有明确边界？', '比例：Sidebar 和 Main 谁更重要？', '层级：用户第一眼应该看到什么？'], code: '这段问题版本 CSS 让学生先看到关系失衡，再通过调整验证判断。', checks: ['正文宽度过长', '导航比例偏大', '区块间距偏小'], demo: '先调整 Content Width、Gap、Sidebar Ratio，再观察 Hierarchy 反馈。不要一次修改所有参数。', result: '结论：页面拥挤通常不是代码长度问题，而是内容关系没有被表达清楚。'},
    en: { explain: ['Case background: the course homepage places course information, chapter navigation, body content, and demos in the same view. The problem is not simply the amount of content; it is the lack of clear relationships.', 'Do not write CSS first. Classify the content into page information, navigation, learning content, and supporting demos, then decide what space each group should occupy.'], points: ['Reading width: is one line too long?', 'Spacing: do content groups have boundaries?', 'Proportion: which matters more, Sidebar or Main?', 'Hierarchy: what should users see first?'], code: 'This problem-version CSS lets students see an imbalanced relationship first, then verify it through adjustment.', checks: ['body width is too wide', 'navigation ratio is too large', 'section gap is too tight'], demo: 'Adjust Content Width, Gap, and Sidebar Ratio, then observe the Hierarchy feedback. Change one parameter at a time.', result: 'Conclusion: a crowded page is usually a relationship problem, not a code-length problem.' }
  },
  2: {
    zh: { explain: ['“包含、流动、对齐、优先”是观察布局的四个镜头。它们把模糊的视觉感受变成可以检查的结构问题。', '例如两个卡片看起来没有对齐，可能不是 margin 数值错误，而是它们没有共享同一个网格轨道；一个按钮被挤到下一行，可能是父容器没有分配足够的可用空间。'], points: ['包含：确定空间参照', '流动：尊重文档顺序', '对齐：建立共享边线', '优先：控制视觉重量'], code: 'Grid 在这里表达的是页面级的二维关系：左侧是固定导航，右侧是可以收缩的内容空间。minmax(0, 1fr) 能避免长内容把网格撑破。', checks: ['固定列表达稳定边界', '1fr 表达剩余空间', 'gap 表达模块之间的关系'], demo: '分别切换包含关系、流动方向、对齐方式和视觉优先级，观察同一页面如何被重新组织。', result: '结论：先说清楚关系，再选择 Flex、Grid 或普通文档流。'},
    en: { explain: ['Containment, flow, alignment, and priority are four lenses for reading layout. They turn vague visual impressions into structural questions that can be checked.', 'When two cards look misaligned, the cause may not be a wrong margin value. They may not share a grid track. When a button wraps, its parent may simply lack available space.'], points: ['Containment: define the spatial reference', 'Flow: respect document order', 'Alignment: establish shared edges', 'Priority: control visual weight'], code: 'Grid expresses a two-dimensional page relationship: a fixed navigation column and a flexible content column. minmax(0, 1fr) prevents long content from breaking the grid.', checks: ['fixed tracks express stable boundaries', '1fr expresses remaining space', 'gap expresses relationships between modules'], demo: 'Switch containment, flow direction, alignment, and priority. Observe how the same page is reorganized.', result: 'Conclusion: explain the relationship first, then choose normal flow, Flexbox, or Grid.' }
  },
  3: {
    zh: { explain: ['页面骨架不是视觉稿的复制品，而是内容关系的空间翻译。盘点内容之后，必须继续判断哪些内容属于同一组、哪些内容是主信息。', '当页面区域被划分出来，后续的颜色、间距和组件样式才有明确作用对象。否则每一次调整都可能只是局部补丁。'], points: ['盘点：列出内容，不讨论样式', '建立关系：判断分组和优先级', '划分区域：为每组内容建立边界', '验证动线：从标题开始检查阅读顺序'], code: 'grid-template-areas 把内容关系直接写进 CSS。每个区域都有名字，代码阅读者可以快速理解页面骨架，而不必猜测第几个 grid-column。', checks: ['header 负责入口信息', 'nav 负责学习路径', 'content 负责主任务'], demo: '切换 Single、Sidebar、Two Column 和 Editorial，保持内容不变，只观察页面骨架与阅读路径的变化。', result: '结论：结构先成立，视觉层级才有可靠的基础。'},
    en: { explain: ['A page skeleton is not a copy of a visual mockup. It is a spatial translation of content relationships. After inventorying content, decide what belongs together and what is primary.', 'Once regions are defined, colors, spacing, and component styles have clear targets. Otherwise each adjustment becomes a local patch.'], points: ['Inventory: list content without discussing style', 'Relate: decide grouping and priority', 'Zone: create boundaries for groups', 'Verify: check reading order from the heading'], code: 'grid-template-areas writes content relationships directly into CSS. Named regions make the skeleton readable without guessing column numbers.', checks: ['header owns entry information', 'nav owns the learning path', 'content owns the main task'], demo: 'Switch Single, Sidebar, Two Column, and Editorial while keeping content unchanged. Compare skeleton and reading path.', result: 'Conclusion: visual hierarchy becomes reliable only after structure works.' }
  },
  4: {
    zh: { explain: ['DOM 树和页面空间之间存在一条重要映射：父节点通常提供边界，子节点在边界内部参与尺寸和位置计算。', '这也是为什么“套很多 div”不一定能解决布局问题。没有清楚的语义和空间职责，额外的包装层只会增加定位参照和调试成本。'], points: ['节点层级对应空间包含', '节点顺序影响默认流动', '节点角色帮助解释页面区域'], code: '这段代码让页面结构与视觉区域一一对应。article 是内容单元，demo-panel 是独立的验证单元，而不是把演示塞进正文段落里。', checks: ['结构可读', '区域职责单一', '演示与正文边界清楚'], demo: '点击 DOM 节点或页面区域，再切换 Block、Flex、Grid，观察同一 DOM 如何形成不同空间。', result: '结论：能够被 DOM 解释的视觉秩序，才更容易维护。'},
    en: { explain: ['There is a direct mapping between the DOM tree and page space: parents usually provide boundaries, while children are measured and positioned inside them.', 'That is why adding many divs does not automatically solve layout problems. Without clear roles, wrappers increase positioning references and debugging cost.'], points: ['node hierarchy maps to containment', 'node order affects normal flow', 'node roles explain page regions'], code: 'This structure maps DOM regions to visual regions. article is a content unit and demo-panel is an independent validation unit instead of being buried inside a paragraph.', checks: ['readable structure', 'single responsibility per region', 'clear boundary between content and demo'], demo: 'Click a DOM node or page region, then switch Block, Flex, and Grid to observe the same DOM form different spaces.', result: 'Conclusion: visual order is easier to maintain when the DOM can explain it.' }
  },
  5: {
    zh: { explain: ['布局理论需要通过变化被验证。调整列数、间距和布局模型时，页面会暴露出哪些内容是主信息、哪些空间是可压缩的。', '验证不是把页面调到唯一的“正确答案”，而是检查：在不同空间约束下，页面仍然能保持清晰的关系和阅读顺序。'], points: ['改变参数，观察空间如何重新分配', '比较布局模型，而不是只看最终外观', '记录每条规则解决了什么问题'], code: '响应式规则不是单独的“手机样式”，而是对空间约束的验证。当内容宽度不足时，列数减少，页面关系仍然保持可读。', checks: ['内容列可以收缩', '间距有明确的节奏', '窄屏状态仍有清晰主次'], demo: '在 Original / Current 之间切换，只调整阅读宽度、Gap、Alignment 和 Density，观察四项反馈。', result: '结论：用可观察的变化验证理论，而不是只凭感觉调整。'},
    en: { explain: ['Layout theory needs to be tested through change. When columns, gaps, and layout models change, the page reveals what is primary and what space can be compressed.', 'Verification is not about finding one perfect answer. It checks whether relationships and reading order remain clear under different spatial constraints.'], points: ['change parameters and observe redistribution', 'compare layout models, not only final appearance', 'record which problem each rule solves'], code: 'Responsive rules are tests of spatial constraints, not a separate mobile decoration layer. When width is limited, the column count changes while the relationships remain readable.', checks: ['content columns can shrink', 'spacing follows a rhythm', 'narrow states preserve hierarchy'], demo: 'Switch Original / Current. Adjust only reading width, gap, alignment, and density, then inspect the four feedback signals.', result: 'Conclusion: validate theory through observable changes instead of adjusting by feeling.' }
  }
};

const chapterLessonContent = {
  1: {
    zh: { problem: '同一个课程学习页面同时放入课程信息、章节导航、正文、学习卡片和演示区。代码并不长，但正文过宽、侧栏过重、区块间距过小，用户很难判断先看什么。', why: '“拥挤”不等于元素太多。阅读宽度、间距、比例、对齐和层级共同决定了页面的负担；颜色和装饰只能改变表面，不能修复关系。', principle: '先观察哪里不舒服，再判断是哪一种空间关系出了问题。', model: ['Reading Width · 一行文字是否过长', 'Spacing · 内容组之间是否有边界', 'Proportion · Sidebar 与 Main 的面积是否符合职责', 'Hierarchy · 第一眼看到的是否真的是主任务'], example: '案例诊断：Sidebar 占 38%，正文 max-width 没有限制，Section Gap 只有 12px。导航获得了接近主内容的视觉重量，长行文字和紧密区块又把页面压成一片。', mistakes: ['页面挤了就统一缩小字体：这只会降低可读性，没有改变空间关系。', '页面乱了就给所有模块加卡片：边框增加了视觉噪声，不能代替分组。', '内容多就无脑增加页面宽度：更大的画布可能让阅读行更长。'], tryIt: '找出当前案例中最明显的 3 个问题，并分别标记为阅读宽度、间距、比例或层级。再只调整一个参数，观察 Before / Current 的变化。', takeaway: '先看页面哪里不舒服，再问是哪一种关系出了问题。', next: '现在我们已经能看出问题，下一节把这些感觉转化成可以描述的空间模型。', codeWhy: '这段问题版本 CSS 完全合法，但 38% 的导航比例、12px 的间距和不受限的正文宽度共同表达了不合理关系。浏览器会执行规则，却不会替你判断视觉职责。' },
    en: { problem: 'The same course page places course information, chapter navigation, body content, learning cards, and a demo in one view. The code is short, but a wide body, dominant sidebar, and tight section gaps make the reading path unclear.', why: 'Crowding does not simply mean too many elements. Reading width, spacing, proportion, alignment, and hierarchy create the burden; color and decoration cannot repair those relationships.', principle: 'First notice what feels uncomfortable, then identify which spatial relationship is responsible.', model: ['Reading Width · Is one line too long?', 'Spacing · Do content groups have boundaries?', 'Proportion · Do Sidebar and Main reflect their roles?', 'Hierarchy · Is the first thing seen the main task?'], example: 'Case diagnosis: the Sidebar takes 38%, the body has no max-width, and Section Gap is only 12px. Navigation gains too much visual weight while long lines and tight groups flatten the page.', mistakes: ['Shrink every font when the page feels crowded: readability drops while the relationship stays the same.', 'Add a card around every module when the page feels messy: borders add noise instead of grouping.', 'Make the page wider whenever there is more content: a larger canvas can create longer reading lines.'], tryIt: 'Find the three clearest problems in the case and label them as reading width, spacing, proportion, or hierarchy. Change one parameter at a time and compare Before / Current.', takeaway: 'Notice what feels wrong first, then ask which relationship caused it.', next: 'Now that we can see the problem, the next section turns the feeling into a spatial model.', codeWhy: 'This problem CSS is valid, but 38% navigation, a 12px gap, and unrestricted body width express poor relationships together. The browser executes rules; it does not judge visual responsibility.' }
  },
  2: {
    zh: { problem: '上一节看到了正文太宽、侧栏太重、区块太挤，但“太重”还不是可执行的描述。本节要把感觉拆成四种关系。', why: '页面稳定性来自关系：父节点提供参照，文档顺序形成流动，共享边界产生对齐，空间占比表达优先级。', principle: '把页面看成关系系统，而不是盒子集合。', model: ['Containment · course-body 包含 sidebar 与 main', 'Flow · 内容按文档顺序参与布局', 'Alignment · 标题、正文和 Demo 共享边界', 'Priority · Main 比辅助导航拥有更高空间权重'], example: '在同一个课程页面中，course-page 包含 header 与 body；body 的 sidebar 和 main 是兄弟关系；main 内部再按 Intro → Content → Demo 流动。', mistakes: ['为了视觉效果随意改变 DOM 层级：短期看似对齐，长期失去空间参照。', '大量使用 absolute positioning：把流动关系变成坐标补丁。', '只看元素本身，不看父子关系：局部 margin 无法解释整页空间。', '所有区域使用同样的视觉重量：页面失去主次。'], tryIt: '把案例中的元素逐一判断为包含、流动、对齐或优先关系；再切换布局方式，观察同一组内容为什么会得到不同空间。', takeaway: '先说清楚关系，再选择普通流、Flex 或 Grid。', next: '关系已经明确，下一节要把它们组织成可以承载内容的页面骨架。', codeWhy: 'aside 和 section 作为 course-body 的兄弟元素，正好表达“导航与主内容并列”；240px 与 1fr 则把稳定边界和剩余空间写成可读的关系。' },
    en: { problem: 'The previous section revealed a wide body, a dominant sidebar, and tight groups, but “too heavy” is not yet an executable description. This section breaks the feeling into four relationships.', why: 'Stable pages come from relationships: parents provide references, document order creates flow, shared edges create alignment, and space expresses priority.', principle: 'Read the page as a relationship system, not a collection of boxes.', model: ['Containment · course-body contains sidebar and main', 'Flow · content participates in document order', 'Alignment · heading, body, and demo share edges', 'Priority · Main receives more space than supporting navigation'], example: 'In the same course page, course-page contains header and body; body has sibling sidebar and main; main then flows Intro → Content → Demo.', mistakes: ['Changing DOM hierarchy only for appearance: the page loses a stable reference.', 'Using lots of absolute positioning: flow becomes coordinate patches.', 'Inspecting elements without parents and children: local margins cannot explain the page.', 'Giving every region equal weight: hierarchy disappears.'], tryIt: 'Classify each case element as containment, flow, alignment, or priority. Then switch layout modes and compare the resulting space.', takeaway: 'Explain the relationship first, then choose normal flow, Flexbox, or Grid.', next: 'With relationships clear, the next section organizes them into a page skeleton.', codeWhy: 'Making aside and section siblings inside course-body expresses navigation and content as parallel responsibilities. 240px and 1fr turn a stable edge plus remaining space into a readable rule.' }
  },
  3: {
    zh: { problem: '现在已经知道内容之间的关系，但仍要决定课程标题、导航、正文、代码、示例和总结如何分区。相同内容可以有多种骨架。', why: '页面骨架是内容结构的空间翻译。先盘点内容，再分组、排序、划区，最后验证动线，能避免用装饰补救结构。', principle: '页面骨架不是装饰，而是内容关系的空间表达。', model: ['Global · Header 与课程级信息', 'Navigation · Sidebar 与学习路径', 'Primary · Main 与连续阅读任务', 'Interactive · Demo 作为正文中的辅助验证'], example: '当前案例选择 Sidebar Layout：导航持续可见但不应成为视觉中心；正文拥有连续阅读空间；Demo 嵌入 Main，而不是独立抢占第三栏。', mistakes: ['所有页面都套三栏：结构没有从内容职责出发。', '只凭“好不好看”决定骨架：短期漂亮，阅读动线可能断裂。', 'Sidebar 与 Main 平分空间：辅助职责获得了不合理权重。', '把 Demo 独立成第三栏：主内容反而被压窄。'], tryIt: '让同一组内容依次尝试 Single、Sidebar、Two Column、Editorial 和 Dashboard 五种骨架，只观察阅读路径和区域职责。', takeaway: '内容没变，骨架改变后阅读体验会变；因此结构必须先于装饰。', next: '下一节继续追问：这些页面区域在 DOM 中如何表达，并如何进入二维空间。', codeWhy: '命名的 grid-template-areas 把 header、nav、content 的职责直接写出来。240px + 1fr 让 Sidebar 保持稳定边界，同时把主要空间留给 Main。' },
    en: { problem: 'The relationships are clear, but the course title, navigation, body, code, examples, and summary still need regions. The same content can take several skeletons.', why: 'A page skeleton translates content structure into space. Inventory, group, order, zone, then verify the path instead of patching structure with decoration.', principle: 'A page skeleton is the spatial expression of content relationships, not decoration.', model: ['Global · Header and course-level information', 'Navigation · Sidebar and learning path', 'Primary · Main and continuous reading task', 'Interactive · Demo as supporting verification inside Main'], example: 'The case uses a Sidebar Layout: navigation stays available without becoming the visual center; the body keeps a continuous reading space; Demo stays inside Main instead of taking a third column.', mistakes: ['Using three columns everywhere: the skeleton ignores content responsibility.', 'Choosing structure only by appearance: a pretty result can still break the reading path.', 'Giving Sidebar and Main equal width: supporting content gets too much weight.', 'Making Demo a third column: the main reading area becomes too narrow.'], tryIt: 'Try the same content in Single, Sidebar, Two Column, Editorial, and Dashboard skeletons. Compare only path and responsibility.', takeaway: 'The content can stay the same while the skeleton changes the reading experience, so structure comes before decoration.', next: 'Next we ask how these visual regions are expressed in the DOM and enter page space.', codeWhy: 'Named grid-template-areas writes the responsibilities of header, nav, and content into CSS. 240px plus 1fr preserves a stable navigation edge while giving the main task the remaining space.' }
  },
  4: {
    zh: { problem: 'HTML 只有层级关系，浏览器却要把它变成二维页面。为什么 aside 会在左边，main 会在右边？HTML 本身并不知道。', why: 'DOM 定义父子、兄弟和顺序；父容器的 display 决定直接子元素进入哪一种布局上下文，CSS 再计算尺寸、轨道和位置。', principle: 'DOM 描述谁和谁有关系，CSS 决定这些关系如何进入页面空间。', model: ['Parent / Child · course-body 是 aside 与 main 的父节点', 'Sibling · aside 与 main 参与同一布局上下文', 'Display · block、flex、grid 组织直接子元素', 'Mapping · DOM 节点应能解释页面区域'], example: '同一组 aside + main，在 block 中上下排列，在 flex 中形成一维并列，在 grid 中可以使用 240px | 1fr 的二维轨道。', mistakes: ['把 DOM 顺序和视觉位置当成同一件事：CSS 可以改变布局方向。', '用 margin 强行推元素：空间职责变成脆弱补丁。', '为了左右布局使用 absolute：脱离正常流动。', '不理解父容器 display 却一直修改子元素：参照上下文始终没有解决。'], tryIt: '先点击 DOM Tree 中的 aside、main 和 article，再依次切换 block、flex、grid，预测并验证页面区域如何变化。', takeaway: '能被 DOM 解释的视觉秩序，才更容易维护和验证。', next: '最后一节将把这些空间变化放进 Before / Current 对比中，验证判断是否成立。', codeWhy: 'HTML 先定义 course-body、aside 和 main 的关系，display:grid 再把同层兄弟元素放进二维布局上下文。结构和空间各自承担清楚职责。' },
    en: { problem: 'HTML gives us hierarchy, but the browser must turn it into a two-dimensional page. Why does aside appear left and main right? HTML alone does not know.', why: 'The DOM defines parents, children, siblings, and order. The parent display chooses a layout context, and CSS calculates size, tracks, and position inside it.', principle: 'The DOM describes relationships; CSS decides how those relationships enter page space.', model: ['Parent / Child · course-body parents aside and main', 'Sibling · aside and main share a layout context', 'Display · block, flex, and grid organize direct children', 'Mapping · DOM nodes should explain page regions'], example: 'The same aside + main stack in block, align in one dimension with flex, and form 240px | 1fr tracks with grid.', mistakes: ['Treating DOM order and visual position as identical: CSS can change direction.', 'Pushing elements with margin: responsibilities become fragile patches.', 'Using absolute positioning for columns: normal flow is lost.', 'Changing children without understanding the parent display: the reference context stays wrong.'], tryIt: 'Click aside, main, and article in the DOM Tree. Switch block, flex, and grid, then predict and verify the region changes.', takeaway: 'Visual order is easier to maintain and verify when the DOM can explain it.', next: 'The final section places these changes into Before / Current comparison to test the judgment.', codeWhy: 'HTML first defines the relationship among course-body, aside, and main. display:grid then places the sibling elements into a two-dimensional context, keeping structure and space distinct.' }
  },
  5: {
    zh: { problem: '“我觉得这个版本更好”还不够。需要同时比较正文行长、间距、对齐、层级和密度，确认变化是否真的改善了阅读路径。', why: '验证不是寻找唯一答案，而是在不同空间约束下检查关系是否仍然清楚，并能解释每个变化解决了什么问题。', principle: '好的布局判断，应该能通过变化解释，而不是只靠感觉。', model: ['Reading Width · Too Narrow / Comfortable / Too Wide', 'Spacing · 同组靠近，不同组有边界', 'Alignment · 标题、正文、卡片共享稳定边界', 'Hierarchy · 主任务先被看到', 'Density · 信息分组降低负担，而非简单减少内容'], example: '案例可以从 Sidebar 38%、Content 1180px、Section Gap 12px 调整为约 24%、820px、32px，再比较阅读路径、留白和主次是否改善。', mistakes: ['只看是不是更漂亮：审美不能替代空间证据。', '一次改很多东西：无法知道哪个变化有效。', '只看单个组件：局部改善可能损害整页关系。', '只在一个屏幕宽度验证：布局可能只在当前视口成立。'], tryIt: '先记录 Before，再一次只改一个参数，观察 Reading Width、Spacing、Alignment、Hierarchy 和 Density 的反馈，最后查看 Current。', takeaway: '用可观察的变化验证理论，而不是只凭感觉调整。', next: '完成验证后，回到第一节重新观察，你已经拥有了一套可迁移的布局判断方法。', codeWhy: 'Before 与 After 同时调整列比例、gap 和 content max-width，不是某一个属性拯救页面，而是多种关系一起变得合理。' },
    en: { problem: '“This version feels better” is not enough. Compare reading width, spacing, alignment, hierarchy, and density to confirm the reading path actually improved.', why: 'Validation does not search for one answer. It checks whether relationships stay clear under constraints and whether each change has an explainable purpose.', principle: 'A good layout judgment explains change instead of relying on feeling.', model: ['Reading Width · Too Narrow / Comfortable / Too Wide', 'Spacing · groups stay close while sections gain boundaries', 'Alignment · heading, body, and cards share stable edges', 'Hierarchy · the primary task is seen first', 'Density · grouping lowers burden without simply removing content'], example: 'The case can move from Sidebar 38%, Content 1180px, Section Gap 12px toward about 24%, 820px, and 32px, then compare path, whitespace, and hierarchy.', mistakes: ['Judging only whether it looks prettier: taste is not spatial evidence.', 'Changing everything at once: the useful cause becomes unclear.', 'Inspecting one component only: local improvement can damage the page.', 'Validating at one viewport only: the layout may work only at that width.'], tryIt: 'Record Before, change one parameter at a time, observe Reading Width, Spacing, Alignment, Hierarchy, and Density, then inspect Current.', takeaway: 'Validate theory through observable changes instead of adjusting by feeling.', next: 'After validation, return to the first section. You now have a transferable method for judging layout.', codeWhy: 'Before and After change ratio, gap, and content max-width together. No single property saves the page; several relationships become reasonable at once.' }
  }
};

const quizQuestion = (questionZh, questionEn, optionsZh, optionsEn, answer, explanationZh, explanationEn) => ({
  question: { zh: questionZh, en: questionEn },
  options: { zh: optionsZh, en: optionsEn },
  answer,
  explanation: { zh: explanationZh, en: explanationEn }
});

const sectionQuizMap = {
  1: {
    title: { zh: '观察问题', en: 'Observe the problem' },
    questions: [
      quizQuestion('布局问题首先应该判断什么？', 'What should you identify first in a layout problem?', ['颜色是否足够丰富', '内容之间的空间关系', '阴影是否足够明显', '每个元素的固定宽度'], ['Whether the colors are rich enough', 'The spatial relationships between content', 'Whether the shadows are visible enough', 'A fixed width for every element'], 1, '布局首先要解释谁包含谁、谁先被看到，以及哪些区域应该对齐。', 'Layout should first explain containment, reading priority, and shared alignment.'),
      quizQuestion('为什么章节导航适合成为独立的 aside 区域？', 'Why is chapter navigation a good fit for its own aside region?', ['它需要与正文争夺同一层级的注意力', '它承担独立的导航职责', '它必须脱离 DOM 结构', '它只能使用绝对定位'], ['It should compete with the body at the same level', 'It has an independent navigation responsibility', 'It must leave the DOM structure', 'It can only use absolute positioning'], 1, '导航与学习内容职责不同，独立语义区域能让空间关系更清楚。', 'Navigation and learning content have different responsibilities, so a semantic region clarifies their spatial relationship.'),
      quizQuestion('浏览器理解页面时主要从哪里开始？', 'Where does the browser primarily start when it interprets a page?', ['设计稿中的视觉意图', '用户的阅读习惯', 'DOM 结构和 CSS 规则', '页面中的图片内容'], ['The visual intent in a design mockup', 'The user’s reading habits', 'The DOM structure and CSS rules', 'The images on the page'], 2, '浏览器从 DOM 和 CSS 出发，逐层计算可用空间、尺寸与位置。', 'The browser starts from the DOM and CSS, then calculates space, size, and position layer by layer.'),
      quizQuestion('页面阅读顺序主要帮助我们判断什么？', 'What does reading order help us determine?', ['用户先看到什么，再看到什么', '所有区域是否使用同一种颜色', '代码是否足够短', '每个节点是否都有动画'], ['What the user sees first and next', 'Whether every region uses the same color', 'Whether the code is short enough', 'Whether every node has animation'], 0, '阅读顺序把内容重要性转化为视觉层级，避免所有区域同时争夺注意力。', 'Reading order translates content importance into visual hierarchy so every region does not compete equally.'),
      quizQuestion('一个页面看起来很挤，最可能首先要检查什么？', 'When a page feels crowded, what should you check first?', ['是否需要更多装饰', '是否需要更多动画', '内容关系是否表达清楚', '是否应该把字体变得更小'], ['Whether it needs more decoration', 'Whether it needs more animation', 'Whether the content relationships are clear', 'Whether the type should be smaller'], 2, '拥挤通常首先是关系和层级问题，而不是装饰数量问题。', 'Crowding is usually first a problem of relationships and hierarchy, not a lack of decoration.' )
    ]
  },
  2: {
    title: { zh: '建立模型', en: 'Build the model' },
    questions: [
      quizQuestion('本节用哪四种关系观察布局？', 'Which four relationships does this section use to read layout?', ['颜色、阴影、圆角、动画', '包含、流动、对齐、优先', '标题、正文、按钮、图片', '宽度、高度、旋转、透明度'], ['Color, shadow, radius, animation', 'Containment, flow, alignment, priority', 'Heading, body, button, image', 'Width, height, rotation, opacity'], 1, '这四种关系把模糊的视觉感受转化成可以检查的结构问题。', 'These four relationships turn vague visual impressions into structural questions that can be checked.'),
      quizQuestion('为什么 Grid 中常用 minmax(0, 1fr)？', 'Why is minmax(0, 1fr) often used in a Grid track?', ['让内容永远不能换行', '避免长内容把可收缩轨道撑破', '让所有列都变成固定宽度', '取消网格之间的间距'], ['To prevent content from wrapping', 'To keep long content from breaking a flexible track', 'To make every column fixed-width', 'To remove the gap between tracks'], 1, '0 允许轨道在需要时收缩，1fr 再分配剩余空间。', 'The 0 lets the track shrink when needed, while 1fr distributes remaining space.'),
      quizQuestion('两个卡片看起来没有对齐，除了检查 margin，还应检查什么？', 'When two cards look misaligned, what should you inspect besides margin?', ['它们是否共享同一个网格轨道', '它们是否都使用动画', '它们的文字是否足够长', '它们是否都设置了 z-index'], ['Whether they share the same grid track', 'Whether they both use animation', 'Whether their text is long enough', 'Whether they both have z-index'], 0, '对齐往往来自共享的轨道或边界，而不只是某一个元素的 margin。', 'Alignment often comes from shared tracks or edges, not only from one element’s margin.'),
      quizQuestion('什么时候更适合用 Grid？', 'When is Grid usually the better fit?', ['组织单条工具栏中的几个按钮', '建立行列同时存在的页面区域关系', '给一个元素添加阴影', '控制文字颜色'], ['Arranging a few buttons in one toolbar row', 'Building page regions with both rows and columns', 'Adding a shadow to an element', 'Controlling text color'], 1, 'Grid 适合表达二维页面地图，Flexbox 更常用于一维排列。', 'Grid expresses a two-dimensional page map, while Flexbox is often used for one-dimensional arrangement.'),
      quizQuestion('gap 在页面模型中主要表达什么？', 'What does gap mainly express in a page model?', ['模块之间的空间关系', '元素的语义标签', '浏览器的加载顺序', '图片的压缩质量'], ['The spatial relationship between modules', 'The semantic tag of an element', 'The browser loading order', 'The compression quality of an image'], 0, 'gap 不是装饰参数，它把并列模块之间的距离关系明确写出来。', 'gap is not decoration; it makes the distance relationship between sibling modules explicit.' )
    ]
  },
  3: {
    title: { zh: '页面骨架', en: 'Page skeleton' },
    questions: [
      quizQuestion('从内容到页面骨架的推荐顺序是什么？', 'What is the recommended order from content to page skeleton?', ['先调颜色，再加动画，最后写 DOM', '盘点内容、建立关系、划分区域、验证动线', '先固定所有宽度，再删除内容', '先做阴影，再决定谁属于谁'], ['Tune color, add animation, then write the DOM', 'Inventory content, establish relationships, divide regions, verify the path', 'Fix every width, then remove content', 'Add shadows, then decide ownership'], 1, '固定顺序能让结构先成立，再把关系翻译成页面区域。', 'A fixed sequence lets structure work first, then translates relationships into page regions.'),
      quizQuestion('为什么要先盘点内容？', 'Why should you inventory content first?', ['为了让页面立刻更有装饰', '为了确认页面有哪些职责和信息类型', '为了避免使用语义标签', '为了把所有内容放进一个盒子'], ['To decorate the page immediately', 'To identify the page’s responsibilities and information types', 'To avoid semantic tags', 'To put everything in one box'], 1, '只有知道页面承载什么内容，才能判断它们应该如何分组与分区。', 'Only after identifying the content can you decide how it should be grouped and zoned.'),
      quizQuestion('“结构先成立”意味着什么？', 'What does “structure must work first” mean?', ['先确定关系和区域，再处理视觉层级', '完全不需要 CSS', '所有元素都必须使用 Grid', '页面必须只有黑白两色'], ['Establish relationships and regions before visual hierarchy', 'CSS is not needed at all', 'Every element must use Grid', 'The page must use only black and white'], 0, '视觉层级需要可靠的结构作为参照，不能用装饰替代页面骨架。', 'Visual hierarchy needs a reliable structural reference; decoration cannot replace the page skeleton.'),
      quizQuestion('为什么要单独验证阅读动线？', 'Why should you verify the reading path separately?', ['确认视线顺序是否与内容重要性一致', '确认每个按钮都有动画', '确认代码行数最少', '确认所有区域一样宽'], ['To confirm the reading order matches content importance', 'To ensure every button has animation', 'To minimize line count', 'To make every region the same width'], 0, '动线验证检查的是视觉优先级是否真正传达了内容层级。', 'Path verification checks whether visual priority actually communicates content hierarchy.'),
      quizQuestion('页面骨架最不应该由什么主导？', 'What should least determine the page skeleton?', ['内容关系', '区域职责', '阅读顺序', '孤立的装饰效果'], ['Content relationships', 'Regional responsibilities', 'Reading order', 'Isolated decorative effects'], 3, '骨架应由内容和空间关系主导，装饰只能在结构成立后辅助表达。', 'The skeleton should be driven by content and spatial relationships; decoration supports it only after structure works.' )
    ]
  },
  4: {
    title: { zh: 'DOM 与页面空间', en: 'DOM & page space' },
    questions: [
      quizQuestion('DOM 结构除了内容清单，还决定什么？', 'Besides listing content, what does the DOM structure determine?', ['包含关系、继承关系和布局参照', '屏幕的物理亮度', '图片的文件大小', '用户的网络速度'], ['Containment, inheritance, and layout references', 'The physical brightness of the screen', 'The file size of an image', 'The user’s network speed'], 0, 'DOM 层级会影响元素属于谁、继承什么，以及以谁作为布局参照。', 'DOM hierarchy affects ownership, inheritance, and the reference frame for layout.'),
      quizQuestion('在示例结构中，article 更像什么？', 'In the example structure, what is article most like?', ['一个完整的内容单元', '页面级导航容器', '全局顶栏', '浮在页面上的提示层'], ['A complete content unit', 'A page-level navigation container', 'A global top bar', 'A tooltip floating above the page'], 0, 'article 把一个完整内容单元保持在同一语义边界内。', 'article keeps one complete content unit inside the same semantic boundary.'),
      quizQuestion('为什么页面视觉结构应该能被 DOM 解释？', 'Why should the visual structure be explainable by the DOM?', ['这样 CSS 更容易维护和验证', '这样就不需要任何布局规则', '这样所有元素会自动居中', '这样浏览器不再计算尺寸'], 0, '当 DOM 与视觉区域对应时，CSS 规则会有稳定的结构参照。', 'When DOM and visual regions correspond, CSS rules have a stable structural reference.'),
      quizQuestion('哪个关系最直接体现“谁包含谁”？', 'Which relationship most directly expresses “who contains whom”?', ['包含关系', '颜色关系', '阴影关系', '动画关系'], 0, '包含关系对应 DOM 的父子层级，也决定空间归属。', 'Containment maps to DOM parent-child hierarchy and determines spatial ownership.'),
      quizQuestion('当 DOM 层级变化时，最可能随之变化的是什么？', 'What is most likely to change when the DOM hierarchy changes?', ['空间归属和布局参照', '浏览器地址栏文字', '图片压缩率', '字体文件格式'], 0, '层级变化会改变父子关系，进而改变可用空间与布局参照。', 'A hierarchy change alters parent-child relationships, which can change available space and layout references.' )
    ]
  },
  5: {
    title: { zh: '验证', en: 'Validate' },
    questions: [
      quizQuestion('动态演示的首要作用是什么？', 'What is the primary role of an interactive demo?', ['让问题变成可观察的变化', '增加页面装饰', '替代所有结构分析', '自动给出唯一答案'], ['Make the problem observable through change', 'Add decoration to the page', 'Replace all structural analysis', 'Produce one automatic answer'], 0, '交互验证把抽象的布局规则变成可观察、可比较的变化。', 'Interactive validation turns abstract layout rules into observable, comparable changes.'),
      quizQuestion('调整 gap 或列数时，主要可以观察什么？', 'What can you mainly observe when changing gap or column count?', ['浏览器如何重新分配空间', '网页是否换了语言', '图片是否被重新压缩', 'DOM 标签是否自动消失'], ['How the browser redistributes space', 'Whether the language changed', 'Whether images were recompressed', 'Whether DOM tags disappear automatically'], 0, '参数变化能帮助我们看到间距、列轨道和剩余空间之间的关系。', 'Parameter changes reveal the relationship between gaps, tracks, and remaining space.'),
      quizQuestion('验证布局时，为什么不追求唯一答案？', 'Why do we not seek one single answer when validating layout?', ['因为不同内容和约束可以产生多种合理布局', '因为 CSS 没有规则', '因为所有布局都一样', '因为不需要解释变化'], ['Because different content and constraints can yield multiple valid layouts', 'Because CSS has no rules', 'Because every layout is the same', 'Because changes do not need explanation'], 0, '验证关注的是规则是否有清楚职责，以及变化是否能被解释。', 'Validation focuses on whether rules have clear responsibilities and whether changes can be explained.'),
      quizQuestion('什么比“看起来差不多”更重要？', 'What matters more than “it looks about right”?', ['能够解释变化为什么发生', '使用更多颜色', '加入更大的阴影', '把代码写得更长'], ['Being able to explain why the change happened', 'Using more colors', 'Adding a larger shadow', 'Writing longer code'], 0, '能解释变化，说明你理解了空间规则，而不是只记住一个结果。', 'Explaining the change shows that you understand the spatial rule rather than memorizing one result.'),
      quizQuestion('一个好的验证反馈应该帮助你确认什么？', 'What should useful validation feedback help you confirm?', ['每条布局规则的空间职责', '每个元素是否都有渐变', '页面是否足够花哨', '代码是否完全不重复'], ['The spatial responsibility of each layout rule', 'Whether every element has a gradient', 'Whether the page is decorative enough', 'Whether the code has no repetition'], 0, '反馈应回到规则与空间职责，而不是只评价表面效果。', 'Feedback should return to rules and spatial responsibility rather than surface appearance alone.' )
    ]
  }
};

function quizStorageKey(sectionId) {
  return `layout-lab-section-quiz-${sectionId}`;
}

function createQuizState(total) {
  return { currentQuestionIndex: 0, answers: Array(total).fill(null), submitted: Array(total).fill(false), completed: false, score: 0, reviewCurrent: false, reviewAll: false };
}

function loadQuizState(sectionId, total) {
  const initial = createQuizState(total);
  try {
    const saved = JSON.parse(localStorage.getItem(quizStorageKey(sectionId)) || 'null');
    if (!saved || !Array.isArray(saved.answers) || !Array.isArray(saved.submitted)) return initial;
    const state = { ...initial, ...saved };
    state.answers = initial.answers.map((value, index) => Number.isInteger(saved.answers[index]) ? saved.answers[index] : value);
    state.submitted = initial.submitted.map((value, index) => Boolean(saved.submitted[index]));
    state.currentQuestionIndex = Math.min(Math.max(Number(saved.currentQuestionIndex) || 0, 0), total - 1);
    state.score = state.submitted.reduce((score, submitted, index) => score + (submitted && state.answers[index] === sectionQuizMap[sectionId].questions[index].answer ? 1 : 0), 0);
    state.completed = state.submitted.every(Boolean) && state.submitted.length === total;
    return state;
  } catch {
    return initial;
  }
}

function saveQuizState(sectionId, state) {
  localStorage.setItem(quizStorageKey(sectionId), JSON.stringify(state));
}

function renderQuizProgress(quiz, state) {
  const completed = state.submitted.filter(Boolean).length;
  const dots = quiz.questions.map((_, index) => `<button type="button" class="quiz-progress-dot ${state.submitted[index] ? 'is-done' : ''} ${index === state.currentQuestionIndex ? 'is-current' : ''}" data-quiz-index="${index}" aria-label="${lang === 'zh' ? `第 ${index + 1} 题` : `Question ${index + 1}`}" ${index > Math.max(state.currentQuestionIndex, state.answers.findLastIndex((answer) => answer !== null)) ? 'disabled' : ''}></button>`).join('');
  return `<div class="quiz-progress"><div><span>${lang === 'zh' ? '进度' : 'Progress'}</span><strong>${completed} / ${quiz.questions.length}</strong></div><div class="quiz-progress-dots">${dots}</div></div>`;
}

function renderQuizSummary(quiz, state) {
  const score = state.score;
  const percent = Math.round((score / quiz.questions.length) * 100);
  const feedback = score >= 4 ? (lang === 'zh' ? '很好，你已经掌握了本节的核心判断逻辑。' : 'Good work. You have the core judgment of this section.') : (lang === 'zh' ? '建议回看讲解或动态演示，再观察一次布局变化。' : 'Review the explanation or demo, then observe the layout change once more.');
  const reviews = state.reviewAll ? `<div class="quiz-review-list">${quiz.questions.map((question, index) => `<article class="quiz-review-item"><span>Q${index + 1}</span><div><strong>${esc(t(question.question))}</strong><p>${esc(t(question.explanation))}</p></div></article>`).join('')}</div>` : '';
  return `<div class="quiz-header"><div><span class="quiz-eyebrow">QUIZ</span><strong>${lang === 'zh' ? '小节测验' : 'Section quiz'}</strong></div><span class="quiz-section-label">Section 0${currentSectionId()}</span></div><div class="quiz-summary"><span class="quiz-summary-label">${lang === 'zh' ? 'QUIZ COMPLETE' : 'QUIZ COMPLETE'}</span><h3>${lang === 'zh' ? '本节测验已完成' : 'Section quiz complete'}</h3><div class="quiz-score"><strong>${score} / ${quiz.questions.length}</strong><span>${lang === 'zh' ? '正确率' : 'Accuracy'} ${percent}%</span></div><p>${feedback}</p><div class="quiz-summary-actions"><button type="button" class="quiz-button quiz-button-primary" data-quiz-action="reset">${lang === 'zh' ? '重新作答' : 'Try again'}</button><button type="button" class="quiz-button quiz-button-quiet" data-quiz-action="review-all">${state.reviewAll ? (lang === 'zh' ? '收起解析' : 'Hide explanations') : (lang === 'zh' ? '查看全部解析' : 'Review all')}</button></div>${reviews}</div>${renderQuizProgress(quiz, state)}`;
}

function renderQuizQuestion(quiz, state) {
  const index = state.currentQuestionIndex;
  const question = quiz.questions[index];
  const submitted = state.submitted[index];
  const selected = state.answers[index];
  const feedback = submitted ? `<div class="quiz-feedback ${selected === question.answer ? 'is-correct' : 'is-wrong'}"><strong>${selected === question.answer ? '✓' : '×'} ${selected === question.answer ? (lang === 'zh' ? '回答正确' : 'Correct') : (lang === 'zh' ? '回答错误' : 'Not quite')}</strong>${state.reviewCurrent ? `<span>${lang === 'zh' ? '解析' : 'Explanation'}</span><p>${esc(t(question.explanation))}</p>` : ''}</div>` : '';
  const options = question.options[lang].map((option, optionIndex) => `<button type="button" class="quiz-option ${selected === optionIndex ? 'is-selected' : ''} ${submitted && optionIndex === question.answer ? 'is-answer' : ''} ${submitted && selected === optionIndex && selected !== question.answer ? 'is-incorrect' : ''}" data-quiz-option="${optionIndex}" ${submitted ? 'disabled' : ''}><span>${String.fromCharCode(65 + optionIndex)}</span><strong>${esc(option)}</strong><i>${submitted && optionIndex === question.answer ? '✓' : ''}</i></button>`).join('');
  const nextLabel = index === quiz.questions.length - 1 && submitted ? (lang === 'zh' ? '完成测验' : 'Complete quiz') : (lang === 'zh' ? '下一题' : 'Next');
  return `<div class="quiz-header"><div><span class="quiz-eyebrow">QUIZ</span><strong>${lang === 'zh' ? '小节测验' : 'Section quiz'}</strong></div><div class="quiz-header-meta"><span>Section 0${currentSectionId()}</span><strong>${index + 1} / ${quiz.questions.length}</strong></div></div><div class="quiz-question"><span class="quiz-question-kicker">Q${String(index + 1).padStart(2, '0')}</span><h3>${esc(t(question.question))}</h3><div class="quiz-options">${options}</div>${feedback}</div><div class="quiz-controls"><div class="quiz-nav-row"><button type="button" class="quiz-button quiz-button-quiet" data-quiz-action="previous" ${index === 0 ? 'disabled' : ''}>← ${lang === 'zh' ? '上一题' : 'Previous'}</button><button type="button" class="quiz-button quiz-button-quiet" data-quiz-action="next" ${!submitted ? 'disabled' : ''}>${nextLabel} →</button></div><div class="quiz-action-row"><button type="button" class="quiz-button quiz-button-primary" data-quiz-action="submit" ${selected === null || submitted ? 'disabled' : ''}>${lang === 'zh' ? '提交答案' : 'Submit answer'}</button><button type="button" class="quiz-button quiz-button-link" data-quiz-action="review" ${!submitted ? 'disabled' : ''}>${state.reviewCurrent ? (lang === 'zh' ? '收起解析' : 'Hide explanation') : (lang === 'zh' ? '查看解析' : 'View explanation')}</button></div></div>${renderQuizProgress(quiz, state)}`;
}

function currentSectionId() {
  return Number(document.body.dataset.section || 1);
}

function renderSectionQuizCard(section) {
  const quiz = sectionQuizMap[section.id];
  const state = loadQuizState(section.id, quiz.questions.length);
  const aside = document.createElement('aside');
  aside.className = 'section-quiz-aside';
  aside.setAttribute('aria-label', lang === 'zh' ? '小节随堂小测' : 'Section quiz');
  const render = () => {
    aside.innerHTML = `<div class="quiz-card ${state.completed ? 'is-complete' : ''}">${state.completed ? renderQuizSummary(quiz, state) : renderQuizQuestion(quiz, state)}</div>`;
    aside.querySelectorAll('[data-quiz-option]').forEach((button) => button.addEventListener('click', () => {
      if (state.submitted[state.currentQuestionIndex]) return;
      state.answers[state.currentQuestionIndex] = Number(button.dataset.quizOption);
      saveQuizState(section.id, state);
      render();
    }));
    aside.querySelectorAll('[data-quiz-index]').forEach((button) => button.addEventListener('click', () => {
      const index = Number(button.dataset.quizIndex);
      state.currentQuestionIndex = index;
      state.reviewCurrent = false;
      saveQuizState(section.id, state);
      render();
    }));
    aside.querySelectorAll('[data-quiz-action]').forEach((button) => button.addEventListener('click', () => {
      const action = button.dataset.quizAction;
      if (action === 'submit') {
        state.submitted[state.currentQuestionIndex] = true;
        state.score = state.submitted.reduce((score, submitted, index) => score + (submitted && state.answers[index] === quiz.questions[index].answer ? 1 : 0), 0);
        state.completed = state.submitted.every(Boolean);
        state.reviewCurrent = false;
      } else if (action === 'previous') {
        state.currentQuestionIndex = Math.max(0, state.currentQuestionIndex - 1);
        state.reviewCurrent = false;
      } else if (action === 'next') {
        if (state.currentQuestionIndex === quiz.questions.length - 1 && state.submitted.every(Boolean)) state.completed = true;
        else state.currentQuestionIndex = Math.min(quiz.questions.length - 1, state.currentQuestionIndex + 1);
        state.reviewCurrent = false;
      } else if (action === 'review') {
        state.reviewCurrent = !state.reviewCurrent;
      } else if (action === 'review-all') {
        state.reviewAll = !state.reviewAll;
      } else if (action === 'reset') {
        Object.assign(state, createQuizState(quiz.questions.length));
      }
      saveQuizState(section.id, state);
      render();
    }));
  };
  render();
  return aside;
}

function renderChapterOneOverview() {
  const chapter = chapters[0];
  const activeSection = Math.min(5, Math.max(1, Number(localStorage.getItem('layout-lab-last-section') || 1)));
  const railDescriptions = lang === 'zh'
    ? ['识别布局真正要解决的问题', '建立四种空间关系', '组织页面结构层级', '理解 DOM 与视觉布局之间关系', '通过动态演示验证布局判断']
    : ['Identify the problem layout must solve', 'Build four spatial relationships', 'Organize the page structure', 'Connect DOM structure to visual space', 'Validate the layout decision interactively'];
  const outcomes = lang === 'zh'
    ? ['识别页面中的内容关系', '将视觉问题转化为空间约束', '从内容建立页面骨架', '理解 DOM 与页面空间之间的关系', '使用动态演示验证布局判断']
    : ['Read relationships between page content', 'Translate visual issues into spatial constraints', 'Build a page skeleton from content', 'Connect DOM structure with page space', 'Validate layout decisions with interaction'];
  const outcomeMarkup = outcomes.map((item) => `<li><span>✓</span>${item}</li>`).join('');
  const railItems = chapterOneSections.map((section, index) => `<a class="chapter-section-rail-item${index === activeSection - 1 ? ' is-active' : ''}" href="./chapter-01-section-0${section.id}.html"><span class="rail-marker"><b>0${section.id}</b><i></i></span><span class="rail-copy"><strong>${esc(t(section.title).split('：')[0])}</strong><small>${esc(railDescriptions[index])}</small><em>${lang === 'zh' ? '讲解 · 代码 · 演示' : 'Explain · Code · Demo'}</em></span></a>`).join('');
  const model = chapterModel[1][lang];
  const content = `<div class="chapter-overview-layout"><aside class="chapter-section-rail"><div class="chapter-section-rail-heading"><span>${lang === 'zh' ? '学习轨道' : 'Learning rail'}</span><small>01 / 05</small></div>${railItems}<section class="learning-method"><div class="aux-heading"><span>LEARNING LOOP</span><small>${lang === 'zh' ? '学习循环' : 'Learning loop'}</small></div><div class="learning-method-list"></div></section></aside><div class="chapter-overview-content"><div class="chapter-breadcrumb"><a href="${root}index.html">${ui[lang].home}</a><span>/</span><span>${lang === 'zh' ? '第 1 章' : 'Chapter 1'}</span></div><section class="chapter-overview-hero"><div><span class="eyebrow">${esc(t(chapter.kicker))}</span><h1>${esc(t(chapter.title))}</h1><div class="chapter-hero-subtitle">${lang === 'zh' ? 'Layout Awareness · Layout Fundamentals' : 'Layout Awareness · Layout Fundamentals'}</div><p>${esc(t(chapter.summary))}</p><div class="chapter-focus"><span>${lang === 'zh' ? '本章聚焦' : 'Chapter focus'}</span><strong>${lang === 'zh' ? '为什么页面混乱，往往不是因为元素太多，而是因为没有先建立布局关系。' : 'Why does a page feel cluttered? Often because relationships were never established first.'}</strong><small>${lang === 'zh' ? '核心概念：内容关系 · 空间模型 · 页面骨架' : 'Core concepts: content relationships · spatial model · page skeleton'}</small></div></div><div class="chapter-overview-meta"><span>CHAPTER</span><strong>01</strong><small>${lang === 'zh' ? '第 1 章 · 页面布局基础' : 'Chapter 01 · Layout foundations'}</small><div class="chapter-overview-stats"><b>5 <i>${lang === 'zh' ? '小节' : 'Sections'}</i></b><b>15 <i>${lang === 'zh' ? '学习模块' : 'Learning tabs'}</i></b><b>32 <i>min</i></b></div><div class="chapter-meta-progress-label"><span>${lang === 'zh' ? '本章进度' : 'Chapter progress'}</span><b>1 / 5</b></div><div class="chapter-overview-progress"><span style="width:20%"></span></div><section class="learning-outcomes"><div class="aux-heading"><span>AFTER THIS CHAPTER</span><small>${lang === 'zh' ? '完成本章后' : 'Learning outcomes'}</small></div><ul>${outcomeMarkup}</ul></section></div></section><section class="section-directory"><div class="section-directory-heading"><div><span class="eyebrow">${model.title}</span><h2>${model.subtitle}</h2></div><p>${model.intro}</p></div><div class="chapter-model-list"></div></section><div class="chapter-footer"><a class="back-link" href="${root}index.html">← ${ui[lang].back}</a><a class="next-link" href="${root}chapters/chapter-02.html">${ui[lang].next} →</a></div></div></div>`;
  document.querySelector('#app').innerHTML = shell(content, 1);
  const overviewContent = document.querySelector('.chapter-overview-content');
  const overviewMain = document.createElement('div');
  overviewMain.className = 'chapter-overview-main';
  overviewContent.insertBefore(overviewMain, overviewContent.firstChild);
  ['.chapter-breadcrumb', '.chapter-overview-hero', '.section-directory', '.chapter-footer'].forEach((selector) => overviewMain.append(document.querySelector(selector)));
  overviewContent.append(document.querySelector('.chapter-overview-meta'));
  const overviewMeta = chapterOverviewMeta[1];
  const concepts = overviewMeta.keyConcepts[lang].map(([primary, secondary], index) => `<li><b>0${index + 1}</b><span><strong>${primary}</strong><small>${secondary}</small></span></li>`).join('');
  document.querySelector('.learning-outcomes ul').innerHTML = overviewMeta.outcomes[lang].map((item) => `<li><span>✓</span>${item}</li>`).join('');
  document.querySelector('.learning-outcomes').insertAdjacentHTML('beforebegin', `<section class="chapter-key-concepts"><div class="aux-heading"><span>KEY CONCEPTS</span><small>${lang === 'zh' ? '本章核心概念' : 'Core concepts'}</small></div><ul>${concepts}</ul></section>`);
  document.querySelector('.section-directory .eyebrow').textContent = model.title;
  document.querySelector('.section-directory-heading h2').textContent = model.subtitle;
  document.querySelector('.section-directory-heading p').textContent = model.intro;
  const modelList = document.querySelector('.chapter-model-list');
  modelList.className = 'chapter-model-list';
  modelList.innerHTML = model.stages.map(([label, title, description, english], index) => `<article class="chapter-model-node${index < activeSection - 1 ? ' is-complete' : index === activeSection - 1 ? ' is-current' : ''}"><div class="chapter-model-copy"><span>${label}</span><h3>${title}</h3><p>${description}</p><small>${english}</small></div><div class="chapter-model-visual model-visual-${index + 1}" aria-hidden="true"></div></article>`).join('');
  const learningMethod = document.querySelector('.learning-method');
  learningMethod.querySelector('.aux-heading > span').textContent = 'LEARNING LOOP';
  learningMethod.querySelector('.aux-heading > small').textContent = lang === 'zh' ? '学习循环' : 'Learning loop';
  learningMethod.querySelector('.learning-method-list').innerHTML = `<div class="learning-loop-line">Observe <i>→</i> Model <i>→</i> Build <i>→</i> Explore</div><p class="learning-loop-note">${lang === 'zh' ? '从发现问题到动态验证，形成完整的布局学习闭环。' : 'From noticing a problem to interactive validation, forming a complete layout learning loop.'}</p>`;
  document.body.classList.remove('chapter-one-page');
  document.body.classList.add('chapter-overview-page');
  bindGlobal();
}

const sectionStructure = {
  main: { tag: 'main', className: 'course-page', region: 'main', role: { zh: '页面边界', en: 'Page boundary' }, text: { zh: '定义整个课程页面的结构范围。', en: 'Defines the boundary of the course page.' } },
  header: { tag: 'header', className: 'course-header', region: 'header', role: { zh: '课程级信息', en: 'Course information' }, text: { zh: '承载页面标题与全局信息。', en: 'Holds the page title and global information.' } },
  body: { tag: 'div', className: 'course-body', region: 'body', role: { zh: '主体容器', en: 'Body container' }, text: { zh: '把导航与学习内容放在同一层级。', en: 'Keeps navigation and learning content at the same level.' } },
  aside: { tag: 'aside', className: 'chapter-nav', region: 'aside', role: { zh: '导航区域', en: 'Navigation region' }, text: { zh: '负责章节切换，不与学习内容混杂。', en: 'Owns chapter navigation without mixing with lesson content.' } },
  section: { tag: 'section', className: 'course-content', region: 'content', role: { zh: '内容区域', en: 'Content region' }, text: { zh: '承载当前小节的学习内容。', en: 'Carries the current lesson content.' } },
  article: { tag: 'article', className: 'chapter-card', region: 'content', role: { zh: '内容单元', en: 'Content unit' }, text: { zh: '把一个完整内容单元保持在同一语义边界内。', en: 'Keeps one complete content unit within a semantic boundary.' } },
  demo: { tag: 'div', className: 'demo-panel', region: 'content', role: { zh: '验证区域', en: 'Validation region' }, text: { zh: '承载独立的交互验证内容。', en: 'Carries an independent interactive validation.' } }
};

function sectionStructureTree(sectionId) {
  const detail = sectionId === 4
    ? [['main', 0], ['header', 1], ['aside', 1], ['section', 1], ['article', 2], ['demo', 2]]
    : [['main', 0], ['header', 1], ['body', 1], ['aside', 2], ['section', 2]];
  return detail;
}

function structureKeyForLine(line, sectionId, activeKey = '') {
  const htmlMatch = line.match(/<\/?([a-z0-9-]+)(?:\s+class=["']([^"']+)["'])?/i);
  if (htmlMatch) {
    const className = htmlMatch[2] || '';
    const direct = Object.entries(sectionStructure).find(([, item]) => item.tag === htmlMatch[1].toLowerCase() && item.className === className);
    if (direct) return direct[0];
    const byTag = { main: 'main', header: 'header', aside: 'aside', section: 'section', article: 'article' };
    return byTag[htmlMatch[1].toLowerCase()] || activeKey;
  }
  const selectorMatch = line.match(/^\s*([.#][\w-]+)/);
  if (selectorMatch) {
    const selector = selectorMatch[1];
    const selectors = { '.course-page': 'main', '.page': 'main', '.course-header': 'header', '.toolbar': 'header', '.course-body': 'body', '.chapter-nav': 'aside', '.sidebar': 'aside', '.course-content': 'section', '.content': 'section', '.chapter-card': 'article', '.demo-panel': 'demo' };
    return selectors[selector] || activeKey;
  }
  return activeKey;
}

function highlightCodeLine(line, isHtml) {
  let value = esc(line);
  if (isHtml) {
    value = value.replace(/(&lt;\/?)([a-z0-9-]+)/i, '$1<span class="syntax-tag">$2</span>');
    value = value.replace(/(class=)(&quot;[^&]*?&quot;)/i, '<span class="syntax-attribute">$1</span><span class="syntax-class">$2</span>');
  } else {
    value = value.replace(/([.#][\w-]+)/g, '<span class="syntax-selector">$1</span>');
    value = value.replace(/([\w-]+)(:)/g, '<span class="syntax-property">$1</span>$2');
    value = value.replace(/(#[0-9a-f]{3,8}|\b\d+(?:px|fr|rem|%|s)?\b)/gi, '<span class="syntax-value">$1</span>');
  }
  return value || '&nbsp;';
}

function structureLabel(key) {
  const item = sectionStructure[key] || sectionStructure.main;
  return `${item.tag}<span class="structure-class">.${item.className}</span>`;
}

function renderCodeReader(section) {
  const lines = section.code.split('\n');
  const isHtml = section.code.trim().startsWith('<');
  let activeKey = '';
  return lines.map((line, index) => {
    const trimmed = line.trim();
    const key = !trimmed ? '' : structureKeyForLine(line, section.id, activeKey);
    if (key) activeKey = key;
    if (!isHtml && trimmed === '}') activeKey = '';
    const mapKey = key || '';
    return `<span class="code-line${mapKey ? '' : ' is-neutral'}" data-map-key="${mapKey}" tabindex="0"><span class="line-number">${String(index + 1).padStart(2, '0')}</span><span class="line-source">${highlightCodeLine(line, isHtml)}</span></span>`;
  }).join('');
}

function renderDomTree(sectionId) {
  return sectionStructureTree(sectionId).map(([key, depth]) => `<button class="structure-node depth-${depth}" type="button" data-map-key="${key}" style="--node-depth:${depth}" aria-label="${esc(structureLabel(key).replace(/<[^>]+>/g, ''))}"><span class="structure-node-mark">${depth ? '├' : '◆'}</span><span class="structure-node-name">${sectionStructure[key].tag}</span><span class="structure-class">.${sectionStructure[key].className}</span></button>`).join('');
}

function renderSectionCssBridge(sectionId) {
  if (![1, 4].includes(sectionId)) return '';
  const css = sectionId === 1
    ? '.course-body {\n  display: grid;\n  grid-template-columns: 240px 1fr;\n}'
    : '.course-page {\n  display: grid;\n  grid-template-areas: "header nav content";\n}';
  return `<div class="section-css-bridge"><div><span>CSS MAPPING</span><small>${lang === 'zh' ? 'DOM 决定关系，CSS 决定空间' : 'DOM defines relationships; CSS defines space'}</small></div><pre>${esc(css)}</pre></div>`;
}

function renderStructuralReasoning(section, teaching) {
  const roles = ['main', 'header', 'aside', 'section'];
  const items = roles.map((key) => `<article class="structure-role"><strong>${sectionStructure[key].tag.toUpperCase()}</strong><span>${esc(sectionStructure[key].role[lang])}</span><p>${esc(sectionStructure[key].text[lang])}</p></article>`).join('');
  return `<div class="section-structural-reasoning"><div class="section-code-explain-head"><span>STRUCTURAL REASONING</span><small>${lang === 'zh' ? '结构为什么这样组织？' : 'Why this structure?'}</small></div><div class="structure-role-grid">${items}</div><div class="structure-principle"><span>STRUCTURE PRINCIPLE</span><strong>${lang === 'zh' ? '先确定 DOM 层级，再决定布局关系。' : 'Set the DOM hierarchy first, then decide the layout relationship.'}</strong><p>${lang === 'zh' ? '先确定谁包含谁，再确定谁与谁并列，最后让这些区域通过 CSS 进入页面空间。' : 'Decide who contains whom, then which regions sit side by side, and finally let CSS place them in page space.'}</p></div><div class="from-structure-layout"><div class="section-code-explain-head"><span>FROM STRUCTURE TO LAYOUT</span><small>${lang === 'zh' ? '从结构到布局' : 'From structure to layout'}</small></div><div class="mapping-steps"><div><b>DOM</b><strong>aside + section</strong></div><i>↓</i><div><b>CSS</b><strong>${section.id === 1 ? 'grid-template-columns: 240px 1fr' : 'grid-template-areas'}</strong></div><i>↓</i><div><b>VISUAL</b><strong>[ NAV&nbsp;&nbsp;|&nbsp;&nbsp;CONTENT ]</strong></div></div></div><p class="section-teaching-note">${esc(teaching.code)}</p></div>`;
}

function renderChapterLessonExpansion(section, lesson) {
  const zh = lang === 'zh';
  const list = (items) => `<ul>${items.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>`;
  return `<div class="section-content-expansion"><div class="lesson-block lesson-problem"><span>PROBLEM</span><h3>${zh ? '问题场景' : 'Problem scene'}</h3><p>${esc(lesson.problem)}</p></div><div class="lesson-block lesson-why"><span>WHY</span><h3>${zh ? '为什么会出现这个问题？' : 'Why does it happen?'}</h3><p>${esc(lesson.why)}</p></div><div class="lesson-block lesson-principle"><span>PRINCIPLE</span><h3>${zh ? '核心原则' : 'Core principle'}</h3><p>${esc(lesson.principle)}</p></div><div class="lesson-block lesson-model"><span>MODEL</span><h3>${zh ? '关系 / 结构模型' : 'Relationship / structure model'}</h3>${list(lesson.model)}</div><div class="lesson-block lesson-example"><span>EXAMPLE</span><h3>${zh ? '当前案例中的表现' : 'The case in practice'}</h3><p>${esc(lesson.example)}</p></div><div class="lesson-block lesson-mistakes"><span>COMMON MISTAKES</span><h3>${zh ? '常见错误' : 'Common mistakes'}</h3>${list(lesson.mistakes)}</div><div class="lesson-block lesson-try-it"><div class="lesson-try-label">TRY IT</div><h3>${zh ? '试一试' : 'Try it'}</h3><p>${esc(lesson.tryIt)}</p></div><div class="lesson-close"><div><span>TAKEAWAY</span><strong>${esc(lesson.takeaway)}</strong></div><div><span>NEXT</span><strong>${esc(lesson.next)}</strong></div></div></div>`;
}

function renderChapterCodeWhy(lesson) {
  const zh = lang === 'zh';
  return `<div class="section-code-rationale"><span>WHY THIS CODE</span><strong>${zh ? '为什么这样写？' : 'Why this works'}</strong><p>${esc(lesson.codeWhy)}</p></div>`;
}

function bindSectionCodeMap(section) {
  const workbench = document.querySelector('.section-code-workbench');
  if (!workbench) return;
  let pinnedKey = '';
  const codeLines = [...workbench.querySelectorAll('.code-line')];
  const lineRange = (key) => {
    const indexes = codeLines.map((line, index) => line.dataset.mapKey === key ? index + 1 : 0).filter(Boolean);
    if (!indexes.length) return '';
    return indexes.length === 1 ? `Line ${String(indexes[0]).padStart(2, '0')}` : `Lines ${String(indexes[0]).padStart(2, '0')}–${String(indexes[indexes.length - 1]).padStart(2, '0')}`;
  };
  const apply = (key) => {
    const item = sectionStructure[key] || sectionStructure.main;
    workbench.querySelectorAll('[data-map-key]').forEach((element) => element.classList.toggle('is-highlighted', element.dataset.mapKey === key));
    const value = workbench.querySelector('.selected-structure-value');
    const role = workbench.querySelector('.selected-structure-role');
    if (value) value.innerHTML = structureLabel(key);
    if (role) role.textContent = `${lineRange(key)} · ${item.role[lang]} — ${item.text[lang]}`;
  };
  workbench.querySelectorAll('.code-line, .structure-node, .skeleton-region').forEach((element) => {
    const show = () => apply(element.dataset.mapKey || 'main');
    const restore = () => apply(pinnedKey || 'main');
    element.addEventListener('mouseenter', show);
    element.addEventListener('mouseleave', restore);
    element.addEventListener('focus', show);
    element.addEventListener('blur', restore);
    element.addEventListener('click', () => { pinnedKey = element.dataset.mapKey || 'main'; apply(pinnedKey); });
    element.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); element.click(); } });
  });
  apply('main');
}

function renderSectionRelationModel() {
  const zh = lang === 'zh';
  return `<div class="section-relation-model"><div class="section-relation-head"><div><span>RELATION MODEL</span><strong>${zh ? '关系模型' : 'Relation model'}</strong><small>${zh ? '内容关系如何转化成页面结构' : 'How content relationships become layout structure'}</small></div><div class="relation-legend"><span><i class="legend-solid"></i>${zh ? '包含' : 'Containment'}</span><span><i class="legend-dashed"></i>${zh ? '对齐' : 'Alignment'}</span><span><i class="legend-priority">1</i>${zh ? '优先' : 'Priority'}</span></div></div><div class="relation-model-canvas"><svg viewBox="0 0 1000 360" preserveAspectRatio="none" aria-hidden="true"><path class="relation-containment" d="M500 68V94H260V116M500 68V94H740V116M740 178V202H570V228M740 178V202H805V228M805 288V310"/><path class="relation-alignment" d="M805 220V338M550 214H830"/></svg><div class="relation-node relation-page-node"><b>PAGE</b><strong>${zh ? '页面' : 'Page'}</strong><small>Page boundary</small></div><div class="relation-node relation-info-node"><b>01</b><strong>${zh ? '课程信息' : 'Course Info'}</strong><small>Course Info</small></div><div class="relation-node relation-main-node"><strong>${zh ? '主体区域' : 'Main Area'}</strong><small>${zh ? '主体区域' : 'Main Area'}</small></div><div class="relation-node relation-nav-node"><strong>${zh ? '章节导航' : 'Chapter Nav'}</strong><small>${zh ? '章节导航' : 'Chapter Nav'}</small><em>${zh ? '结构区域' : 'Persistent structure'}</em></div><div class="relation-node relation-learning-node is-primary"><b>02</b><strong>${zh ? '学习内容' : 'Learning Content'}</strong><small>${zh ? '学习内容' : 'Learning Content'}</small></div><div class="relation-node relation-demo-node is-secondary"><b>03</b><strong>${zh ? '辅助演示' : 'Demo'}</strong><small>${zh ? '辅助演示' : 'Demo'}</small></div></div></div><div class="section-look-first"><span>LOOK FIRST</span><strong>${zh ? '先判断：谁属于谁　·　谁先被看到　·　哪些区域应该对齐' : 'Ask first: what belongs together · what comes first · what should align'}</strong></div>`;
}

function renderSectionPage() {
  document.body.classList.remove('workspace-expanded');
  const section = chapterOneSections.find((item) => item.id === Number(document.body.dataset.section)) || chapterOneSections[0];
  const prev = chapterOneSections.find((item) => item.id === section.id - 1);
  const next = chapterOneSections.find((item) => item.id === section.id + 1);
  const nextSectionLabel = lang === 'zh' ? '下一节' : 'Next section';
  const sectionLinks = chapterOneSections.map((item) => `<a class="section-nav-item ${item.id === section.id ? 'is-active' : ''}" href="./chapter-01-section-0${item.id}.html"><span>0${item.id}</span>${esc(t(item.title))}</a>`).join('');
  const sectionRailTitles = {
    1: { zh: '观察问题', en: 'Observe the problem' },
    2: { zh: '建立模型', en: 'Build the model' },
    3: { zh: '页面骨架', en: 'Page skeleton' },
    4: { zh: 'DOM 与页面空间', en: 'DOM & page space' },
    5: { zh: '验证', en: 'Validate' }
  };
  const sectionRailItems = chapterOneSections.map((item) => {
    const status = item.id < section.id ? 'is-complete' : item.id === section.id ? 'is-active' : '';
    const marker = item.id < section.id ? '✓' : '';
    return `<a class="section-rail-item ${status}" href="./chapter-01-section-0${item.id}.html"><span class="section-rail-marker"><b>0${item.id}</b><i>${marker}</i></span><span class="section-rail-title">${esc(sectionRailTitles[item.id][lang])}</span></a>`;
  }).join('');
  const code = renderCodeReader(section);
  const nextJoin = lang === 'zh' ? '：' : ': ';
  const content = `<div class="chapter-breadcrumb"><a href="./chapter-01.html">${lang === 'zh' ? '第 1 章' : 'Chapter 1'}</a><span>/</span><span>0${section.id}</span></div><section class="section-page-heading"><div><span class="eyebrow">${lang === 'zh' ? `第 1 章 · 小节 0${section.id}` : `Chapter 1 · Section 0${section.id}`}</span><h1>${esc(t(section.title))}</h1><p>${esc(t(section.summary))}</p></div><div class="section-page-count"><strong>0${section.id}</strong><span>/ 05</span></div></section><nav class="section-nav" aria-label="${lang === 'zh' ? '第 1 章小节导航' : 'Chapter 1 section navigation'}"><div class="section-nav-title">${lang === 'zh' ? '章节目录' : 'Chapter sections'}</div>${sectionLinks}</nav><section class="section-learning"><div class="section-tabs" role="tablist" aria-label="${lang === 'zh' ? '学习内容类型' : 'Learning modes'}"><button class="section-tab is-active" type="button" role="tab" aria-selected="true" data-panel="explain-panel">01 ${ui[lang].explain}</button><button class="section-tab" type="button" role="tab" aria-selected="false" data-panel="code-panel">02 ${ui[lang].code}</button><button class="section-tab" type="button" role="tab" aria-selected="false" data-panel="demo-panel">03 ${ui[lang].demo}</button></div><article class="section-panel is-active" id="explain-panel" role="tabpanel"><div class="section-panel-kicker">01 · ${ui[lang].explain}</div><h2>${esc(lang === 'zh' ? '先理解问题，再决定布局方式' : 'Understand the problem before choosing the layout')}</h2><div class="section-explanation-block"><span>WHY</span><p>${esc(section.explanation[lang][0])}</p></div><div class="section-explanation-block"><span>BROWSER VIEW</span><p>${esc(section.explanation[lang][1])}</p></div><div class="section-principle"><span><b>PRINCIPLE</b><em>${ui[lang].principle}</em></span><strong>${esc(t(section.principle))}</strong></div></article><article class="section-panel" id="code-panel" role="tabpanel" hidden><div class="section-panel-kicker">02 · ${ui[lang].code}<button class="copy-button" type="button" data-copy-target="section-code">${ui[lang].copy}</button></div><div class="section-code-window"><div class="code-window-bar"><span></span><span></span><span></span><em>layout.css</em></div><pre><code id="section-code" data-copy-raw="${esc(section.code)}">${code}</code></pre></div><p class="section-code-note">⌘ ${lang === 'zh' ? '这段代码对应本小节的一个空间决定。' : 'This code represents one spatial decision in this section.'}</p></article><article class="section-panel" id="demo-panel" role="tabpanel" hidden><div class="section-panel-kicker">03 · ${ui[lang].demo}</div><h2>${lang === 'zh' ? '把理论变成可观察的变化' : 'Turn theory into observable change'}</h2><p class="section-demo-intro">${ui[lang].control}</p><div id="section-demo"></div></article></section><div class="section-page-footer"><a href="${prev ? `./chapter-01-section-0${prev.id}.html` : './chapter-01.html'}">← ${prev ? esc(t(prev.title)) : ui[lang].back}</a>${next ? `<a href="./chapter-01-section-0${next.id}.html">${nextSectionLabel}${nextJoin}${esc(t(next.title))} →</a>` : `<a href="./chapter-02.html">${nextSectionLabel} →</a>`}</div>`;
  document.querySelector('#app').innerHTML = shell(content, 1);
  const pageMain = document.querySelector('.main-content');
  const topNav = pageMain?.querySelector('.section-nav');
  topNav?.remove();
  if (pageMain) {
    const readerLayout = document.createElement('div');
    readerLayout.className = 'section-reader-layout';
    const rail = document.createElement('aside');
    rail.className = 'section-page-rail';
    rail.innerHTML = `<button class="section-rail-toggle" type="button" aria-expanded="false"><span>${lang === 'zh' ? '本章小节' : 'Chapter sections'}</span><b>0${section.id} / 05</b><i>⌄</i></button><div class="section-rail-panel"><div class="section-rail-heading"><span>${lang === 'zh' ? '章节导航' : 'SECTION NAVIGATION'}</span><small>${lang === 'zh' ? '本章小节' : 'Chapter sections'}</small><b>0${section.id} / 05</b></div><nav class="section-rail-list" aria-label="${lang === 'zh' ? '第 1 章小节导航' : 'Chapter 1 section navigation'}">${sectionRailItems}</nav></div>`;
    const pageContent = document.createElement('div');
    pageContent.className = 'section-page-content';
    const quizAside = renderSectionQuizCard(section);
    while (pageMain.firstElementChild) pageContent.append(pageMain.firstElementChild);
    readerLayout.append(rail, pageContent, quizAside);
    pageMain.append(readerLayout);
    const count = pageContent.querySelector('.section-page-count');
    if (count) count.innerHTML = `<span>SECTION 0${section.id}</span>`;
    rail.querySelector('.section-rail-toggle')?.addEventListener('click', () => {
      const open = rail.classList.toggle('is-open');
      rail.querySelector('.section-rail-toggle').setAttribute('aria-expanded', String(open));
    });
  }
  const teaching = sectionTeaching[section.id][lang];
  document.querySelector('#explain-panel')?.insertAdjacentHTML('beforeend', `<div class="section-teaching-block"><h3>${lang === 'zh' ? '学习要点' : 'Learning points'}</h3><ul>${teaching.points.map((point) => `<li>${esc(point)}</li>`).join('')}</ul>${teaching.explain.map((paragraph) => `<p>${esc(paragraph)}</p>`).join('')}</div>`);
  const lesson = chapterLessonContent[section.id][lang];
  document.querySelector('#explain-panel')?.insertAdjacentHTML('beforeend', renderChapterLessonExpansion(section, lesson));
  document.querySelector('#code-panel')?.insertAdjacentHTML('beforeend', renderStructuralReasoning(section, teaching));
  document.querySelector('#code-panel')?.insertAdjacentHTML('beforeend', renderChapterCodeWhy(lesson));
  document.querySelector('#demo-panel')?.insertAdjacentHTML('beforeend', `<div class="section-demo-guide"><h3>${lang === 'zh' ? '观察任务' : 'Observation task'}</h3><p>${esc(teaching.demo)}</p><div class="section-result"><span>${lang === 'zh' ? '本节结论' : 'Takeaway'}</span><strong>${esc(teaching.result)}</strong></div></div>`);
  const explainPanel = document.querySelector('#explain-panel');
  explainPanel?.querySelector('h2')?.insertAdjacentHTML('afterend', `<p class="section-mode-subtitle">${lang === 'zh' ? '建立对页面布局的判断方法，而不是直接记住 CSS。' : 'Build a way to judge layout instead of memorizing CSS properties.'}</p>`);
  const teachingBlock = explainPanel?.querySelector('.section-teaching-block');
  if (teachingBlock) {
    teachingBlock.querySelector('h3').textContent = lang === 'zh' ? 'WHAT TO NOTICE · 观察维度' : 'WHAT TO NOTICE';
    const dimensions = ['containment', 'reading', 'alignment', 'priority'];
    const points = [...teachingBlock.querySelectorAll('ul li')].map((item, index) => {
      const raw = item.textContent;
      const separator = raw.includes('：') ? '：' : ':';
      const parts = raw.split(separator);
      const originalTitle = parts.shift().trim();
      const title = originalTitle === '边界关系' || originalTitle.toLowerCase() === 'boundary' ? (lang === 'zh' ? '对齐边界' : 'Alignment') : originalTitle;
      const label = ['CONTAINMENT', 'READING ORDER', 'ALIGNMENT', 'PRIORITY'][index] || 'OBSERVE';
      return `<article class="observation-dimension dimension-${dimensions[index]}"><div class="dimension-graphic" aria-hidden="true"><i></i><b></b><em>1</em><em>2</em><em>3</em></div><div><span class="dimension-label">${label}</span><strong>${esc(title)}</strong><p>${esc(parts.join(separator).trim())}</p></div></article>`;
    }).join('');
    teachingBlock.querySelector('ul').outerHTML = `<div class="section-learning-points">${points}</div>`;
    teachingBlock.querySelector('p')?.insertAdjacentHTML('beforebegin', `<div class="section-context-label">CONTEXT · ${lang === 'zh' ? '案例背景' : 'Case context'}</div>`);
  }
  explainPanel?.querySelector('.section-principle')?.insertAdjacentHTML('afterend', renderSectionRelationModel());
  const codePanel = document.querySelector('#code-panel');
  if (codePanel) {
    codePanel.querySelector('.section-panel-kicker')?.insertAdjacentHTML('afterend', `<h2 class="section-mode-title">${lang === 'zh' ? '把布局思路转化成结构' : 'Turn layout thinking into structure'}</h2><p class="section-mode-subtitle">${lang === 'zh' ? '从 DOM 层级出发，建立可以解释页面空间的骨架。' : 'Start from the DOM hierarchy and build a skeleton that explains page space.'}</p>`);
    const codeWindow = codePanel.querySelector('.section-code-window');
    const codeBar = codePanel.querySelector('.code-window-bar');
    if (codeBar) {
      codeBar.querySelector('em').textContent = [1, 4].includes(section.id) ? 'layout.html' : 'layout.css';
      const copyButton = codePanel.querySelector('.copy-button');
      if (copyButton) codeBar.append(copyButton);
    }
    if (codeWindow) {
      const workbench = document.createElement('div');
      workbench.className = 'section-code-workbench';
      const codeReader = document.createElement('div');
      codeReader.className = 'section-code-reader';
      const preview = document.createElement('aside');
      preview.className = 'section-structure-preview';
      preview.innerHTML = `<div class="structure-map-heading"><div><span>STRUCTURE MAP</span><strong>${lang === 'zh' ? '代码 ↔ DOM ↔ 页面区域' : 'Code ↔ DOM ↔ Page regions'}</strong></div><small>DOM DEPTH<br><b>3 levels</b></small></div><section class="structure-map-section"><div class="structure-map-label">DOM TREE</div><div class="structure-tree">${renderDomTree(section.id)}</div></section><section class="structure-map-section skeleton-section"><div class="structure-map-label">PAGE SKELETON</div><div class="page-skeleton" data-map-key="main" role="img" aria-label="${lang === 'zh' ? '课程页面骨架：顶部、导航和内容区域' : 'Course page skeleton: header, navigation and content regions'}"><button type="button" class="skeleton-region skeleton-header" data-map-key="header">HEADER</button><div class="skeleton-body"><button type="button" class="skeleton-region skeleton-aside" data-map-key="aside">ASIDE</button><button type="button" class="skeleton-region skeleton-content" data-map-key="section">CONTENT</button></div></div></section><section class="selected-structure" aria-live="polite"><div class="structure-map-label">SELECTED STRUCTURE</div><div class="selected-structure-value"></div><p class="selected-structure-role"></p></section>`;
      codeWindow.parentNode.insertBefore(workbench, codeWindow);
      codeReader.append(codeWindow);
      workbench.append(codeReader, preview);
      codeReader.insertAdjacentHTML('beforeend', renderSectionCssBridge(section.id));
    }
    bindSectionCodeMap(section);
  }
  document.body.classList.add('section-page-body');
  bindGlobal();
  document.querySelectorAll('.section-tab').forEach((tab) => tab.addEventListener('click', () => { document.body.classList.remove('workspace-expanded'); document.querySelectorAll('.section-tab').forEach((item) => { const active = item === tab; item.classList.toggle('is-active', active); item.setAttribute('aria-selected', String(active)); }); document.querySelectorAll('.section-panel').forEach((panel) => { const active = panel.id === tab.dataset.panel; panel.classList.toggle('is-active', active); panel.hidden = !active; }); document.querySelector('.section-page-content')?.classList.toggle('is-demo-active', tab.dataset.panel === 'demo-panel'); if (tab.dataset.panel === 'demo-panel') renderDemo(section.demo); }));
  renderDemo(section.demo);
}

function bindChapterOneDirectory() {
  const links = [...document.querySelectorAll('.chapter-one-directory a')];
  const sections = links.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  if (!links.length || !sections.length) return;
  const update = () => {
    let current = sections[0];
    sections.forEach((section) => { if (section.getBoundingClientRect().top <= 190) current = section; });
    if (Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight - 2) current = sections[sections.length - 1];
    links.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${current.id}`));
  };
  window.addEventListener('scroll', update, { passive: true });
  update();
}

function bindChapterOneTabs() {
  const groups = [
    { target: '#lesson-overview', tabs: [{ label: '讲解', target: '#lesson-overview' }, { label: '关键代码', target: '#code-block' }, { label: '演示', target: '#demo-section' }] },
    { target: '#theory', tabs: [{ label: '讲解', target: '#theory' }, { label: '关键代码', target: '#code-block' }, { label: '演示', target: '#demo-section' }] },
    { target: '#demo-section', tabs: [{ label: '讲解', target: '#case-method' }, { label: '关键代码', target: '#code-block' }, { label: '演示', target: '#demo-section' }] }
  ];
  document.querySelectorAll('.chapter-directory-links > a').forEach((item, index) => {
    const group = groups[index];
    if (!group || item.querySelector('.chapter-unit-tabs')) return;
    const tabs = document.createElement('span');
    tabs.className = 'chapter-unit-tabs';
    tabs.setAttribute('aria-label', lang === 'zh' ? '学习内容类型' : 'Lesson content type');
    tabs.innerHTML = group.tabs.map((tab, tabIndex) => `<span class="chapter-unit-tab${tabIndex === 0 ? ' is-active' : ''}" role="button" tabindex="0" data-tab-target="${tab.target}">${lang === 'zh' ? tab.label : ['Explain', 'Code', 'Demo'][tabIndex]}</span>`).join('');
    item.appendChild(tabs);
    tabs.querySelectorAll('.chapter-unit-tab').forEach((tab) => {
      const activate = () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        if (!target) return;
        tabs.querySelectorAll('.chapter-unit-tab').forEach((peer) => peer.classList.toggle('is-active', peer === tab));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
      tab.addEventListener('click', (event) => { event.preventDefault(); event.stopPropagation(); activate(); });
      tab.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); activate(); } });
    });
  });
}

function renderChapter() {
  const chapter = currentChapter;
  if (!chapter) return renderHome();
  if (chapter.id === 1 && document.body.dataset.page === 'chapter') return renderChapterOneOverview();
  const indexLabel = lang === 'zh' ? `第 ${chapter.id} 章` : `Chapter ${chapter.id}`;
  const prev = chapters.find((item) => item.id === chapter.id - 1);
  const next = chapters.find((item) => item.id === chapter.id + 1);
  const content = `<div class="chapter-breadcrumb"><a href="${root}index.html">${ui[lang].home}</a><span>/</span><span>${indexLabel}</span></div><section class="chapter-heading"><div><span class="eyebrow">${esc(t(chapter.kicker))}</span><h1>${esc(t(chapter.title))}</h1><p>${esc(t(chapter.summary))}</p></div><div class="chapter-badge"><span>0${chapter.id}</span><small>${ui[lang].available}</small></div></section><section class="lesson-grid" id="lesson-overview"><article class="lesson-card theory-card"><div class="section-label"><span class="label-number">01</span><span>${ui[lang].explain}</span></div><h2>${esc(ui[lang].question)}</h2><p class="question">${esc(t(chapter.question))}</p><div class="theory-copy">${chapter.theory[lang].map((paragraph) => `<p>${esc(paragraph)}</p>`).join('')}</div><div class="principle"><span>${ui[lang].principle}</span><strong>${esc(t(chapter.principle))}</strong></div></article><article class="lesson-card code-card"><div class="section-label"><span class="label-number">02</span><span>${ui[lang].code}</span><button class="copy-button" type="button" data-copy-target="code-block">${ui[lang].copy}</button></div><div class="code-window"><div class="code-window-bar"><span></span><span></span><span></span><em>layout.css</em></div><pre><code id="code-block">${esc(chapter.code)}</code></pre></div><div class="code-note"><span>⌘</span><span>${lang === 'zh' ? '这段代码对应案例中的一个空间决定。' : 'This code represents one spatial decision in the case.'}</span></div></article></section><section class="demo-section" id="demo-section"><div class="demo-heading"><div><div class="section-label"><span class="label-number">03</span><span>${ui[lang].demo}</span></div><h2>${lang === 'zh' ? '把理论变成可观察的变化' : 'Turn theory into observable change'}</h2><p>${ui[lang].control}</p></div><span class="d3-badge">${ui[lang].d3}</span></div><div id="demo" class="demo-panel"></div></section><div class="chapter-footer"><a class="back-link" href="${root}index.html">← ${ui[lang].back}</a><div class="chapter-nav-links">${prev ? `<a href="${root}chapters/chapter-0${prev.id}.html">← ${ui[lang].previous}</a>` : ''}${next ? `<a class="next-link" href="${root}chapters/chapter-0${next.id}.html">${ui[lang].next} →</a>` : ''}</div></div>`;
  document.querySelector('#app').innerHTML = shell(content, chapter.id);
  document.body.classList.toggle('chapter-one-page', chapter.id === 1);
  if (chapter.id === 1) enhanceChapterOne();
  if (chapter.deepDive) document.querySelector('.demo-section')?.insertAdjacentHTML('beforebegin', renderDeepDive(chapter));
  if (chapter.id === 1) document.querySelector('.chapter-path')?.insertAdjacentHTML('afterend', `<nav class="chapter-one-directory" aria-label="${lang === 'zh' ? '章节目录' : 'Lesson directory'}"><div class="chapter-directory-heading"><span class="eyebrow">${lang === 'zh' ? '章节目录' : 'Lesson directory'}</span><small>${lang === 'zh' ? '本章 3 个学习单元 · 讲解 / 代码 / 演示' : '3 learning units · explanation / code / demo'}</small></div><div class="chapter-directory-links"><a href="#lesson-overview" class="is-active"><span>01</span><strong>${lang === 'zh' ? '观察问题' : 'Observe the problem'}</strong><small>${lang === 'zh' ? '讲解 · 关键代码' : 'Explanation · Key code'}</small></a><a href="#theory"><span>02</span><strong>${lang === 'zh' ? '建立模型' : 'Build the model'}</strong><small>${lang === 'zh' ? '理论展开 · 案例方法' : 'Theory · Case method'}</small></a><a href="#demo-section"><span>03</span><strong>${lang === 'zh' ? '验证变化' : 'Verify the change'}</strong><small>${lang === 'zh' ? '动态演示' : 'Interactive demo'}</small></a></div></nav>`);
  bindGlobal();
  if (chapter.id === 1) { bindChapterOneDirectory(); bindChapterOneTabs(); }
  renderDemo(chapter.demo);
}

function bindRadialSidebar() {
  const sidebar = document.querySelector('.radial-nav-shell .sidebar');
  if (!sidebar || sidebar.dataset.radialBound) return;
  sidebar.dataset.radialBound = 'true';
  const nav = sidebar.querySelector('nav');
  const items = Array.from(sidebar.querySelectorAll('.nav-item'));
  const orbitalAngles = [-90, -75, -60, -45, -30, -15, 0];
  const orbitalRadius = 190;
  const orbitalCenter = { x: 0, y: 190 };
  const toggle = document.createElement('button');
  toggle.className = 'radial-toggle';
  toggle.type = 'button';
  toggle.setAttribute('aria-label', lang === 'zh' ? '展开课程目录' : 'Open course directory');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.innerHTML = `<span>${lang === 'zh' ? '课程目录' : 'COURSE'}</span><b>↗</b>`;
  sidebar.appendChild(toggle);
  let rotation = 0;
  let dragging = false;
  let lastX = 0;
  let lastY = 0;
  const applyRotation = () => {
    nav.style.transform = 'none';
    items.forEach((item, index) => {
      const angle = orbitalAngles[index] + rotation;
      const radians = angle * Math.PI / 180;
      item.style.left = `${orbitalCenter.x + Math.cos(radians) * orbitalRadius}px`;
      item.style.top = `${orbitalCenter.y + Math.sin(radians) * orbitalRadius}px`;
      item.style.transform = 'translate(0, -50%)';
    });
  };
  const move = (event) => {
    if (!dragging) return;
    rotation += (event.clientX - lastX) * 0.45 - (event.clientY - lastY) * 0.15;
    lastX = event.clientX;
    lastY = event.clientY;
    applyRotation();
  };
  sidebar.addEventListener('pointerdown', (event) => {
    if (event.target.closest('a,button')) return;
    dragging = true;
    lastX = event.clientX;
    lastY = event.clientY;
    sidebar.setPointerCapture(event.pointerId);
    sidebar.classList.add('is-dragging');
  });
  sidebar.addEventListener('pointermove', move);
  sidebar.addEventListener('pointerup', () => { dragging = false; sidebar.classList.remove('is-dragging'); });
  sidebar.addEventListener('pointercancel', () => { dragging = false; sidebar.classList.remove('is-dragging'); });
  sidebar.addEventListener('wheel', (event) => { event.preventDefault(); rotation += event.deltaY * 0.12; applyRotation(); }, { passive: false });
  toggle.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = !sidebar.classList.contains('is-open');
    sidebar.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? (lang === 'zh' ? '收起课程目录' : 'Close course directory') : (lang === 'zh' ? '展开课程目录' : 'Open course directory'));
  });
  applyRotation();
}

function bindGlobal() {
  document.querySelector('.language-toggle')?.addEventListener('click', () => { lang = lang === 'zh' ? 'en' : 'zh'; localStorage.setItem('layout-lab-language', lang); document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'; document.title = lang === 'en' ? (currentChapter ? `${ui.en.course} · ${t(currentChapter.title)}` : 'Layout with Intent · Introduction to Visualization') : originalTitle; if (document.body.dataset.page === 'section') renderSectionPage(); else if (document.body.dataset.page === 'chapter') renderChapter(); else if (document.body.dataset.page === 'workshop') renderGlobalWorkspace(); else renderHome(); });
  document.querySelectorAll('[data-copy-target]').forEach((button) => button.addEventListener('click', async () => { const target = document.getElementById(button.dataset.copyTarget); const text = target?.dataset.copyRaw || target?.textContent || ''; try { await navigator.clipboard.writeText(text); } catch { const area = document.createElement('textarea'); area.value = text; document.body.appendChild(area); area.select(); document.execCommand('copy'); area.remove(); } button.textContent = ui[lang].copied; setTimeout(() => { button.textContent = ui[lang].copy; }, 1400); }));
  bindRadialSidebar();
}

function control(label, controlHtml) { return `<label class="control"><span>${label}</span>${controlHtml}</label>`; }
function button(label, value, active) { return `<button class="seg-button ${active === value ? 'is-active' : ''}" type="button" data-value="${value}">${label}</button>`; }
function setControl(selector, key, value, demo) { document.querySelectorAll(selector).forEach((element) => element.addEventListener('input', (event) => { state[key] = event.target.value; renderDemo(demo); })); }

function demoFrame(title, controls, viz, status = '') { return `<div class="demo-top"><div><span class="eyebrow">${esc(title)}</span><p>${status || ui[lang].current}</p></div><button class="reset-button" type="button" data-reset="true">↺ ${ui[lang].reset}</button></div><div class="demo-body"><div class="demo-controls">${controls}</div><div class="viz-wrap">${viz}</div></div>`; }

function labDefaults(sectionId) {
  return {
    width: sectionId === 1 ? 1180 : 960, gap: sectionId === 1 ? 12 : 24, sidebar: sectionId === 1 ? 38 : 24,
    padding: 24, alignment: 'start', hierarchy: 2, mode: 'contain', containment: 'main', flow: 'vertical', priority: 'content', template: 'sidebar', columns: 2,
    ratio: 'custom', display: 'grid', direction: 'row', justify: 'start', wrap: 'nowrap', device: 'desktop', selected: 'main', guides: false, grid: false, measurements: false,
    compare: false, density: 2, challenge: false, codeView: 'complete'
  };
}

function readLabState(sectionId) {
  const defaults = labDefaults(sectionId);
  try { return { ...defaults, ...JSON.parse(localStorage.getItem(`chapter1-section${sectionId}-demo-state`) || '{}') }; } catch { return defaults; }
}

function saveLabState(sectionId, values) { localStorage.setItem(`chapter1-section${sectionId}-demo-state`, JSON.stringify(values)); }

const sectionWorkspaceContributions = {
  1: ['width', 'sidebar', 'gap'],
  2: ['mode', 'alignment', 'hierarchy'],
  3: ['template', 'columns', 'sidebar'],
  4: ['display', 'selected', 'ratio'],
  5: ['width', 'gap', 'padding', 'alignment', 'density', 'compare', 'challenge']
};

function chapterWorkspaceDefaults(chapterId = 1) { return { ...labDefaults(1), chapterId, cardSpan: 1, sectionGap: 28, demoWidth: 100, headerHeight: 72, issueMarkers: true, sourceSection: null, workspaceTool: 'diagnosis' }; }
function readChapterWorkspaceState(chapterId = 1) {
  const defaults = chapterWorkspaceDefaults(chapterId);
  try { return { ...defaults, ...JSON.parse(localStorage.getItem(`chapter${chapterId}-workspace-state`) || '{}') }; } catch { return defaults; }
}
function saveChapterWorkspaceState(chapterId, values) { localStorage.setItem(`chapter${chapterId}-workspace-state`, JSON.stringify(values)); }
function mergeSectionIntoWorkspace(chapterId, sectionId) {
  const workspace = readChapterWorkspaceState(chapterId);
  const section = readLabState(sectionId);
  const contributions = sectionWorkspaceContributions[sectionId] || [];
  const merged = { ...workspace, ...Object.fromEntries(contributions.map((key) => [key, section[key]])), sourceSection: sectionId };
  saveChapterWorkspaceState(chapterId, merged);
  return merged;
}

function labPropertyForKey(key) {
  return { width: 'max-width', gap: 'gap', padding: 'padding', sidebar: 'grid-template-columns', containment: 'containment', flow: 'flex-direction', alignment: 'align-items', priority: 'visual hierarchy', display: 'display', ratio: 'grid-template-columns', direction: 'flex-direction', justify: 'justify-content', wrap: 'flex-wrap' }[key] || '';
}

function labControlHeading(label, key, value = '') {
  const property = labPropertyForKey(key);
  return `<span><span class="lab-control-name">${label}${property ? `<small>${property}</small>` : ''}</span>${value ? `<output>${value}</output>` : ''}</span>`;
}

function labRange(label, key, value, min, max, step = 1, unit = 'px') {
  const progress = ((Number(value) - min) / (max - min)) * 100;
  return `<label class="lab-control" data-property-key="${key}">${labControlHeading(label, key, `${value}${unit}`)}<span class="lab-range-wrap" style="--range-progress:${progress}%"><input type="range" min="${min}" max="${max}" step="${step}" value="${value}" data-lab-control="${key}"><output class="lab-range-bubble">${value}${unit}</output></span></label>`;
}

function labSelect(label, key, value, options) {
  return `<label class="lab-control" data-property-key="${key}">${labControlHeading(label, key)}<select data-lab-control="${key}">${options.map(([optionValue, optionLabel]) => `<option value="${optionValue}"${optionValue === value ? ' selected' : ''}>${optionLabel}</option>`).join('')}</select></label>`;
}

function labSegment(label, key, value, options) {
  return `<div class="lab-control" data-property-key="${key}">${labControlHeading(label, key)}<div class="lab-segmented">${options.map(([optionValue, optionLabel]) => `<button type="button" class="${value === optionValue ? 'is-active' : ''}" data-lab-choice="${key}" data-value="${optionValue}">${optionLabel}</button>`).join('')}</div></div>`;
}

function labGroup(label, localizedLabel, content) {
  return `<section class="lab-inspector-group"><header><span>${label}</span><small>${localizedLabel}</small></header>${content}</section>`;
}

function liveCssDescriptor(values, selected = 'main') {
  const ratio = values.ratio === '2:1' ? '2fr 1fr' : values.ratio === '1:3' ? '1fr 3fr' : values.ratio === '1:1' ? '1fr 1fr' : values.ratio === '1:2' ? '1fr 2fr' : values.ratio === 'fixed' ? '240px 1fr' : `${values.sidebar}% minmax(0, 1fr)`;
  const selectors = { header: '.course-header', nav: '.course-header nav', hero: '.course-hero', aside: '.chapter-nav', main: '.course-body', section: '.course-content', card: '.course-card', code: '.course-code', footer: '.course-footer' };
  const paths = { header: '.course-page > .course-header', nav: '.course-header > nav', hero: '.course-page > .course-hero', aside: '.course-body > .chapter-nav', main: '.course-page > .course-body', section: '.course-body > .course-content', card: '.course-content > .course-card', code: '.course-content > .course-code', footer: '.course-page > .course-footer' };
  const selector = selectors[selected] || selectors.main;
  const breadcrumb = paths[selected] || paths.main;
  const lines = [];
  const add = (property, value, key = '') => lines.push({ property, value, key });
  if (selected === 'header' || selected === 'nav') {
    add('display', 'flex'); add('justify-content', 'space-between', 'justify'); add('align-items', values.alignment, 'alignment'); add('padding', `0 ${Math.max(16, values.padding)}px`, 'padding');
  } else if (selected === 'hero') {
    add('max-width', `${values.width}px`, 'width'); add('padding', `${values.padding}px`, 'padding'); add('text-align', values.alignment === 'center' ? 'center' : 'left', 'alignment');
  } else if (selected === 'aside') {
    add('width', `${values.sidebar}%`, 'sidebar'); add('padding', `${values.padding}px`, 'padding'); add('align-self', values.alignment, 'alignment');
  } else if (selected === 'section' || selected === 'card' || selected === 'code') {
    add('display', selected === 'code' ? 'block' : 'grid', 'display'); add('gap', `${values.gap}px`, 'gap'); add('padding', `${values.padding}px`, 'padding'); add('align-items', values.alignment, 'alignment');
  } else if (selected === 'footer') {
    add('padding', `${Math.max(12, Math.round(values.padding / 2))}px ${values.padding}px`, 'padding'); add('text-align', values.alignment === 'center' ? 'center' : 'left', 'alignment');
  } else {
    add('display', values.display, 'display');
    if (values.display === 'grid') add('grid-template-columns', ratio, values.ratio === 'custom' ? 'sidebar' : 'ratio');
    if (values.display === 'flex') { add('flex-direction', values.direction, 'direction'); add('justify-content', values.justify === 'start' ? 'flex-start' : values.justify, 'justify'); add('flex-wrap', values.wrap, 'wrap'); }
    if (values.display !== 'block') add('gap', `${values.gap}px`, 'gap');
    add('padding', `${values.padding}px`, 'padding'); add('max-width', `${values.width}px`, 'width');
    if (values.display !== 'block') add('align-items', values.alignment, 'alignment');
  }
  return { selector, breadcrumb, lines, cssText: `${selector} {\n${lines.map((line) => `  ${line.property}: ${line.value};`).join('\n')}\n}` };
}

function renderLiveCss(values, sectionId, lastChanged = '') {
  const zh = lang === 'zh';
  const current = liveCssDescriptor(values, values.selected);
  const defaults = labDefaults(sectionId);
  const changedLines = current.lines.filter((line) => line.key && String(values[line.key]) !== String(defaults[line.key]));
  const visibleLines = values.codeView === 'changed' ? changedLines : current.lines;
  const codeBlock = (descriptor, lines, label = '') => `<div class="lab-live-code-block">${label ? `<small>${label}</small>` : ''}<code><span class="code-selector">${descriptor.selector}</span> {${lines.length ? lines.map((line) => `<span class="code-line ${lastChanged === line.key ? 'is-changing' : ''}" data-code-key="${line.key}"><i>${line.property}</i>: <b>${line.value}</b>;</span>`).join('') : `<span class="code-empty">/* ${zh ? '尚未修改相关属性' : 'No relevant properties changed yet'} */</span>`}}</code></div>`;
  const compareBaseline = { ...defaults, width: 1180, gap: 8, sidebar: 38, padding: 12, template: 'single', display: 'block' };
  const before = liveCssDescriptor(compareBaseline, values.selected);
  const body = values.compare
    ? `<div class="lab-live-code-compare">${codeBlock(before, before.lines, 'BEFORE')}${codeBlock(current, visibleLines, 'CURRENT')}</div>`
    : codeBlock(current, visibleLines);
  return `<section class="lab-live-code"><header><div><span>LIVE CSS</span><small>${zh ? '实时样式' : 'Generated styles'}</small></div><div class="lab-code-actions"><button type="button" class="${values.codeView === 'complete' ? 'is-active' : ''}" data-code-view="complete">${zh ? '完整样式' : 'Complete'}</button><button type="button" class="${values.codeView === 'changed' ? 'is-active' : ''}" data-code-view="changed">${zh ? '仅看变化' : 'Changes'}</button><button type="button" data-live-copy>${zh ? '复制' : 'Copy'}</button></div></header><div class="lab-selector-path">${current.breadcrumb}</div>${body}<footer>${visibleLines.length} ${zh ? '条属性' : 'properties'} · selected: ${values.selected.toUpperCase()}</footer></section>`;
}

function labMiniPage(values, sectionId, interactive = true, before = false) {
  const template = sectionId === 3 ? values.template : 'sidebar';
  const display = sectionId === 2 ? (values.flow === 'horizontal' ? 'flex' : 'grid') : values.display;
  const oneColumn = template === 'single' || values.columns === 1;
  const ratio = values.ratio === '2:1' ? '2fr 1fr' : values.ratio === '1:3' ? '1fr 3fr' : values.ratio === '1:1' ? '1fr 1fr' : values.ratio === '1:2' ? '1fr 2fr' : values.ratio === 'fixed' ? '240px 1fr' : `${values.sidebar}% minmax(0,1fr)`;
  const align = values.alignment === 'center' ? 'center' : values.alignment === 'stretch' ? 'stretch' : 'flex-start';
  const justify = values.justify === 'center' ? 'center' : values.justify === 'space-between' ? 'space-between' : 'flex-start';
  const bodyStyle = display === 'grid'
    ? `display:grid;grid-template-columns:${oneColumn ? '1fr' : ratio};gap:${values.gap}px;padding:${values.padding}px;align-items:${values.alignment}`
    : display === 'flex'
      ? `display:flex;flex-direction:${values.direction};flex-wrap:${values.wrap};justify-content:${justify};align-items:${align};gap:${values.gap}px;padding:${values.padding}px`
      : `display:block;padding:${values.padding}px`;
  const skeletonStyle = sectionId === 3
    ? `display:grid;grid-template-columns:${template === 'single' ? '1fr' : template === 'editorial' ? 'minmax(0,1.5fr) minmax(120px,.5fr)' : template === 'two' ? '1fr 1fr' : '200px minmax(0,1fr)'};gap:24px;padding:${values.padding}px;align-items:start`
    : bodyStyle;
  const pageClass = [values.guides ? 'has-guides' : '', values.grid ? 'has-grid' : '', values.measurements ? 'has-measurements' : '', before ? 'is-before' : '', `is-display-${display}`, `is-direction-${values.direction}`, `template-${template}`, `relation-${values.containment}`, `priority-${values.priority}`].filter(Boolean).join(' ');
  const sidebarStyle = template === 'single' ? 'display:none' : template === 'right' ? (display === 'flex' ? 'order:2' : 'grid-column:2;grid-row:1') : '';
  const data = (area) => interactive ? `data-lab-area="${area}"` : '';
  const selected = (area) => values.selected === area && interactive ? ' is-selected' : '';
  if (sectionId >= 1 && sectionId <= 5) {
    const micro = lang === 'zh' ? { title: '页面标题', subtitle: '布局问题需要通过空间关系来观察。', sidebar: 'Sidebar', main: 'Main Content', paragraph: '正文内容应该拥有清晰、连续的阅读路径。', cardA: '内容关系', cardB: '空间约束', demo: 'Demo Area', dom: 'DOM Tree', visual: 'Visual Space' } : { title: 'Page title', subtitle: 'Observe layout problems through spatial relationships.', sidebar: 'Sidebar', main: 'Main Content', paragraph: 'Primary content needs a clear and continuous reading path.', cardA: 'Content relation', cardB: 'Spatial constraint', demo: 'Demo Area', dom: 'DOM Tree', visual: 'Visual space' };
    const ratio = `${Math.max(18, Math.min(42, values.sidebar))}% minmax(0,1fr)`;
    const gap = Math.max(6, Math.round(values.gap / 2));
    const contentWidth = Math.max(64, Math.min(100, Math.round((values.width / 1180) * 100)));
    const hierarchyClass = values.hierarchy === 1 ? 'is-hierarchy-low' : values.hierarchy === 3 ? 'is-hierarchy-strong' : '';
    const cards = `<div class="micro-cards"><article class="micro-card${selected('card')}" ${data('card')}><b>01</b><strong>${micro.cardA}</strong><span>${lang === 'zh' ? '把内容放入清晰关系' : 'Place content in a clear relation'}</span></article><article class="micro-card" ${data('card')}><b>02</b><strong>${micro.cardB}</strong><span>${lang === 'zh' ? '让空间支持阅读顺序' : 'Let space support reading order'}</span></article></div>`;
    if (sectionId === 3) {
      const templateClass = `micro-template-${values.template}`;
      return `<div class="micro-frame micro-skeleton-frame ${templateClass}"><div class="micro-skeleton-title"><strong>${micro.title}</strong><span>${lang === 'zh' ? '同一组内容，不同的页面骨架。' : 'The same content, a different page skeleton.'}</span></div><div class="micro-skeleton-layout"><i>${micro.sidebar}</i><div><b>${micro.main}</b><p>${micro.paragraph}</p><em>${micro.demo}</em></div></div></div>`;
    }
    if (sectionId === 4) {
      const dom = `<div class="micro-dom-tree"><span>main.course-page</span><span>├── header.course-header</span><span>└── div.course-body</span><span>　 ├── aside.chapter-nav</span><span>　 └── section.course-content</span></div>`;
      const body = values.display === 'block' ? '<div class="micro-space-stack"><i>aside</i><i>main</i></div>' : '<div class="micro-space-row"><i>aside</i><i>main</i></div>';
      return `<div class="micro-frame micro-dom-frame"><div class="micro-dom-pane"><small>${micro.dom}</small>${dom}</div><div class="micro-visual-pane"><small>${micro.visual}</small><div class="micro-dom-canvas is-display-${values.display}">${body}</div></div></div>`;
    }
    if (sectionId === 5) {
      return `<div class="micro-frame micro-validation-frame ${hierarchyClass}" style="--micro-gap:${gap}px;--micro-content-width:${contentWidth}%"><div class="micro-validation-column"><small>BEFORE</small><div class="micro-validation-page is-before"><div class="micro-mini-title">${micro.title}</div><div class="micro-mini-body" style="grid-template-columns:${ratio};gap:10px"><i>${micro.sidebar}</i><div><b>${micro.main}</b><p>${micro.paragraph}</p>${cards}</div></div></div></div><div class="micro-validation-column"><small>CURRENT</small><div class="micro-validation-page"><div class="micro-mini-title">${micro.title}</div><div class="micro-mini-body" style="grid-template-columns:${ratio};gap:var(--micro-gap)"><i>${micro.sidebar}</i><div style="max-width:var(--micro-content-width)"><b>${micro.main}</b><p>${micro.paragraph}</p>${cards}</div></div></div></div></div>`;
    }
    if (sectionId === 2) {
      const relationClass = `relation-containment-${values.containment} relation-flow-${values.flow} relation-align-${values.alignment} relation-priority-${values.priority}`;
      const demo = `<em ${data('card')}>${micro.demo}</em>`;
      const insideMain = values.containment === 'main' ? demo : '';
      const outsideMain = values.containment === 'body' ? `<em class="micro-relation-demo" ${data('card')}>${micro.demo}</em>` : '';
      return `<div class="micro-frame micro-relation-frame ${relationClass}"><div class="micro-relation-page"><small>CONTAINER</small><div class="micro-relation-body"><i ${data('aside')}>${micro.sidebar}</i><div ${data('main')}><b>${micro.main}</b><span>${micro.paragraph}</span>${insideMain}</div></div>${outsideMain}</div></div>`;
    }
    return `<div class="micro-frame ${hierarchyClass}" style="--micro-gap:${gap}px;--micro-content-width:${contentWidth}%;--micro-sidebar:${values.sidebar}%"><div class="micro-mini-title"><strong>${micro.title}</strong><span>${micro.subtitle}</span></div><div class="micro-mini-body" style="grid-template-columns:${ratio};gap:var(--micro-gap)"><i class="micro-sidebar" ${data('aside')}>${micro.sidebar}</i><div class="micro-main" ${data('main')}><b>${micro.main}</b><p>${micro.paragraph}</p>${cards}</div></div></div>`;
  }
  const labels = lang === 'zh' ? { course: '构页有方', nav: '课程　案例　笔记　关于', hero: 'Web Layout Fundamentals', intro: '通过层级、间距与结构组织内容。', start: '开始学习', chapters: '章节导航', content: '课程内容', section: '页面布局基础', cardA: '内容关系', cardB: '空间约束', code: 'display: grid; gap: 24px;', footer: 'Footer · Layout with intent' } : { course: 'Layout with Intent', nav: 'Course　Cases　Notes　About', hero: 'Web Layout Fundamentals', intro: 'Organize content through hierarchy, spacing, and structure.', start: 'Start learning', chapters: 'Chapter navigation', content: 'Course content', section: 'Layout foundations', cardA: 'Content relationships', cardB: 'Spatial constraints', code: 'display: grid; gap: 24px;', footer: 'Footer · Layout with intent' };
  const cards = `<div class="lab-cards"><article class="lab-card${selected('card')}" ${data('card')}><b>01</b><strong>${labels.cardA}</strong><span>${lang === 'zh' ? '把内容放入清晰关系' : 'Place content in a clear relation'}</span></article><article class="lab-card" ${data('card')}><b>02</b><strong>${labels.cardB}</strong><span>${lang === 'zh' ? '让空间支持阅读顺序' : 'Let space support reading order'}</span></article></div>`;
  const dimensions = values.device === 'mobile' ? '390 × 844' : values.device === 'tablet' ? '768 × 900' : '1200 × 760';
  return `<div class="lab-frame-shell device-${values.device}"><div class="lab-frame-meta"><span>FRAME · course-homepage</span><b>${dimensions}</b></div><div class="layout-lab-page ${pageClass}" style="--lab-width:${Math.min(100, (values.width / 1440) * 100)}%;--lab-gap:${values.gap}px;--lab-padding:${values.padding}px;--lab-sidebar:${values.sidebar}%;--lab-density:${values.density}"><header class="lab-page-header${selected('header')}" ${data('header')}><strong>${labels.course}</strong><nav ${data('nav')}>${labels.nav}</nav></header><div class="lab-page-hero${selected('hero')}" ${data('hero')}><span>COURSE / 01</span><h2>${labels.hero}</h2><p>${labels.intro}</p><button>${labels.start} <i>→</i></button></div><div class="lab-page-body" style="${skeletonStyle}"><aside class="lab-page-aside${selected('aside')}" style="${sidebarStyle}" ${data('aside')}><span>${labels.chapters}</span><b>Chapter 01</b><b>Chapter 02</b><b>Chapter 03</b></aside><main class="lab-page-main${selected('main')}" ${data('main')}><section class="lab-page-section${selected('section')}" ${data('section')}><span class="lab-section-kicker">${labels.section}</span><h3>${labels.content}</h3><p>${lang === 'zh' ? '一个页面需要先建立结构，再谈视觉层级。' : 'A page needs structure before visual hierarchy.'}</p>${cards}<pre ${data('code')}>${labels.code}</pre></section></main></div><footer class="lab-page-footer${selected('footer')}" ${data('footer')}>${labels.footer}</footer><span class="lab-measure measure-width">↔ ${values.width}px</span><span class="lab-measure measure-gap">${values.gap}px gap</span><span class="lab-measure measure-sidebar">${values.sidebar}%</span></div></div>`;
}

function renderLayoutLab(target, sectionId, lastChanged = '') {
  let values = readLabState(sectionId);
  const expandedWorkspace = target.dataset.expandedWorkspace === 'true';
  const canvasZoom = target.dataset.canvasZoom || 'fit';
  const zh = lang === 'zh';
  const titles = zh ? ['观察问题', '建立模型', '从内容到页面骨架', 'DOM 结构如何变成页面空间', '验证'] : ['Observe the problem', 'Build the model', 'From content to page skeleton', 'How DOM becomes page space', 'Validate'];
  const insight = () => {
    if (sectionId === 1) return zh ? `当前内容宽度为 ${values.width}px，间距为 ${values.gap}px。${values.width > 1100 ? '行长仍然偏长，尝试收窄阅读宽度。' : '阅读宽度已经更集中，内容组的边界更容易被看见。'}` : `The content width is ${values.width}px with a ${values.gap}px gap. ${values.width > 1100 ? 'The line is still long; try narrowing the reading width.' : 'The reading width is more focused and groups are easier to see.'}`;
    if (sectionId === 2) return zh ? `当前关系：${values.containment === 'body' ? 'Demo 与 Main 平级' : 'Demo 属于 Main'}，${values.flow === 'horizontal' ? '横向流动' : '纵向流动'}，${values.alignment === 'center' ? '居中对齐' : values.alignment === 'stretch' ? '拉伸对齐' : '起始对齐'}。页面正在重新表达 ${values.priority === 'demo' ? '演示' : values.priority === 'navigation' ? '导航' : '内容'} 的优先级。` : `Containment is ${values.containment}, flow is ${values.flow}, and alignment is ${values.alignment}. The page is expressing ${values.priority} as the visual priority.`;
    if (sectionId === 3) return zh ? `当前模板为“${values.template === 'single' ? '单栏' : values.template === 'editorial' ? 'Editorial' : values.template === 'two' ? '双栏' : '侧栏'}”，同一组内容被重新组织。` : `The ${values.template} template reorganizes the same content without changing the content itself.`;
    if (sectionId === 4) return zh ? `你选中了 ${values.selected}，display: ${values.display} 正在把 DOM 层级转换为页面空间。` : `${values.selected} is selected. display: ${values.display} is turning DOM hierarchy into page space.`;
    return values.challenge ? (zh ? '很好。当前页面已经形成更清晰的阅读路径。' : 'Nice. The layout now has a clearer reading path.') : zh ? `教学反馈：阅读宽度 ${values.width}px，间距 ${values.gap}px，当前布局密度 ${values.density}/3。` : `Layout feedback: ${values.width}px reading width, ${values.gap}px gap, density ${values.density}/3.`;
  };
  const getIssues = () => [
    { good: values.width <= 1100, bad: zh ? '阅读宽度过长' : 'Reading width is too long', pass: zh ? '阅读区域合理' : 'Reading width is balanced', css: `max-width: ${values.width}px`, guide: zh ? '教学建议 800–1100px' : 'Teaching range 800–1100px' },
    { good: values.gap >= 12, bad: zh ? '内容组之间间距不足' : 'Spacing between groups is tight', pass: zh ? '内容分组清晰' : 'Content groups are clear', css: `gap: ${values.gap}px`, guide: zh ? '教学建议 16–32px' : 'Teaching range 16–32px' },
    { good: values.sidebar <= 38, bad: zh ? '侧栏占比过高' : 'Sidebar ratio is too high', pass: zh ? '主次比例稳定' : 'Content ratio is stable', css: `grid-template-columns: ${values.sidebar}% 1fr`, guide: zh ? '教学建议 20–36%' : 'Teaching range 20–36%' },
    { good: values.alignment !== 'center' || values.selected === 'hero', bad: zh ? '内容对齐关系不稳定' : 'Content alignment is unstable', pass: zh ? '对齐关系明确' : 'Alignment is clear', css: `align-items: ${values.alignment}`, guide: zh ? '根据内容关系判断' : 'Choose from content relationships' }
  ];
  const renderProblems = () => {
    const items = getIssues();
    if (sectionId === 5) {
      const density = values.density === 1 ? (zh ? '紧凑' : 'Crowded') : values.density === 3 ? (zh ? '稀疏' : 'Sparse') : (zh ? '平衡' : 'Balanced');
      const densityGood = values.density === 2;
      const alignmentGood = values.alignment === 'start';
      return `<div class="lab-feedback lab-validation-feedback"><span>${zh ? '阅读宽度' : 'Reading width'}<b>${values.width > 1100 ? (zh ? '过宽' : 'Too Wide') : values.width < 760 ? (zh ? '过窄' : 'Too Narrow') : (zh ? '舒适' : 'Comfortable')}</b></span><span>${zh ? '间距' : 'Spacing'}<b>${values.gap < 16 ? (zh ? '紧' : 'Tight') : values.gap > 40 ? (zh ? '松' : 'Loose') : (zh ? '平衡' : 'Balanced')}</b></span><span>${zh ? '对齐' : 'Alignment'}<b>${alignmentGood ? (zh ? '清晰' : 'Clear') : (zh ? '不一致' : 'Inconsistent')}</b></span><span>${zh ? '密度' : 'Density'}<b>${densityGood ? (zh ? '平衡' : 'Balanced') : density}</b></span></div>`;
    }
    return `<div class="lab-problems">${items.map((item) => `<span class="${item.good ? 'is-good' : 'is-warning'}">${item.good ? '✓' : '●'} ${item.good ? item.pass : item.bad}<small>${item.css} · ${item.guide}</small></span>`).join('')}</div><div class="lab-feedback"><span>${zh ? '阅读宽度' : 'Reading width'}<b>${items[0].good ? 'Good' : zh ? '需调整' : 'Review'}</b></span><span>${zh ? '间距' : 'Spacing'}<b>${items[1].good ? 'Good' : zh ? '需调整' : 'Review'}</b></span><span>${zh ? '层级' : 'Hierarchy'}<b>${values.hierarchy >= 2 ? 'Good' : zh ? '需调整' : 'Review'}</b></span></div>`;
  };
  const issueCount = getIssues().filter((item) => !item.good).length;
  const problemList = renderProblems();
  const changeInsight = (key) => {
    if (!key) return insight();
    const current = liveCssDescriptor(values, values.selected).lines.find((line) => line.key === key);
    const baseline = liveCssDescriptor(labDefaults(sectionId), values.selected).lines.find((line) => line.key === key);
    if (!current) return insight();
    const effects = zh ? { width: '正文行长和页面视觉中心随之改变。', gap: '内容组之间的距离被重新计算。', padding: '元素内部的呼吸空间随之改变。', sidebar: '导航与主内容的比例被重新分配。', ratio: '网格轨道的空间比例被重新分配。', display: '浏览器切换了当前布局算法。', alignment: '子元素的对齐基准发生变化。', direction: 'Flex 主轴方向发生变化。', justify: '元素在主轴上的分布方式发生变化。', wrap: '可用空间不足时的换行策略发生变化。' } : { width: 'The reading length and visual center changed.', gap: 'The distance between content groups was recalculated.', padding: 'The internal breathing room changed.', sidebar: 'Space was redistributed between navigation and content.', ratio: 'The grid tracks were redistributed.', display: 'The browser switched layout algorithms.', alignment: 'The alignment reference changed.', direction: 'The Flex main axis changed.', justify: 'Distribution along the main axis changed.', wrap: 'The wrapping strategy changed.' };
    return `${current.property}: ${baseline?.value || '—'} → ${current.value}. ${effects[key] || (key === 'flow' ? (zh ? '直接子元素的流动方向发生变化。' : 'The flow direction of direct children changed.') : key === 'containment' ? (zh ? '辅助演示的空间归属发生变化。' : 'The spatial ownership of the demo changed.') : key === 'priority' ? (zh ? '页面重新分配了内容、导航和演示的视觉权重。' : 'The page redistributed visual weight across content, navigation, and demo.') : (zh ? '页面根据新的 CSS 值重新计算布局。' : 'The page recalculated from the new CSS value.'))}`;
  };
  const domTree = sectionId === 4 ? `<div class="lab-dom-tree"><strong>DOM tree</strong><button class="${values.selected === 'main' ? 'is-active' : ''}" data-lab-node="main">course-page</button><button class="${values.selected === 'header' ? 'is-active' : ''}" data-lab-node="header">└─ course-header</button><button class="${values.selected === 'aside' ? 'is-active' : ''}" data-lab-node="aside">└─ chapter-nav</button><button class="${values.selected === 'section' ? 'is-active' : ''}" data-lab-node="section">└─ course-content</button><button class="${values.selected === 'card' ? 'is-active' : ''}" data-lab-node="card">　└─ article</button></div>` : '';
  const selectedRoles = zh ? { header: '课程信息', nav: '顶部导航', hero: '视觉入口', aside: '章节导航', main: '内容容器', section: '内容分组', card: '内容单元', code: '代码示例', footer: '页面收束' } : { header: 'Course identity', nav: 'Primary navigation', hero: 'Visual entry', aside: 'Chapter navigation', main: 'Content container', section: 'Content group', card: 'Content unit', code: 'Code sample', footer: 'Page closure' };
  const selectedRole = selectedRoles[values.selected] || (zh ? '页面区域' : 'Page region');
  let experimentControls = '';
  if (sectionId === 2) experimentControls = `${labSegment(zh ? '包含关系' : 'Containment', 'containment', values.containment, [['main', zh ? 'Main 内' : 'Inside Main'], ['body', zh ? 'Body 内' : 'Inside Body']])}${labSegment(zh ? '流动关系' : 'Flow', 'flow', values.flow, [['vertical', 'Vertical'], ['horizontal', 'Horizontal']])}${labSegment(zh ? '对齐' : 'Alignment', 'alignment', values.alignment, [['start', 'Start'], ['center', 'Center'], ['stretch', 'Stretch']])}${labSegment(zh ? '优先级' : 'Priority', 'priority', values.priority, [['navigation', 'Navigation'], ['content', 'Content'], ['demo', 'Demo']])}`;
  if (sectionId === 3) experimentControls = `${labSelect(zh ? '页面骨架' : 'Page skeleton', 'template', values.template, [['single', zh ? '单栏' : 'Single column'], ['sidebar', zh ? '侧栏' : 'Sidebar'], ['two', zh ? '双栏' : 'Two columns'], ['editorial', 'Editorial']])}${labSegment(zh ? '侧栏位置' : 'Sidebar position', 'template', values.template, [['sidebar', 'Left'], ['right', 'Right'], ['single', zh ? '隐藏' : 'Hidden']])}`;
  if (sectionId === 4) experimentControls = `${domTree}<div class="lab-display-control">${labSegment('DISPLAY', 'display', values.display, [['block', 'Block'], ['flex', 'Flex'], ['grid', 'Grid']])}</div><p class="lab-control-note">${zh ? '点击 DOM 节点或画布区域，观察结构与空间的双向映射。' : 'Click a DOM node or canvas region to inspect their two-way mapping.'}</p>`;
  if (sectionId === 5) experimentControls = `${labSegment(zh ? '内容密度' : 'Density', 'density', String(values.density), [['1', 'Compact'], ['2', 'Balanced'], ['3', 'Relaxed']])}`;
  const elementLayoutControls = values.selected === 'aside'
    ? `${labRange(zh ? '侧栏宽度' : 'Sidebar width', 'sidebar', values.sidebar, 15, 45, 1, '%')}${sectionId === 3 ? labSegment(zh ? '侧栏位置' : 'Position', 'template', values.template, [['sidebar', zh ? '左' : 'Left'], ['right', zh ? '右' : 'Right'], ['single', zh ? '隐藏' : 'Hidden']]) : ''}`
    : `${labRange(zh ? '内容宽度' : 'Content width', 'width', values.width, 640, 1400, 40)}${values.selected === 'main' ? labRange(zh ? '侧栏比例' : 'Sidebar ratio', 'sidebar', values.sidebar, 15, 45, 1, '%') : ''}`;
  const layoutControls = `${elementLayoutControls}${experimentControls}`;
  const structureControls = `${labSegment('DISPLAY', 'display', values.display, [['block', 'Block'], ['flex', 'Flex'], ['grid', 'Grid']])}${values.display === 'grid' ? labSelect(zh ? '网格列' : 'Grid columns', 'ratio', values.ratio, [['custom', zh ? '侧栏比例' : 'Sidebar ratio'], ['1:1', '1fr 1fr'], ['1:2', '1fr 2fr'], ['2:1', '2fr 1fr'], ['1:3', '1fr 3fr'], ['fixed', '240px 1fr']]) : ''}${values.display === 'flex' ? `${labSegment(zh ? '方向' : 'Direction', 'direction', values.direction, [['row', 'Row'], ['column', 'Column']])}${labSelect(zh ? '主轴分布' : 'Justify', 'justify', values.justify, [['start', 'Start'], ['center', 'Center'], ['space-between', 'Space-between']])}${labSegment(zh ? '换行' : 'Wrap', 'wrap', values.wrap, [['nowrap', 'Off'], ['wrap', 'On']])}` : ''}`;
  const boxModel = `<div class="lab-box-model" aria-label="Box model"><span>margin</span><div><span>border</span><div><span>padding ${values.padding}px</span><b>content</b></div></div></div>`;
  const commonSpacing = labGroup('SPACING', zh ? '间距' : 'Spacing', `${labRange('Gap', 'gap', values.gap, 4, 64, 4)}${labRange('Padding', 'padding', values.padding, 8, 72, 4)}${boxModel}`);
  const alignmentGroup = labGroup('ALIGNMENT', zh ? '对齐' : 'Alignment', labSegment(zh ? '元素对齐' : 'Item alignment', 'alignment', values.alignment, [['start', 'Start'], ['center', 'Center'], ['stretch', 'Stretch']]));
  const structureGroup = labGroup('STRUCTURE', zh ? '结构' : 'Structure', structureControls);
  const controlsBySection = {
    1: labGroup('LAYOUT DIAGNOSIS', zh ? '布局诊断' : 'Layout diagnosis', `${labRange(zh ? '正文宽度' : 'Content width', 'width', values.width, 680, 1180, 40)}${labRange(zh ? '区块间距' : 'Section gap', 'gap', values.gap, 8, 56, 4)}${labRange(zh ? '侧栏比例' : 'Sidebar ratio', 'sidebar', values.sidebar, 20, 40, 1, '%')}${labSegment(zh ? '视觉层级' : 'Hierarchy', 'hierarchy', String(values.hierarchy), [['1', 'Low'], ['2', 'Balanced'], ['3', 'Strong']])}`),
    2: labGroup('RELATION BUILDER', zh ? '关系建模器' : 'Relation builder', experimentControls),
    3: labGroup('SKELETON SWITCHER', zh ? '页面骨架实验' : 'Skeleton switcher', experimentControls),
    4: labGroup('DOM TO SPACE', zh ? '结构映射实验' : 'DOM to space', experimentControls),
    5: labGroup('LAYOUT VALIDATION', zh ? '布局验证' : 'Layout validation', `${labRange(zh ? '阅读宽度' : 'Reading width', 'width', values.width, 680, 1180, 40)}${labRange('Gap', 'gap', values.gap, 8, 56, 4)}${alignmentGroup}${experimentControls}`)
  };
  const feedbackGroup = [1, 5].includes(sectionId) ? labGroup('WHAT CHANGED', zh ? '变化反馈' : 'What changed', `<div data-lab-issues>${problemList}</div>`) : '';
  const controls = `${controlsBySection[sectionId]}${feedbackGroup}`;
  const beforeValues = { ...labDefaults(sectionId), width: 1180, gap: 8, sidebar: 38, padding: 12, template: 'single', display: 'block' };
  const pageMarkup = () => { const currentPage = labMiniPage(values, sectionId, true); return values.compare ? `<div class="lab-compare"><div><span>BEFORE / ${zh ? '原始布局' : 'Original'}</span>${labMiniPage(beforeValues, sectionId, false, true)}</div><div><span>AFTER / ${zh ? '当前布局' : 'Current'}</span>${currentPage}</div></div>` : currentPage; };
  const page = pageMarkup();
  const demoNames = zh ? ['LAYOUT DIAGNOSIS', 'RELATION BUILDER', 'SKELETON SWITCHER', 'DOM TO SPACE', 'LAYOUT VALIDATION'] : ['LAYOUT DIAGNOSIS', 'RELATION BUILDER', 'SKELETON SWITCHER', 'DOM TO SPACE', 'LAYOUT VALIDATION'];
  const tasks = zh ? ['让正文更易读，同时避免侧栏抢占视觉中心。', '调整内容关系，让主次和包含关系变得清楚。', '为当前内容选择更合理的页面骨架。', '保持 DOM 不变，观察不同 display 如何改变页面空间。', '调整页面并通过可观察指标判断是否真的改善。'] : ['Make the body easier to read without letting the sidebar dominate.', 'Clarify containment and priority by changing content relationships.', 'Choose a more suitable page skeleton for the same content.', 'Keep the DOM unchanged and observe how display changes page space.', 'Adjust the page and use observable indicators to judge improvement.'];
  const whyBySection = zh ? ['正文宽度、区块间距和侧栏比例共同决定阅读中心。', '关系决定职责；职责清楚后，布局工具才有明确含义。', '同样内容换一副骨架，阅读路径也会随之改变。', 'DOM 保持不变，父容器的布局上下文决定空间结果。', '只有能解释宽度、间距和对齐的变化，才算验证。'] : ['Reading width, section gaps, and sidebar ratio shape the reading center.', 'Relationships define responsibility before a layout tool gives it space.', 'The same content can produce a different path when its skeleton changes.', 'With the DOM unchanged, the parent layout context determines the spatial result.', 'A change is validated when its width, spacing, and alignment effects are explainable.'];
  const task = tasks[sectionId - 1];
  const why = whyBySection[sectionId - 1];
  target.innerHTML = `<div class="layout-lab"><div class="layout-lab-toolbar"><div class="workshop-title"><span>${demoNames[sectionId - 1]}</span><strong>${zh ? '构页工坊' : 'Layout Workshop'}</strong><small>EXPERIMENT · ${titles[sectionId - 1]}</small></div><div class="workshop-actions"><span class="lab-reset-note" aria-live="polite"></span><button type="button" class="${values.compare ? 'is-active' : ''}" data-lab-action="compare">${zh ? '对比' : 'Compare'}</button><button type="button" data-lab-action="reset">↺ ${ui[lang].reset}</button></div></div><div class="lab-statusbar"><span>EXPERIMENT STATUS</span><b>${values.selected.toUpperCase()} · ${values.display.toUpperCase()} · ${issueCount} ${zh ? '项待观察' : issueCount === 1 ? 'issue' : 'issues'}</b><i class="${issueCount === 0 ? 'is-reached' : ''}">${issueCount === 0 ? '✓ ' + (zh ? '目标已达成' : 'Goal reached') : 'TASK · ' + task}</i></div><div class="layout-lab-workspace"><aside class="layout-lab-controls"><div class="lab-selected"><i></i><div><span>SELECTED ELEMENT</span><strong>${values.selected.toUpperCase()}</strong><small>display: ${values.display} · role: ${selectedRole}</small></div></div>${controls}</aside><div class="layout-lab-main"><div class="layout-lab-stage"><div class="lab-canvas-toolbar"><span>${zh ? '预览' : 'Preview'}</span><b>100%</b><div class="lab-device-switch">${[['desktop', zh ? '桌面' : 'Desktop'], ['tablet', zh ? '平板' : 'Tablet'], ['mobile', zh ? '手机' : 'Mobile']].map(([value, label]) => `<button type="button" class="${values.device === value ? 'is-active' : ''}" data-lab-choice="device" data-value="${value}">${label}</button>`).join('')}</div><label><input type="checkbox" data-lab-toggle="grid"${values.grid ? ' checked' : ''}> ${zh ? '网格' : 'Grid'}</label><label><input type="checkbox" data-lab-toggle="guides"${values.guides ? ' checked' : ''}> ${zh ? '边界' : 'Bounds'}</label><label><input type="checkbox" data-lab-toggle="measurements"${values.measurements ? ' checked' : ''}> ${zh ? '测量' : 'Measure'}</label></div><div class="lab-canvas-content">${page}</div></div><div class="lab-lower-panels"><div class="lab-live-code-host">${renderLiveCss(values, sectionId, lastChanged)}</div><div class="layout-lab-insight"><div><span>INSIGHT / ${zh ? '发生了什么' : 'WHAT CHANGED?'}</span><strong>${changeInsight(lastChanged)}</strong></div><div><span>WHY IT MATTERS</span><p>${why}</p></div></div></div></div></div></div>`;
  const labRoot = target.querySelector('.layout-lab');
  labRoot?.classList.toggle('is-expanded', expandedWorkspace);
  labRoot?.classList.toggle('is-micro-lab', sectionId >= 1 && sectionId <= 5);
  labRoot?.classList.remove('is-zoom-fit', 'is-zoom-75', 'is-zoom-100');
  labRoot?.classList.add(`is-zoom-${canvasZoom}`);
  target.querySelector('.workshop-actions')?.insertAdjacentHTML('afterbegin', `<button type="button" class="workspace-expand-button" data-lab-action="workspace">${expandedWorkspace ? (zh ? '退出全局模式 ×' : 'Exit Focus Mode ×') : (zh ? '全局模式 ↗' : 'Expand Workspace ↗')}</button>`);
  target.querySelector('.lab-device-switch')?.remove();
  target.querySelector('.lab-canvas-toolbar')?.insertAdjacentHTML('beforeend', `<div class="lab-zoom-switch" aria-label="${zh ? '画布缩放' : 'Canvas zoom'}"><span>${zh ? '缩放' : 'Zoom'}</span>${[['fit', 'Fit'], ['75', '75%'], ['100', '100%']].map(([value, label]) => `<button type="button" class="${canvasZoom === value ? 'is-active' : ''}" data-lab-zoom="${value}">${label}</button>`).join('')}</div>`);
  const update = (key, value) => { values[key] = value; if (key === 'sidebar') values.ratio = 'custom'; if (sectionId === 2 && key === 'flow') values.display = value === 'horizontal' ? 'flex' : 'grid'; saveLabState(sectionId, values); renderLayoutLab(target, sectionId, key); };
  const setLinked = (key, active) => {
    if (!key) return;
    const root = target.querySelector('.layout-lab');
    const keys = key === 'sidebar' || key === 'ratio' ? ['sidebar', 'ratio'] : [key];
    keys.forEach((linkedKey) => {
      root?.classList.toggle(`is-link-${linkedKey}`, active);
      target.querySelectorAll(`[data-property-key="${linkedKey}"],[data-code-key="${linkedKey}"]`).forEach((element) => element.classList.toggle('is-linked', active));
    });
  };
  const bindCanvas = () => target.querySelectorAll('[data-lab-area]').forEach((area) => area.addEventListener('click', (event) => { event.preventDefault(); event.stopPropagation(); update('selected', area.dataset.labArea); }));
  const bindDomPreview = () => target.querySelectorAll('.micro-dom-tree span').forEach((node) => {
    const text = node.textContent || '';
    const key = text.includes('header') ? 'header' : text.includes('aside') ? 'aside' : text.includes('section') ? 'section' : text.includes('article') ? 'card' : 'main';
    node.classList.toggle('is-active', values.selected === key);
    node.addEventListener('click', () => update('selected', key));
  });
  const bindLiveCode = () => {
    target.querySelectorAll('[data-code-key]').forEach((line) => {
      line.addEventListener('mouseenter', () => setLinked(line.dataset.codeKey, true));
      line.addEventListener('mouseleave', () => setLinked(line.dataset.codeKey, false));
    });
    target.querySelectorAll('[data-code-view]').forEach((button) => button.addEventListener('click', () => update('codeView', button.dataset.codeView)));
    target.querySelector('[data-live-copy]')?.addEventListener('click', async (event) => {
      const text = liveCssDescriptor(values, values.selected).cssText;
      try { await navigator.clipboard.writeText(text); } catch { const area = document.createElement('textarea'); area.value = text; document.body.appendChild(area); area.select(); document.execCommand('copy'); area.remove(); }
      const button = event.currentTarget; button.textContent = zh ? '已复制' : 'Copied'; setTimeout(() => { button.textContent = zh ? '复制' : 'Copy'; }, 1200);
    });
  };
  const refreshDerived = (key) => {
    const canvas = target.querySelector('.lab-canvas-content');
    const code = target.querySelector('.lab-live-code-host');
    const issueHost = target.querySelector('[data-lab-issues]');
    if (canvas) canvas.innerHTML = pageMarkup();
    if (code) code.innerHTML = renderLiveCss(values, sectionId, key);
    if (issueHost) issueHost.innerHTML = renderProblems();
    const currentIssueCount = getIssues().filter((item) => !item.good).length;
    const status = target.querySelector('.lab-statusbar > b');
    const taskStatus = target.querySelector('.lab-statusbar > i');
    if (status) status.textContent = `${values.selected.toUpperCase()} · ${values.display.toUpperCase()} · ${currentIssueCount} ${zh ? '项待观察' : currentIssueCount === 1 ? 'issue' : 'issues'}`;
    if (taskStatus) { taskStatus.classList.toggle('is-reached', currentIssueCount === 0); taskStatus.textContent = currentIssueCount === 0 ? `✓ ${zh ? '目标已达成' : 'Goal reached'}` : `TASK · ${task}`; }
    const insightText = target.querySelector('.layout-lab-insight strong');
    if (insightText) insightText.textContent = changeInsight(key);
    bindCanvas(); bindDomPreview(); bindLiveCode();
  };
  target.querySelectorAll('[data-lab-control]').forEach((input) => {
    const key = input.dataset.labControl;
    if (input.type === 'range') {
      const wrapper = input.closest('.lab-range-wrap');
      const syncRange = () => {
        values[key] = Number(input.value); if (key === 'sidebar') values.ratio = 'custom'; saveLabState(sectionId, values);
        const unit = key === 'sidebar' ? '%' : key === 'hierarchy' || key === 'density' ? '' : 'px';
        const labelOutput = input.closest('.lab-control')?.querySelector(':scope > span output');
        const bubble = wrapper?.querySelector('.lab-range-bubble');
        const progress = ((Number(input.value) - Number(input.min)) / (Number(input.max) - Number(input.min))) * 100;
        if (labelOutput) labelOutput.textContent = `${input.value}${unit}`;
        if (bubble) bubble.textContent = `${input.value}${unit}`;
        wrapper?.style.setProperty('--range-progress', `${progress}%`);
        wrapper?.classList.add('is-adjusting');
        refreshDerived(key);
      };
      input.addEventListener('input', syncRange);
      input.addEventListener('change', () => { wrapper?.classList.remove('is-adjusting'); renderLayoutLab(target, sectionId, key); });
      input.addEventListener('pointerup', () => wrapper?.classList.remove('is-adjusting'));
    } else input.addEventListener('change', () => update(key, input.value));
  });
  target.querySelectorAll('[data-lab-choice]').forEach((input) => input.addEventListener('click', () => update(input.dataset.labChoice, input.dataset.value === '1' || input.dataset.value === '2' || input.dataset.value === '3' ? Number(input.dataset.value) : input.dataset.value)));
  target.querySelectorAll('[data-lab-toggle]').forEach((input) => input.addEventListener('change', () => update(input.dataset.labToggle, input.checked)));
  target.querySelectorAll('[data-lab-zoom]').forEach((button) => button.addEventListener('click', () => {
    const zoom = button.dataset.labZoom;
    target.dataset.canvasZoom = zoom;
    const root = target.querySelector('.layout-lab');
    root?.classList.remove('is-zoom-fit', 'is-zoom-75', 'is-zoom-100');
    root?.classList.add(`is-zoom-${zoom}`);
    target.querySelectorAll('[data-lab-zoom]').forEach((item) => item.classList.toggle('is-active', item === button));
  }));
  target.querySelectorAll('[data-property-key]').forEach((control) => {
    control.addEventListener('mouseenter', () => setLinked(control.dataset.propertyKey, true));
    control.addEventListener('mouseleave', () => setLinked(control.dataset.propertyKey, false));
  });
  bindCanvas(); bindDomPreview(); bindLiveCode();
  target.querySelectorAll('[data-lab-node]').forEach((node) => node.addEventListener('click', () => update('selected', node.dataset.labNode)));
  target.querySelector('[data-lab-action="compare"]')?.addEventListener('click', () => update('compare', !values.compare));
  target.querySelector('[data-lab-action="workspace"]')?.addEventListener('click', () => { window.location.href = `${document.body.dataset.root || '../'}workshop/chapter-01.html?from=${sectionId}`; });
  target.querySelector('[data-lab-action="reset"]')?.addEventListener('click', () => { values = labDefaults(sectionId); saveLabState(sectionId, values); renderLayoutLab(target, sectionId); const note = target.querySelector('.lab-reset-note'); if (note) { note.textContent = zh ? '已恢复实验默认值' : 'Reset to experiment defaults'; note.classList.add('is-visible'); setTimeout(() => note.classList.remove('is-visible'), 1800); } });
  target.querySelector('[data-lab-action="challenge"]')?.addEventListener('click', () => { values = { ...values, challenge: true, width: 1320, gap: 8, sidebar: 40, padding: 12, density: 3 }; saveLabState(sectionId, values); renderLayoutLab(target, sectionId); });
}

function renderGlobalWorkspace() {
  const chapterId = Number(document.body.dataset.chapter || 1);
  const fromSection = Math.min(5, Math.max(1, Number(new URLSearchParams(location.search).get('from') || 1)));
  const sectionId = fromSection;
  const section = chapterOneSections.find((item) => item.id === sectionId) || chapterOneSections[0];
  const zh = lang === 'zh';
  let values = mergeSectionIntoWorkspace(chapterId, sectionId);
  values = { ...values, cardSpan: Number(values.cardSpan || 1), selected: null };
  if (Number(values.width || 0) < 1280) { values.width = 1360; saveChapterWorkspaceState(chapterId, values); }
  const defaults = chapterWorkspaceDefaults(chapterId);
  let undoStack = [];
  let redoStack = [];
  let activeTool = 'select';
  let editorMode = 'select';
  let gridVisible = false;
  let boundsVisible = false;
  let focusedIssue = null;
  let disposeElementEditor = () => {};
  let selectedNodeId = null;
  let dragStart = null;
  const clamp = (value, min, max) => Math.min(max, Math.max(min, Math.round(value)));
  const title = zh ? ['观察问题', '建立模型', '页面骨架', 'DOM 与页面空间', '验证'][sectionId - 1] : ['Observe the problem', 'Build the model', 'Page skeleton', 'DOM & page space', 'Validate'][sectionId - 1];
  const tool = zh ? ['布局诊断', '关系模型', '页面结构', 'DOM 映射', '验证反馈'][sectionId - 1] : ['Layout diagnosis', 'Relations', 'Structure', 'DOM mapping', 'Validation'][sectionId - 1];
  const labels = { header: zh ? '课程信息' : 'Course identity', hero: zh ? '课程引导' : 'Course introduction', aside: zh ? '章节导航' : 'Chapter navigation', main: zh ? '主内容' : 'Main content', principle: zh ? '核心原则' : 'Principle', relation: zh ? '关系模型' : 'Relation model', content: zh ? '学习内容' : 'Learning content', card: zh ? '内容卡片' : 'Content card', demo: zh ? '动态演示' : 'Interactive demo', notes: zh ? '学习笔记' : 'Learning notes', footer: zh ? '页面收束' : 'Page footer' };
  const pageCopy = zh ? {
    brand: '构页有方', progress: '学习进度', course: '课程', cases: '案例', notes: '笔记', about: '关于', chapter: '第一章 · 布局的本质', completed: '已完成', observe: '观察问题', model: '建立模型', skeleton: '页面骨架', domSpace: 'DOM 与页面空间', validate: '验证', complete: '完成', heroKicker: 'COURSE / CHAPTER 01', heroTitle: '理解页面布局的真正逻辑', heroText: '不从 CSS 属性开始，而从内容关系和页面空间开始。', start: '开始学习 →', principle: '先理解内容关系，再决定空间结构。', principleText: '谁包含谁？谁先被看到？哪些区域应该共享同一条边界？', relationKicker: 'RELATION MODEL · 内容关系 → 页面空间', contain: '包含关系', belong: '谁属于谁', flow: '流动关系', appear: '谁先出现', align: '对齐关系', boundary: '共享边界', priority: '优先级', first: '先看什么', learningKicker: 'LEARNING CONTENT · 学习内容', learningIntro: '从一个拥挤的课程页面开始，逐步建立布局判断方法。', contentKicker: 'INTRO · CONTENT SECTION', contentTitle: '从内容关系到页面骨架', contentText1: '稳定的容器、清晰的层级和可解释的空间关系，让页面更容易被阅读。', contentText2: '当正文过宽、侧栏过重、区块间距过紧时，问题通常来自关系，而不是某一个装饰属性。', card1: '观察问题', card1Text: '阅读宽度、间距与视觉中心', card2: '建立模型', card2Text: '包含、流动、对齐与优先级', card3: '验证布局', card3Text: '用变化解释视觉结果', relationCard: '内容关系', relationCardText: '把内容放入清晰关系', spaceCard: '空间约束', spaceCardText: '让空间支持阅读顺序', demoKicker: 'DEMO AREA · 动态演示', demoTitle: '观察参数如何改变空间', demoText: '调整宽度、间距和侧栏比例，观察布局关系如何重新分配。', notesKicker: 'LEARNING NOTES · VALIDATION', comfortable: '舒适', tooWide: '过宽', good: '良好', tight: '偏紧', needs: '需要改进', insightText: '好的布局判断，应该能通过变化解释，而不是只靠感觉。', nextKicker: 'NEXT SECTION', nextText: '下一节：从内容到页面骨架 →', footer: '构页有方', footerText: 'Layout with intent · Chapter 01'
  } : {
    brand: 'Layout with Intent', progress: 'Progress', course: 'Course', cases: 'Cases', notes: 'Notes', about: 'About', chapter: 'Chapter 01 · The Nature of Layout', completed: 'Completed', observe: 'Observe the problem', model: 'Build the model', skeleton: 'Page skeleton', domSpace: 'DOM & page space', validate: 'Validate', complete: 'complete', heroKicker: 'COURSE / CHAPTER 01', heroTitle: 'Understand the logic behind page layout', heroText: 'Start with content relationships and page space—not isolated CSS properties.', start: 'Start learning →', principle: 'Understand content relationships before deciding the spatial structure.', principleText: 'What contains what? What comes first? Which areas should share an edge?', relationKicker: 'RELATION MODEL · Content relationships → page space', contain: 'Containment', belong: 'Who belongs where', flow: 'Flow', appear: 'What comes first', align: 'Alignment', boundary: 'Shared edge', priority: 'Priority', first: 'What to read first', learningKicker: 'LEARNING CONTENT · Learning content', learningIntro: 'Start with a crowded course page and build a method for judging layout.', contentKicker: 'INTRO · CONTENT SECTION', contentTitle: 'From content relationships to page structure', contentText1: 'Stable containers, clear hierarchy, and explainable spatial relationships make a page easier to read.', contentText2: 'When reading width is excessive, the sidebar dominates, or section gaps are tight, the cause is usually relational rather than decorative.', card1: 'Observe the problem', card1Text: 'Reading width, spacing, and visual focus', card2: 'Build the model', card2Text: 'Containment, flow, alignment, and priority', card3: 'Validate the layout', card3Text: 'Explain visual results through change', relationCard: 'Content relationships', relationCardText: 'Place content in clear relationships', spaceCard: 'Spatial constraints', spaceCardText: 'Let space support reading order', demoKicker: 'DEMO AREA · Interactive demo', demoTitle: 'See how parameters reshape space', demoText: 'Adjust width, spacing, and sidebar proportion to observe how layout relationships redistribute.', notesKicker: 'LEARNING NOTES · VALIDATION', comfortable: 'Comfortable', tooWide: 'Too Wide', good: 'Good', tight: 'Tight', needs: 'Needs improvement', insightText: 'Good layout judgment should be explainable through change, not only intuition.', nextKicker: 'NEXT SECTION', nextText: 'Next: From content to page structure →', footer: 'Layout with Intent', footerText: 'Layout with intent · Chapter 01'
  };
  const snapshot = () => JSON.stringify(values);
  const commit = () => { undoStack.push(snapshot()); redoStack = []; saveChapterWorkspaceState(chapterId, values); };
  const cssText = () => `.course-page {\n  max-width: ${values.width}px;\n}\n\n.course-body {\n  display: grid;\n  grid-template-columns: ${values.sidebar}% 1fr;\n  gap: ${values.gap}px;\n  padding: ${values.padding}px;\n}\n\n.course-content { row-gap: ${values.sectionGap || 28}px; }\n.demo-area { width: ${values.demoWidth || 100}%; }`;
  const insight = () => {
    if (values.lastChanged === 'sidebar') return zh ? `侧栏占比提高到 ${values.sidebar}%，导航获得更多空间，但主内容阅读宽度随之减少。` : `The sidebar now takes ${values.sidebar}%, giving navigation more room while reducing reading width.`;
    if (values.lastChanged === 'gap') return zh ? `卡片间距调整为 ${values.gap}px，内容分组的边界更容易被识别。` : `The card gap is ${values.gap}px, making the grouping boundary easier to read.`;
    if (values.lastChanged === 'width') return zh ? `页面最大宽度为 ${values.width}px，页面中心保持对齐。` : `The page max-width is ${values.width}px and remains centered.`;
    if (values.lastChanged === 'cardSpan') return values.cardSpan === 2 ? (zh ? '第一张卡片跨越两列，获得更强的内容权重。' : 'The first card spans two columns and gains more visual weight.') : (zh ? '卡片恢复为单列跨度，网格关系更均衡。' : 'The card returns to one column for a more balanced grid.');
    return zh ? '直接拖动页面边界，观察布局参数与 CSS 如何同步变化。' : 'Drag the page boundaries and watch the layout parameters and CSS respond.';
  };
  const toolPanel = () => {
    const selected = values.selected || 'main';
    const selectedName = labels[selected] || labels.main;
    if (activeTool === 'diagnosis') return `<section class="global-dock-section global-tool-panel"><span>DIAGNOSIS PANEL · 当前问题</span><div class="global-panel-list"><button type="button" data-global-issue="reading" class="${focusedIssue === 'reading' ? 'is-active' : ''}"><b>Reading Width</b><small>${values.width > 1100 ? 'Too Wide' : 'Comfortable'}</small></button><button type="button" data-global-issue="sidebar" class="${focusedIssue === 'sidebar' ? 'is-active' : ''}"><b>Sidebar Weight</b><small>${values.sidebar > 32 ? 'Too Strong' : 'Balanced'}</small></button><button type="button" data-global-issue="spacing" class="${focusedIssue === 'spacing' ? 'is-active' : ''}"><b>Spacing</b><small>${values.gap < 16 ? 'Too Tight' : 'Balanced'}</small></button><button type="button" data-global-issue="hierarchy" class="${focusedIssue === 'hierarchy' ? 'is-active' : ''}"><b>Hierarchy</b><small>${values.hierarchy >= 2 ? 'Clear' : 'Weak'}</small></button></div></section>`;
    if (activeTool === 'relations') return `<section class="global-dock-section global-tool-panel"><span>RELATIONS PANEL · 当前元素</span><dl class="global-inspector-facts"><div><dt>Selected</dt><dd>${selectedName}</dd></div><div><dt>Parent</dt><dd>.course-body</dd></div><div><dt>Sibling</dt><dd>${selected === 'aside' ? 'main.course-content' : 'aside.chapter-nav'}</dd></div><div><dt>Priority</dt><dd>${selected === 'aside' ? 'Secondary' : 'Primary'}</dd></div></dl></section>`;
    if (activeTool === 'structure') return `<section class="global-dock-section global-tool-panel"><span>STRUCTURE PANEL · 布局骨架</span><dl class="global-inspector-facts"><div><dt>Selected</dt><dd>${selectedName}</dd></div><div><dt>Display</dt><dd>grid</dd></div><div><dt>Columns</dt><dd>${values.sidebar}% · 1fr</dd></div><div><dt>Gap</dt><dd>${values.gap}px</dd></div></dl></section>`;
    if (activeTool === 'dom') return `<section class="global-dock-section global-tool-panel global-dom-panel"><span>DOM PANEL · 结构映射</span><div class="global-dom-tree"><button type="button" data-global-dom-select="header" class="${selected === 'header' ? 'is-active' : ''}">header.course-header</button><button type="button" data-global-dom-select="aside" class="${selected === 'aside' ? 'is-active' : ''}">aside.chapter-nav</button><button type="button" data-global-dom-select="main" class="${selected === 'main' ? 'is-active' : ''}">main.course-content</button><button type="button" data-global-dom-select="relation" class="${selected === 'relation' ? 'is-active' : ''}">└─ section.relation-model</button><button type="button" data-global-dom-select="content" class="${selected === 'content' ? 'is-active' : ''}">└─ section.learning-points</button><button type="button" data-global-dom-select="demo" class="${selected === 'demo' ? 'is-active' : ''}">└─ section.demo</button><button type="button" data-global-dom-select="footer" class="${selected === 'footer' ? 'is-active' : ''}">footer.course-footer</button></div></section>`;
    return `<section class="global-dock-section global-tool-panel"><span>VALIDATION PANEL · 教学反馈</span><div class="global-panel-list"><button type="button" data-global-validation="reading"><b>Reading Width</b><small>${values.width > 1100 ? 'Too Wide' : 'Comfortable'} · 当前 ${values.width}px</small></button><button type="button" data-global-validation="spacing"><b>Spacing</b><small>${values.gap < 16 ? 'Tight' : 'Balanced'} · gap ${values.gap}px</small></button><button type="button" data-global-validation="alignment"><b>Alignment</b><small>${values.alignment === 'center' ? 'Mixed' : 'Consistent'}</small></button><button type="button" data-global-validation="hierarchy"><b>Hierarchy</b><small>${values.hierarchy >= 2 ? 'Clear' : 'Weak'}</small></button></div></section>`;
  };
  const render = () => {
  disposeElementEditor();
  document.querySelector('#app').innerHTML = `<main class="global-workspace-page"><header class="global-toolbar"><div><span class="eyebrow">GLOBAL WORKSPACE</span><h1>${zh ? '构页工坊' : 'Layout Workshop'}</h1><p>${zh ? '拖动页面，观察 CSS 如何响应。' : 'Drag the layout. Watch the CSS respond.'}</p></div><div class="global-toolbar-actions"><a class="global-return" href="../chapters/chapter-01-section-0${sectionId}.html">← ${zh ? '返回课程' : 'Back to course'}</a><button type="button" data-global-action="undo" ${undoStack.length ? '' : 'disabled'}>↶ ${zh ? '撤销' : 'Undo'}</button><button type="button" data-global-action="redo" ${redoStack.length ? '' : 'disabled'}>↷ ${zh ? '重做' : 'Redo'}</button><button type="button" data-global-action="compare" class="${values.compare ? 'is-active' : ''}">${zh ? '对比' : 'Compare'}</button><button type="button" data-global-action="reset">↺ ${zh ? '重置' : 'Reset'}</button></div></header><section class="global-workspace"><div class="global-context"><span>CHAPTER 01 / SECTION 0${sectionId}</span><b>${esc(title)}</b><small>${zh ? 'Visual → CSS → Parameter' : 'Visual → CSS → Parameter'}</small></div><div class="global-canvas-shell"><div class="global-canvas-toolbar"><span>CANVAS</span><span>GRID · BOUNDS · SNAP</span><b>${values.width}px frame</b></div><div class="global-canvas"><div class="global-page-frame ${values.compare ? 'is-comparing' : ''}" style="--global-page-width:${Math.min(100, values.width / 14.4)}%;--global-sidebar:${values.sidebar}%;--global-gap:${values.gap}px;--global-padding:${values.padding}px;--global-card-span:${values.cardSpan}"><button class="global-select global-header ${values.selected === 'header' ? 'is-selected' : ''}" data-global-select="header"><span>HEADER</span><strong>${labels.header}</strong></button><div class="global-body"><button class="global-select global-aside ${values.selected === 'aside' ? 'is-selected' : ''}" data-global-select="aside"><span>ASIDE</span><strong>${labels.aside}</strong><i class="global-resize-handle handle-sidebar" data-global-drag="sidebar" title="${zh ? '拖动调整侧栏比例' : 'Drag sidebar ratio'}"></i></button><main class="global-select global-main ${values.selected === 'main' ? 'is-selected' : ''}" data-global-select="main"><span>MAIN CONTENT</span><strong>${labels.main}</strong><div class="global-card-grid"><button class="global-select global-card ${values.selected === 'card' ? 'is-selected' : ''}" data-global-select="card"><span>CARD 01</span><strong>${zh ? '内容关系' : 'Content relationships'}</strong><i class="global-resize-handle handle-card" data-global-drag="cardSpan" title="${zh ? '拖动调整卡片跨度' : 'Drag to change card span'}"></i></button><button class="global-select global-card" data-global-select="card"><span>CARD 02</span><strong>${zh ? '空间约束' : 'Spatial constraints'}</strong></button><i class="global-resize-handle handle-gap" data-global-drag="gap" title="${zh ? '拖动调整卡片间距' : 'Drag to change gap'}"></i></div></main></div><i class="global-resize-handle handle-width" data-global-drag="width" title="${zh ? '拖动调整页面宽度' : 'Drag to resize content width'}"></i><span class="global-measure global-measure-value">${values.lastChanged ? (values.lastChanged === 'sidebar' ? `${values.sidebar}%` : values.lastChanged === 'gap' ? `${values.gap}px` : values.lastChanged === 'cardSpan' ? `span ${values.cardSpan}` : `${values.width}px`) : 'DRAG TO EDIT'}</span></div></div></div><aside class="global-dock"><section class="global-dock-section global-selected-readout"><span>SELECTED ELEMENT</span><strong>${(values.selected || 'main').toUpperCase()}</strong><small>${labels[values.selected] || labels.main}</small></section>${toolPanel()}<section class="global-dock-section"><span>SIZE</span><label>Width <input type="number" min="720" max="1440" value="${values.width}" data-global-input="width"> px</label><label>Padding <input type="number" min="8" max="72" value="${values.padding}" data-global-input="padding"> px</label></section><section class="global-dock-section"><span>SPACING</span><label>Gap <input type="number" min="4" max="64" value="${values.gap}" data-global-input="gap"> px</label><label>Sidebar <input type="number" min="15" max="45" value="${values.sidebar}" data-global-input="sidebar"> %</label></section><section class="global-dock-section global-css"><span>LIVE CSS</span><pre>${esc(cssText())}</pre></section><section class="global-dock-section global-insight"><span>INSIGHT</span><p>${esc(insight())}</p></section></aside></section></main>`;
    const toolLabel = document.querySelector('.global-context small');
    if (toolLabel) toolLabel.textContent = `TOOL · ${tool} · Visual → CSS → Parameter`;
    const canvas = document.querySelector('.global-canvas');
    const pageFrame = document.querySelector('.global-page-frame');
    const presented = values.compare ? { ...defaults, selected: null, cardSpan: 1, width: 1360 } : values;
    pageFrame?.classList.add('global-course-page');
    pageFrame?.style.setProperty('--global-page-width', `${Math.min(Number(presented.width || 1360), 1440)}px`);
    pageFrame?.style.setProperty('--global-sidebar', `${presented.sidebar}%`);
    pageFrame?.style.setProperty('--global-gap', `${presented.gap}px`);
    pageFrame?.style.setProperty('--global-padding', `${presented.padding}px`);
    pageFrame?.style.setProperty('--global-card-span', presented.cardSpan);
    pageFrame?.classList.toggle('has-selection', Boolean(values.selected));
    if (canvas) {
      canvas.dataset.device = 'desktop';
      canvas.dataset.zoom = 'fit';
      const canvasToolbar = canvas.parentElement?.querySelector('.global-canvas-toolbar');
      if (canvasToolbar) canvasToolbar.innerHTML = `<span>CANVAS · ${Math.min(Number(values.width || 1360), 1440)}px</span>`;
    }
    pageFrame?.style.setProperty('--global-section-gap', `${presented.sectionGap || 28}px`);
    pageFrame?.style.setProperty('--global-header-height', `${presented.headerHeight || 72}px`);
    const makeSemantic = (selector, tagName) => {
      const current = pageFrame?.querySelector(selector);
      if (!current || current.tagName.toLowerCase() === tagName) return;
      const replacement = document.createElement(tagName);
      [...current.attributes].forEach((attribute) => replacement.setAttribute(attribute.name, attribute.value));
      replacement.innerHTML = current.innerHTML;
      current.replaceWith(replacement);
    };
    makeSemantic('.global-header', 'header');
    makeSemantic('.global-aside', 'aside');
    makeSemantic('.global-main', 'main');
    if (pageFrame && !pageFrame.querySelector('.global-footer')) pageFrame.insertAdjacentHTML('beforeend', `<footer class="global-footer global-select" data-global-select="footer"><strong>${pageCopy.footer}</strong><span>${pageCopy.footerText}</span></footer>`);
    const header = pageFrame?.querySelector('.global-header');
    const aside = pageFrame?.querySelector('.global-aside');
    const main = pageFrame?.querySelector('.global-main');
    if (header) { header.style.minHeight = `${presented.headerHeight || 72}px`; header.innerHTML = `<strong>${pageCopy.brand} <small>WEB LAYOUT LAB</small></strong><nav><a>${pageCopy.course}</a><a>${pageCopy.cases}</a><a>${pageCopy.notes}</a><a>${pageCopy.about}</a></nav><small>${pageCopy.progress} 2 / 5</small><i class="global-resize-handle handle-header" data-global-drag="headerHeight"></i>`; }
    if (aside) aside.innerHTML = `<strong>${pageCopy.chapter}</strong><nav><a>01　${pageCopy.observe} <small>${pageCopy.completed}</small></a><a class="is-current">02　${pageCopy.model}</a><a>03　${pageCopy.skeleton}</a><a>04　${pageCopy.domSpace}</a><a>05　${pageCopy.validate}</a></nav><small>2 / 5 ${pageCopy.complete}</small><i class="global-resize-handle handle-sidebar" data-global-drag="sidebar"></i>`;
    if (main) main.innerHTML = `<span>MAIN · COURSE CONTENT</span><section class="global-course-intro global-select" data-global-select="hero"><small>COURSE / CHAPTER 01 · HERO</small><h2>理解页面布局的真正逻辑</h2><p>不从 CSS 属性开始，而从内容关系和页面空间开始。</p><button>开始学习 →</button><i class="global-resize-handle handle-content-width" data-global-drag="width"></i></section><section class="global-course-principle global-select" data-global-select="principle"><small>PRINCIPLE</small><strong>先理解内容关系，再决定空间结构。</strong><p>谁包含谁？谁先被看到？哪些区域应该共享同一条边界？</p></section><section class="global-relation-block global-select" data-global-select="relation"><small>RELATION MODEL · 内容关系 → 页面空间</small><div><span>包含关系<br><b>谁属于谁</b></span><span>流动关系<br><b>谁先出现</b></span><span>对齐关系<br><b>共享边界</b></span><span>优先级<br><b>先看什么</b></span></div><i class="global-resize-handle handle-section-gap" data-global-drag="sectionGap"></i></section><section class="global-learning-block global-select" data-global-select="content"><small>LEARNING CONTENT · 学习内容</small><p>从一个拥挤的课程页面开始，逐步建立布局判断方法。</p><div><article class="global-select global-card" data-global-select="card"><b>01</b><strong>观察问题</strong><span>阅读宽度、间距与视觉中心</span><i class="global-resize-handle handle-card" data-global-drag="cardSpan"></i></article><article class="global-select global-card" data-global-select="card"><b>02</b><strong>建立模型</strong><span>包含、流动、对齐与优先级</span></article><article class="global-select global-card" data-global-select="card"><b>03</b><strong>验证布局</strong><span>用变化解释视觉结果</span></article></div></section><section class="global-content-block global-select" data-global-select="content"><small>INTRO · CONTENT SECTION</small><h3>从内容关系到页面骨架</h3><p>稳定的容器、清晰的层级和可解释的空间关系，让页面更容易被阅读。</p><p>当正文过宽、侧栏过重、区块间距过紧时，问题通常来自关系，而不是某一个装饰属性。</p><div class="global-card-grid"><article class="global-card"><strong>内容关系</strong><small>把内容放入清晰关系</small></article><article class="global-card"><strong>空间约束</strong><small>让空间支持阅读顺序</small><i class="global-resize-handle handle-card-gap" data-global-drag="gap"></i></article></div></section><section class="global-demo-area global-select" data-global-select="demo" style="width:${values.demoWidth || 100}%"><small>DEMO AREA · 动态演示</small><div class="global-demo-bars"><i></i><i></i><i></i></div><strong>观察参数如何改变空间</strong><p>调整宽度、间距和侧栏比例，观察布局关系如何重新分配。</p><i class="global-resize-handle handle-demo-width" data-global-drag="demoWidth"></i></section><section class="global-validation-area global-select" data-global-select="notes"><small>LEARNING NOTES · VALIDATION</small><div><span>Reading Width <b>${values.width <= 1100 ? 'Comfortable' : 'Too Wide'}</b></span><span>Spacing <b>${values.gap >= 16 ? 'Good' : 'Slightly Tight'}</b></span><span>Hierarchy <b>${values.hierarchy >= 2 ? 'Good' : 'Needs Improvement'}</b></span></div><p>好的布局判断，应该能通过变化解释，而不是只靠感觉。</p></section><section class="global-next-section global-select" data-global-select="notes"><small>NEXT SECTION</small><strong>下一节：从内容到页面骨架 →</strong></section>`;
     if (main && !zh) {
       const globalEnglish = new Map([
         ['理解页面布局的真正逻辑', pageCopy.heroTitle], ['不从 CSS 属性开始，而从内容关系和页面空间开始。', pageCopy.heroText], ['开始学习 →', pageCopy.start],
         ['先理解内容关系，再决定空间结构。', pageCopy.principle], ['谁包含谁？谁先被看到？哪些区域应该共享同一条边界？', pageCopy.principleText],
         ['RELATION MODEL · 内容关系 → 页面空间', pageCopy.relationKicker], ['包含关系', pageCopy.contain], ['谁属于谁', pageCopy.belong], ['流动关系', pageCopy.flow], ['谁先出现', pageCopy.appear], ['对齐关系', pageCopy.align], ['共享边界', pageCopy.boundary], ['优先级', pageCopy.priority], ['先看什么', pageCopy.first],
         ['LEARNING CONTENT · 学习内容', pageCopy.learningKicker], ['从一个拥挤的课程页面开始，逐步建立布局判断方法。', pageCopy.learningIntro], ['观察问题', pageCopy.card1], ['阅读宽度、间距与视觉中心', pageCopy.card1Text], ['建立模型', pageCopy.card2], ['包含、流动、对齐与优先级', pageCopy.card2Text], ['验证布局', pageCopy.card3], ['用变化解释视觉结果', pageCopy.card3Text],
         ['INTRO · CONTENT SECTION', pageCopy.contentKicker], ['从内容关系到页面骨架', pageCopy.contentTitle], ['稳定的容器、清晰的层级和可解释的空间关系，让页面更容易被阅读。', pageCopy.contentText1], ['当正文过宽、侧栏过重、区块间距过紧时，问题通常来自关系，而不是某一个装饰属性。', pageCopy.contentText2], ['内容关系', pageCopy.relationCard], ['把内容放入清晰关系', pageCopy.relationCardText], ['空间约束', pageCopy.spaceCard], ['让空间支持阅读顺序', pageCopy.spaceCardText],
         ['DEMO AREA · 动态演示', pageCopy.demoKicker], ['观察参数如何改变空间', pageCopy.demoTitle], ['调整宽度、间距和侧栏比例，观察布局关系如何重新分配。', pageCopy.demoText], ['LEARNING NOTES · VALIDATION', pageCopy.notesKicker], ['好的布局判断，应该能通过变化解释，而不是只靠感觉。', pageCopy.insightText], ['下一节：从内容到页面骨架 →', pageCopy.nextText],
       ]);
       const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT);
       const textNodes = []; while (walker.nextNode()) textNodes.push(walker.currentNode);
       textNodes.forEach((node) => { const value = node.textContent.trim(); if (globalEnglish.has(value)) node.textContent = node.textContent.replace(value, globalEnglish.get(value)); });
     }
     main?.querySelector(':scope > span')?.remove();
    pageFrame?.querySelectorAll('[data-global-select]').forEach((element) => element.classList.remove('is-selected', 'tool-focus'));
    document.querySelector('.global-measure')?.remove();
    if (canvas) {
      canvas.classList.toggle('show-grid', gridVisible);
      canvas.classList.toggle('show-bounds', boundsVisible);
      canvas.querySelector('.global-overlay')?.remove();
      document.querySelector('.global-compare-panel,.global-validation-panel')?.remove();
      if (values.compare) canvas.insertAdjacentHTML('afterbegin', `<div class="playground-compare-state"><span>ORIGINAL</span><button type="button" data-global-action="compare">${zh ? '查看当前版本' : 'Show current'}</button></div>`);
    }
    const workspacePage = document.querySelector('.global-workspace-page');
    workspacePage?.classList.add('global-playground-page');
    const oldHeader = document.querySelector('.global-toolbar');
    oldHeader?.replaceWith(Object.assign(document.createElement('header'), {
      className: 'playground-toolbar',
       innerHTML: `<div class="playground-identity"><a class="playground-back" href="../chapters/chapter-01-section-0${sectionId}.html">← ${zh ? '返回课程' : 'Back'}</a><a class="playground-brand" href="../chapters/chapter-01-section-0${sectionId}.html"><strong>${zh ? '构页工坊' : 'Layout Workshop'}</strong><small>WEB LAYOUT PLAYGROUND</small></a></div><nav class="playground-tools" aria-label="${zh ? '布局编辑工具' : 'Layout editing tools'}"><button type="button" data-playground-mode="select" class="${editorMode === 'select' ? 'is-active' : ''}">↖ ${zh ? '选择' : 'Select'}</button><button type="button" data-playground-mode="drag" class="${editorMode === 'drag' ? 'is-active' : ''}">✥ ${zh ? '拖动' : 'Move'}</button><button type="button" data-global-action="toggle-grid" aria-pressed="${gridVisible}" class="${gridVisible ? 'is-active' : ''}"># ${zh ? '网格' : 'Grid'}</button><button type="button" data-global-action="toggle-bounds" aria-pressed="${boundsVisible}" class="${boundsVisible ? 'is-active' : ''}">□ ${zh ? '边界' : 'Bounds'}</button><button type="button" data-global-tool="dom" class="${activeTool === 'dom' ? 'is-active' : ''}">DOM</button><button type="button" data-global-tool="css" class="${activeTool === 'css' ? 'is-active' : ''}">CSS</button><button type="button" data-global-action="compare" class="${values.compare ? 'is-active' : ''}">◐ ${zh ? '对比' : 'Compare'}</button><button type="button" data-global-action="reset">↺ ${zh ? '重置' : 'Reset'}</button></nav>`
    }));
    document.querySelector('.global-context')?.remove();
    document.querySelector('.global-canvas-toolbar')?.remove();
    document.querySelector('.global-dock')?.remove();
    document.querySelector('.global-workspace')?.classList.add('global-playground');
    document.querySelector('.global-canvas-shell')?.insertAdjacentHTML('beforeend', '<div class="global-floating-inspector-host"></div>');
    bind();
    disposeElementEditor = mountWorkspaceElementEditor({
      frame: pageFrame, canvas, edits: values.compare ? {} : (values.elementEdits || {}), selectedId: values.compare ? null : selectedNodeId, mode: editorMode, view: activeTool,
      select: (id) => { selectedNodeId = id; const node = id ? pageFrame.querySelector(`[data-edit-id="${id}"]`) : null; values.selected = node?.closest('[data-global-select]')?.dataset.globalSelect || null; },
      commit: (edits) => { commit(); values = { ...values, elementEdits: edits }; saveChapterWorkspaceState(chapterId, values); }, lang
    });
  };
  const update = (key, value, history = true) => { if (history) commit(); values = { ...values, [key]: value, lastChanged: key }; saveChapterWorkspaceState(chapterId, values); render(); };
  const bind = () => {
    const issueTargets = { reading: 'content', sidebar: 'aside', spacing: 'relation', hierarchy: 'hero' };
    document.querySelectorAll('[data-global-issue]').forEach((button) => button.addEventListener('click', () => { focusedIssue = button.dataset.globalIssue; update('selected', issueTargets[focusedIssue]); }));
    document.querySelectorAll('[data-global-dom-select],[data-global-validation]').forEach((button) => button.addEventListener('click', () => update('selected', button.dataset.globalDomSelect || (button.dataset.globalValidation === 'reading' ? 'content' : button.dataset.globalValidation === 'spacing' ? 'relation' : button.dataset.globalValidation === 'hierarchy' ? 'hero' : 'main'))));
    document.querySelectorAll('[data-global-input]').forEach((input) => input.addEventListener('change', () => update(input.dataset.globalInput, clamp(Number(input.value), Number(input.min), Number(input.max)))));
    document.querySelectorAll('[data-playground-mode]').forEach((button) => button.addEventListener('click', () => { editorMode = button.dataset.playgroundMode; activeTool = editorMode; render(); }));
    document.querySelectorAll('[data-global-tool]').forEach((button) => button.addEventListener('click', () => { activeTool = button.dataset.globalTool; render(); }));
    document.querySelector('[data-global-action="toggle-grid"]')?.addEventListener('click', () => { gridVisible = !gridVisible; render(); });
    document.querySelector('[data-global-action="toggle-bounds"]')?.addEventListener('click', () => { boundsVisible = !boundsVisible; render(); });
    const beginDrag = (handle, key, event) => {
      event.preventDefault(); event.stopPropagation(); handle.setPointerCapture?.(event.pointerId); dragStart = { key, x: event.clientX, start: { ...values } }; handle.classList.add('is-dragging');
      const move = (moveEvent) => { if (!dragStart) return; const frame = document.querySelector('.global-page-frame'); const rect = frame?.getBoundingClientRect(); const dx = moveEvent.clientX - dragStart.x; const next = { ...dragStart.start };
        if (dragStart.key === 'sidebar') next.sidebar = clamp(dragStart.start.sidebar + (dx / (rect?.width || 900)) * 100, 15, 45);
        if (dragStart.key === 'gap') next.gap = clamp(dragStart.start.gap + dx / 2, 4, 64);
        if (dragStart.key === 'sectionGap') next.sectionGap = clamp((dragStart.start.sectionGap || 28) + dx / 2, 12, 72);
        if (dragStart.key === 'demoWidth') next.demoWidth = clamp((dragStart.start.demoWidth || 100) + dx / 4, 55, 100);
        if (dragStart.key === 'headerHeight') next.headerHeight = clamp((dragStart.start.headerHeight || 72) + dx / 3, 48, 140);
        if (dragStart.key === 'width') next.width = clamp(dragStart.start.width + dx * 2, 720, 1440);
        if (dragStart.key === 'cardSpan') next.cardSpan = dx > 40 ? 2 : dx < -40 ? 1 : dragStart.start.cardSpan;
        values = { ...next, lastChanged: dragStart.key }; render();
      };
      const end = () => { if (!dragStart) return; handle.classList.remove('is-dragging'); undoStack.push(JSON.stringify(dragStart.start)); redoStack = []; dragStart = null; saveChapterWorkspaceState(chapterId, values); render(); window.removeEventListener('pointermove', move); window.removeEventListener('pointerup', end); };
      window.addEventListener('pointermove', move); window.addEventListener('pointerup', end, { once: true });
    };
    document.querySelectorAll('[data-global-drag]').forEach((handle) => handle.addEventListener('pointerdown', (event) => beginDrag(handle, handle.dataset.globalDrag, event)));
    const directDragKeys = { aside: 'sidebar', hero: 'width', main: 'width', relation: 'sectionGap', demo: 'demoWidth', card: 'cardSpan' };
    document.querySelectorAll('[data-global-select]').forEach((element) => {
      const key = directDragKeys[element.dataset.globalSelect];
      if (!key) return;
      element.addEventListener('pointerdown', (event) => {
        if (values.selected !== element.dataset.globalSelect || event.target.closest('a,button,.global-resize-handle')) return;
        beginDrag(element, key, event);
      });
    });
    document.querySelector('[data-global-action="undo"]')?.addEventListener('click', () => { if (!undoStack.length) return; redoStack.push(snapshot()); values = JSON.parse(undoStack.pop()); saveChapterWorkspaceState(chapterId, values); render(); });
    document.querySelector('[data-global-action="redo"]')?.addEventListener('click', () => { if (!redoStack.length) return; undoStack.push(snapshot()); values = JSON.parse(redoStack.pop()); saveChapterWorkspaceState(chapterId, values); render(); });
    document.querySelector('[data-global-action="reset"]')?.addEventListener('click', () => { if (!window.confirm(zh ? '重置本章实验？' : 'Reset this chapter workspace?')) return; commit(); values = { ...defaults, selected: null, cardSpan: 1, width: 1360 }; saveChapterWorkspaceState(chapterId, values); render(); });
    document.querySelectorAll('[data-global-action="compare"]').forEach((button) => button.addEventListener('click', () => update('compare', !values.compare)));
  };
  document.addEventListener('keydown', (event) => { if (!(event.ctrlKey || event.metaKey)) return; if (event.key.toLowerCase() === 'z') { event.preventDefault(); const action = event.shiftKey ? 'redo' : 'undo'; document.querySelector(`[data-global-action="${action}"]`)?.click(); } });
  render();
}

function renderDemo(type) {
  const demo = document.querySelector('#demo, #section-demo'); if (!demo) return;
  const sectionId = Number(document.body.dataset.section || 0);
  if (document.body.dataset.page === 'section' && sectionId >= 1 && sectionId <= 5) { renderLayoutLab(demo, sectionId); return; }
  if (type === 'tree') renderTree(demo); if (type === 'color') renderColor(demo); if (type === 'type') renderType(demo); if (type === 'box') renderBox(demo); if (type === 'layout') renderLayout(demo); if (type === 'layers') renderLayers(demo); if (type === 'audit') renderAudit(demo);
  demo.querySelector('[data-reset]')?.addEventListener('click', () => { state = { ...state, boxSizing: 'border-box', padding: 24, border: 2, margin: 18, colorMode: 'balanced', typeScale: 1, spacing: 24, layout: 'grid', columns: 3, layer: 'sticky', z: 4, audit: 'clean' }; renderDemo(type); });
}

function renderTree(target) {
  const nodes = [{
    key: 'course-page', name: 'course-page', type: 'main',
    role: { zh: '页面的总容器，定义整个案例的空间边界。', en: 'The page container defines the spatial boundary of the case.' },
    children: [
      {
        key: 'course-header', name: 'course-header', type: 'header',
        role: { zh: '提供页面入口和课程识别信息。', en: 'Provides entry points and course identity.' }
      },
      {
        key: 'course-body', name: 'course-body', type: 'div',
        role: { zh: '把导航和主体内容组织成并列关系。', en: 'Organizes navigation and main content as a peer relationship.' },
        children: [
          {
            key: 'chapter-nav', name: 'chapter-nav', type: 'aside',
            role: { zh: '承载章节导航，不应该和正文争夺同一层级。', en: 'Holds chapter navigation without competing with the main content.' }
          },
          {
            key: 'course-content', name: 'course-content', type: 'section',
            role: { zh: '承载课程主体，内部再分解为卡片和演示区。', en: 'Holds the course body, which can be decomposed into cards and demos.' },
            children: [{
              key: 'chapter-card', name: 'chapter-card', type: 'article',
              role: { zh: '一个可独立阅读和布局的内容单元。', en: 'A content unit that can be read and laid out independently.' },
              children: [{
                key: 'demo-panel', name: 'demo-panel', type: 'article',
                role: { zh: '把交互演示作为独立的信息单元。', en: 'Treats the interactive demo as an independent information unit.' }
              }]
            }]
          }
        ]
      }
    ]
  }];
  const focusButtons = nodes[0].children[1].children.map((node) => `<button class="insight-button" type="button" data-focus="${node.key}">${node.name}</button>`).join('');
  const controls = `<p class="control-hint">${lang === 'zh' ? '点击右侧结构节点，左侧页面骨架会同步高亮。' : 'Click a node in the structure map and the page skeleton will highlight the same responsibility.'}</p><div class="insight-buttons"><button class="insight-button is-active" type="button" data-focus="course-page">${lang === 'zh' ? '总容器' : 'Page container'}</button>${focusButtons}</div><div id="tree-readout" class="readout"><strong>&lt;main&gt;</strong><span>${lang === 'zh' ? '页面的总容器，定义整个案例的空间边界。' : 'The page container defines the spatial boundary of the case.'}</span></div>`;
  const viz = `<div class="chapter-one-viz"><div class="page-schematic" aria-label="${lang === 'zh' ? '课程主页骨架' : 'Course homepage skeleton'}"><div class="schematic-browser"><span></span><span></span><span></span><em>course-homepage</em></div><div class="schematic-page"><div class="schematic-zone zone-page is-active" data-structure="course-page"><small>main</small><b></b><div class="schematic-zone zone-header" data-structure="course-header"><small>header</small><b></b><b></b></div><div class="schematic-body" data-structure="course-body"><div class="schematic-zone zone-nav" data-structure="chapter-nav"><small>aside</small><b></b><b></b><b></b></div><div class="schematic-zone zone-content" data-structure="course-content"><small>section</small><b></b><div class="schematic-zone zone-card" data-structure="chapter-card"><small>article</small><b></b><b></b></div><div class="schematic-zone zone-demo" data-structure="demo-panel"><small>demo</small><b></b></div></div></div></div></div></div><svg id="tree-svg" viewBox="0 0 650 390" role="img" aria-label="DOM hierarchy diagram"></svg></div>`;
  target.innerHTML = demoFrame(lang === 'zh' ? 'DOM 结构 ↔ 页面骨架' : 'DOM structure ↔ page skeleton', controls, viz, lang === 'zh' ? 'D3 hierarchy + spatial roles' : 'D3 hierarchy + spatial roles');
  const update = (key) => { const selected = d3.hierarchy(nodes[0]).descendants().find((node) => node.data.key === key); if (!selected) return; document.querySelectorAll('[data-focus]').forEach((button) => button.classList.toggle('is-active', button.dataset.focus === key)); document.querySelectorAll('[data-structure]').forEach((zone) => zone.classList.toggle('is-active', zone.dataset.structure === key)); document.querySelector('#tree-readout').innerHTML = `<strong>&lt;${selected.data.type}&gt;</strong><span>${selected.data.role[lang]}</span>`; document.querySelectorAll('.tree-node').forEach((node) => node.classList.toggle('is-active', node.dataset.key === key)); };
  document.querySelectorAll('[data-focus]').forEach((button) => button.addEventListener('click', () => update(button.dataset.focus)));
  const svg = d3.select('#tree-svg'); const rootNode = d3.hierarchy(nodes[0]); const tree = d3.tree().size([560, 290]); tree(rootNode); const group = svg.append('g').attr('transform', 'translate(40,30)'); group.selectAll('line').data(rootNode.links()).join('line').attr('class', 'tree-link').attr('x1', (d) => d.source.x).attr('y1', (d) => d.source.y).attr('x2', (d) => d.target.x).attr('y2', (d) => d.target.y); const node = group.selectAll('g').data(rootNode.descendants()).join('g').attr('class', 'tree-node').attr('data-key', (d) => d.data.key).attr('transform', (d) => `translate(${d.x},${d.y})`).on('click', (_, d) => update(d.data.key)); node.append('circle').attr('r', 20); node.append('text').attr('dy', 38).text((d) => d.data.name); update('course-page');
}

function renderColor(target) {
  const palette = state.colorMode === 'quiet' ? ['#17233b', '#5d6d86', '#cad3df', '#eff3f8'] : state.colorMode === 'bold' ? ['#17233b', '#7c5cff', '#ffb45b', '#72d6bf'] : ['#17233b', '#51627e', '#ffb45b', '#72d6bf'];
  const contrast = state.colorMode === 'bold' ? '4.1 : 1' : state.colorMode === 'quiet' ? '9.6 : 1' : '7.8 : 1';
  const controls = `<div class="control-group"><span class="control-title">${lang === 'zh' ? '颜色角色' : 'Color role'}</span><div class="segmented">${button(lang === 'zh' ? '平衡' : 'Balanced', 'balanced', state.colorMode)}${button(lang === 'zh' ? '低饱和' : 'Quiet', 'quiet', state.colorMode)}${button(lang === 'zh' ? '高强调' : 'Bold', 'bold', state.colorMode)}</div></div><div class="contrast-readout"><span>${lang === 'zh' ? '正文对背景对比度' : 'Text/background contrast'}</span><strong>${contrast}</strong><small>${state.colorMode === 'bold' ? (lang === 'zh' ? '需要复核' : 'Review needed') : (lang === 'zh' ? '适合正文' : 'Good for body text')}</small></div>`;
  target.innerHTML = demoFrame(lang === 'zh' ? '色彩如何改变视觉重量' : 'How color changes visual weight', controls, '<svg id="color-svg" viewBox="0 0 760 300" role="img" aria-label="Color hierarchy diagram"></svg>');
  document.querySelectorAll('.seg-button').forEach((b) => b.addEventListener('click', () => { state.colorMode = b.dataset.value; renderDemo('color'); }));
  const svg = d3.select('#color-svg'); const roles = lang === 'zh' ? ['背景', '结构', '强调', '交互'] : ['Canvas', 'Structure', 'Accent', 'Action']; const widths = state.colorMode === 'bold' ? [135, 150, 250, 185] : [250, 170, 170, 130]; let x = 15; roles.forEach((role, index) => { svg.append('rect').attr('x', x).attr('y', 70).attr('width', widths[index]).attr('height', 120).attr('rx', 16).attr('fill', palette[index]); svg.append('text').attr('x', x + widths[index] / 2).attr('y', 138).attr('text-anchor', 'middle').attr('fill', index === 2 || index === 3 ? '#132238' : '#ffffff').text(role); x += widths[index] + 10; }); svg.append('text').attr('x', 15).attr('y', 235).attr('class', 'svg-caption').text(lang === 'zh' ? '视觉重量由色相、饱和度和对比度共同决定' : 'Visual weight is shaped by hue, saturation, and contrast');
}

function renderType(target) {
  const scale = Number(state.typeScale); const spacing = Number(state.spacing); const controls = `${control(lang === 'zh' ? '字号比例' : 'Type scale', `<input type="range" min="0.8" max="1.4" step="0.1" value="${scale}" data-type-control="scale"><output>${scale.toFixed(1)}×</output>`)}${control(lang === 'zh' ? '区块间距' : 'Section gap', `<input type="range" min="12" max="48" step="4" value="${spacing}" data-type-control="spacing"><output>${spacing}px</output>`)}<p class="control-hint">${lang === 'zh' ? '间距相等不代表层级相同；层级来自比例和重复。' : 'Equal gaps do not create hierarchy by themselves; hierarchy comes from proportion and repetition.'}</p>`;
  target.innerHTML = demoFrame(lang === 'zh' ? '基线与阅读节奏' : 'Baseline and reading rhythm', controls, `<div class="type-preview" style="--type-scale:${scale};--section-gap:${spacing}px"><span class="preview-label">${lang === 'zh' ? '课程章节' : 'COURSE CHAPTER'}</span><h3>${lang === 'zh' ? '从混乱页面到清晰界面' : 'From clutter to clarity'}</h3><p>${lang === 'zh' ? '一个可读的桌面页面，需要稳定的字号层级、行长和留白。' : 'A readable desktop page needs a stable type scale, line length, and whitespace.'}</p><div class="baseline-lines"></div></div>`);
  document.querySelectorAll('[data-type-control]').forEach((input) => input.addEventListener('input', () => { if (input.dataset.typeControl === 'scale') state.typeScale = input.value; else state.spacing = input.value; renderDemo('type'); }));
}

function renderBox(target) {
  const total = 240 + Number(state.padding) * 2 + Number(state.border) * 2; const outer = total + Number(state.margin) * 2; const controls = `${control(lang === 'zh' ? '内边距 padding' : 'Padding', `<input type="range" min="8" max="48" step="4" value="${state.padding}" data-box="padding"><output>${state.padding}px</output>`)}${control(lang === 'zh' ? '边框 border' : 'Border', `<input type="range" min="1" max="12" value="${state.border}" data-box="border"><output>${state.border}px</output>`)}${control(lang === 'zh' ? '外边距 margin' : 'Margin', `<input type="range" min="0" max="36" step="4" value="${state.margin}" data-box="margin"><output>${state.margin}px</output>`)}<div class="segmented">${button('border-box', 'border-box', state.boxSizing)}${button('content-box', 'content-box', state.boxSizing)}</div>`;
  target.innerHTML = demoFrame(lang === 'zh' ? '盒子到底占据了多大空间？' : 'How much space does the box occupy?', controls, `<svg id="box-svg" viewBox="0 0 760 330" role="img" aria-label="Box model diagram"></svg>`, `${lang === 'zh' ? '外部宽度' : 'Outer width'} ${outer}px · ${lang === 'zh' ? '内容宽度' : 'Content width'} 240px`);
  document.querySelectorAll('[data-box]').forEach((input) => input.addEventListener('input', () => { state[input.dataset.box] = input.value; renderDemo('box'); })); document.querySelectorAll('.seg-button').forEach((b) => b.addEventListener('click', () => { state.boxSizing = b.dataset.value; renderDemo('box'); }));
  const svg = d3.select('#box-svg'); const x = 70, y = 52, max = Math.min(620, outer), scale = max / outer; const rects = [{ label: lang === 'zh' ? 'margin' : 'margin', value: '#fff2dc', pad: 0, size: outer }, { label: 'border', value: '#ffb45b', pad: state.margin * scale, size: total }, { label: 'padding', value: '#ffe7bf', pad: (state.margin + Number(state.border)) * scale, size: total - Number(state.border) * 2 }, { label: 'content', value: '#ffffff', pad: (state.margin + Number(state.border) + Number(state.padding)) * scale, size: state.boxSizing === 'border-box' ? 240 : 240 }]; rects.forEach((item, index) => { const w = item.size * scale; const left = x + item.pad; svg.append('rect').attr('x', index === 0 ? x : left).attr('y', y + index * 8).attr('width', index === 0 ? max : w).attr('height', 180 - index * 16).attr('rx', 12).attr('fill', item.value).attr('stroke', '#d3dce8'); svg.append('text').attr('x', index === 0 ? x + max + 12 : left + w / 2).attr('y', index === 0 ? y + 90 : y + 90).attr('text-anchor', index === 0 ? 'start' : 'middle').attr('class', index === 3 ? 'box-label dark' : 'box-label').text(`${item.label} ${index === 3 ? '240px' : ''}`); }); svg.append('text').attr('x', 70).attr('y', 280).attr('class', 'svg-caption').text(`${lang === 'zh' ? '当前 box-sizing' : 'Current box-sizing'}: ${state.boxSizing}`);
}

function renderLayout(target) {
  const isGrid = state.layout === 'grid'; const controls = `<div class="control-group"><span class="control-title">${lang === 'zh' ? '布局模型' : 'Layout model'}</span><div class="segmented">${button('Grid', 'grid', state.layout)}${button('Flexbox', 'flex', state.layout)}</div></div>${isGrid ? control(lang === 'zh' ? '列数' : 'Columns', `<input type="range" min="2" max="4" value="${state.columns}" data-layout="columns"><output>${state.columns}</output>`) : '<p class="control-hint">Flexbox will distribute the cards along one axis.</p>'}`;
  const style = isGrid ? `grid-template-columns:repeat(${state.columns},1fr)` : 'display:flex;flex-wrap:wrap;align-items:stretch'; const cards = Array.from({ length: 6 }, (_, i) => `<div class="layout-card"><span>0${i + 1}</span><strong>${lang === 'zh' ? ['结构', '颜色', '间距', '盒子', '对齐', '案例'][i] : ['Structure', 'Color', 'Spacing', 'Box', 'Align', 'Case'][i]}</strong></div>`).join('');
  target.innerHTML = demoFrame(lang === 'zh' ? '一维还是二维？' : 'One dimension or two?', controls, `<div class="layout-preview ${isGrid ? 'is-grid' : 'is-flex'}" style="${style}">${cards}</div>`, isGrid ? 'grid-template-columns' : 'flex-wrap + align-items');
  document.querySelectorAll('.seg-button').forEach((b) => b.addEventListener('click', () => { state.layout = b.dataset.value; renderDemo('layout'); })); document.querySelector('[data-layout]')?.addEventListener('input', (e) => { state.columns = e.target.value; renderDemo('layout'); });
}

function renderLayers(target) {
  const layers = state.layer === 'absolute' ? ['page', 'card', 'tooltip'] : ['page', 'sticky nav', 'tooltip']; const controls = `<div class="control-group"><span class="control-title">${lang === 'zh' ? '定位方式' : 'Position mode'}</span><div class="segmented">${button('sticky', 'sticky', state.layer)}${button('absolute', 'absolute', state.layer)}</div></div>${control('z-index', `<input type="range" min="1" max="10" value="${state.z}" data-layer="z"><output>${state.z}</output>`)}<p class="control-hint">${lang === 'zh' ? '图层顺序必须建立在正确的包含块之上。' : 'Layer order must be built on the correct containing block.'}</p>`;
  target.innerHTML = demoFrame(lang === 'zh' ? '空间层级不是平面叠加' : 'Spatial layers are not flat', controls, `<div class="layers-preview"><div class="layer layer-page"><span>${layers[0]}</span></div><div class="layer layer-middle"><span>${layers[1]}</span></div><div class="layer layer-top" style="z-index:${state.z}"><span>${layers[2]} · z ${state.z}</span></div></div>`);
  document.querySelectorAll('.seg-button').forEach((b) => b.addEventListener('click', () => { state.layer = b.dataset.value; renderDemo('layers'); })); document.querySelector('[data-layer]')?.addEventListener('input', (e) => { state.z = e.target.value; renderDemo('layers'); });
}

function renderAudit(target) {
  const issues = lang === 'zh' ? [{ key: 'hierarchy', label: '内容层级不清', fix: '重新组织 DOM' }, { key: 'spacing', label: '间距没有系统', fix: '建立 8px 节奏' }, { key: 'color', label: '强调色过多', fix: '保留一个动作色' }, { key: 'layout', label: '页面骨架松散', fix: '使用 Grid' }] : [{ key: 'hierarchy', label: 'Unclear hierarchy', fix: 'Reorganize DOM' }, { key: 'spacing', label: 'Inconsistent spacing', fix: 'Use an 8px rhythm' }, { key: 'color', label: 'Too many accents', fix: 'Keep one action color' }, { key: 'layout', label: 'Loose page skeleton', fix: 'Use Grid' }];
  const controls = `<div class="audit-options">${issues.map((issue) => `<button type="button" class="audit-option ${state.audit === issue.key ? 'is-active' : ''}" data-audit="${issue.key}"><span>${state.audit === issue.key ? '✓' : '○'}</span>${issue.label}</button>`).join('')}</div><p class="control-hint">${lang === 'zh' ? '选择一个问题，看最小修复如何回到案例。' : 'Choose an issue to see the smallest repair for the case.'}</p>`;
  const selected = issues.find((issue) => issue.key === state.audit); const status = selected ? `${lang === 'zh' ? '建议' : 'Suggested'}: ${selected.fix}` : (lang === 'zh' ? '请选择一个布局问题' : 'Select a layout issue'); const viz = `<div class="audit-page ${state.audit === 'clean' ? '' : `issue-${state.audit}`}" aria-label="case audit"><div class="audit-header"><span></span><span></span><span></span></div><div class="audit-columns"><div class="audit-side"></div><div class="audit-main"><div class="audit-title"></div><div class="audit-line"></div><div class="audit-cards"><i></i><i></i><i></i></div></div><div class="audit-note"></div></div><div class="audit-status">${state.audit === 'clean' ? '✓ ' + (lang === 'zh' ? '案例已通过布局检查' : 'Case passed the layout audit') : '→ ' + status}</div></div>`;
  target.innerHTML = demoFrame(lang === 'zh' ? '综合布局检查' : 'Integrated layout audit', controls, viz, status); document.querySelectorAll('[data-audit]').forEach((b) => b.addEventListener('click', () => { state.audit = b.dataset.audit; renderDemo('audit'); }));
}

document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
if (document.body.dataset.page === 'section') renderSectionPage();
else if (document.body.dataset.page === 'workshop') renderGlobalWorkspace();
else if (document.body.dataset.page === 'chapter') renderChapter();
else renderHome();
