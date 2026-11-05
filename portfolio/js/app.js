/* Portfolio v2 — rendering + i18n. Data: js/data.js (window.PORTFOLIO_V2).
   Index: varied entry covers (feature / split / card / dark) linking to
   case.html?case=<slug>. Detail: one consistent template; image layout
   varies by case (flow | phones = 3-phone intro | multi = image grid). */
(function () {
  'use strict';
  var cases = window.PORTFOLIO_V2 || [];
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  var I18N = {
    en: {
      navWork: 'Work', navAbout: 'About', navAI: 'AI & Prototypes', navInfluence: 'Influence', navResume: 'Résumé',
      heroEyebrow: 'Michael Mu · Design Lead, OPPO ColorOS',
      heroH1: 'From defining app experiences, to <span class="gold">OS experiences</span>, to cross-device AI.',
      heroSub: '19 years of user experience and product design, spanning Tencent, WeSing, and OPPO ColorOS — turning design insight from complex businesses into experience strategy and design systems.',
      heroCtaWork: 'See the work', heroCtaResume: 'View résumé',
      heroMeta1t: 'years of experience', heroMeta2t: 'designers led', heroMeta3t: 'generations of UI Kit',
      heroPhoneCaption: 'ColorOS Design System — engineering layers',
      workEyebrow: 'Selected work', workTitle: 'Cases',
      workIntro: 'Seven cases, from OS experience to AI prototypes — each one opens into a full case page.',
      aboutEyebrow: 'About', aboutTitle: 'Design lead, systems thinker.',
      aboutLede: '19 years of UX design across Tencent’s core products, a breakout mobile social app, and OPPO’s operating system.',
      aboutP2: 'Currently leading ColorOS interconnect experience; previously led the platform design team and internet services experience design and user research.',
      aboutResumeLink: 'See full résumé',
      aiEyebrow: 'AI & Prototyping', aiTitle: 'AI, made runnable.',
      aiIntro: 'Since 2025: understanding AI architecture first, then prototyping the experience — intent, memory, knowledge, and components.',
      aiNote: 'Framework draft — copy to be confirmed before publishing.',
      influenceEyebrow: 'Influence', influenceTitle: 'Shared with the community.',
      influenceIntro: 'UI Kits, talks, and events — the work, published.',
      moreEyebrow: 'And so much more.', moreTitle: 'And so much more.', moreSub: '还有更多。',
      moreWorkT: 'More work', moreWorkD: 'Seven cases on this page — and more in the pipeline.', moreWorkC: 'See the work',
      moreTalkT: 'Let’s talk', moreTalkD: 'Design systems, OS experience, AI products — open to the right conversations.', moreTalkC: 'Get in touch',
      moreResumeT: 'Résumé', moreResumeD: 'The full story: 19 years, two companies, one turning line.', moreResumeC: 'View résumé',
      viewCase: 'View case', backLink: 'Back to work',
      processH: 'Key judgments & approach', resultH: 'Deliverables & outcomes',
      roleH: 'My role', dateH: 'Period', nextLabel: 'Next case', caseWord: 'Case'
    },
    zh: {
      navWork: '案例', navAbout: '简介', navAI: 'AI 与原型', navInfluence: '影响力', navResume: '简历',
      heroEyebrow: '牟伟成 · OPPO ColorOS 设计负责人',
      heroH1: '从定义应用体验，到定义 <span class="gold">OS 体验</span>，再到跨端 AI。',
      heroSub: '19 年用户体验设计经验，跨越腾讯核心产品、国民级移动社交应用与 OPPO 操作系统。擅长把复杂业务的设计洞察转化为体验战略与设计系统。',
      heroCtaWork: '查看案例', heroCtaResume: '查看简历',
      heroMeta1t: '年经验', heroMeta2t: '设计师团队', heroMeta3t: '代 UI Kit',
      heroPhoneCaption: 'ColorOS 设计体系 · 工程化分层',
      workEyebrow: '作品案例', workTitle: '案例',
      workIntro: '七个案例，从 OS 体验到 AI 原型——每个都可点开看完整详情。',
      aboutEyebrow: '简介', aboutTitle: '设计负责人，系统思考者。',
      aboutLede: '19 年用户体验设计经验，跨越腾讯核心产品、国民级移动社交应用与 OPPO 操作系统。',
      aboutP2: '目前负责 ColorOS 生态互联体验；此前带领平台设计团队，并负责互联网服务体验设计与用户研究团队。',
      aboutResumeLink: '查看完整简历',
      aiEyebrow: 'AI 与原型实践', aiTitle: '把 AI 变成可运行的原型。',
      aiIntro: '2025 年起：先理解 AI 架构，再做体验原型——意图、记忆、知识与组件。',
      aiNote: '框架草稿：文案待你核对后定稿。',
      influenceEyebrow: '专业影响力', influenceTitle: '公开分享与专业建设。',
      influenceIntro: 'UI Kit、演讲与活动——公开发布的作品。',
      moreEyebrow: 'And so much more.', moreTitle: 'And so much more.', moreSub: '还有更多。',
      moreWorkT: '更多案例', moreWorkD: '这一页有七个案例，还有更多在路上。', moreWorkC: '查看案例',
      moreTalkT: '合作与交流', moreTalkD: '设计系统、OS 体验、AI 产品——欢迎聊聊。', moreTalkC: '联系我',
      moreResumeT: '简历', moreResumeD: '完整经历：19 年，两家公司，一条转向线。', moreResumeC: '查看简历',
      viewCase: '查看案例', backLink: '返回案例',
      processH: '关键判断与做法', resultH: '交付与阶段结果',
      roleH: '本人职责', dateH: '时间', nextLabel: '下一个案例', caseWord: '案例'
    }
  };

  var lang = 'en';
  try {
    lang = window.localStorage.getItem('v2-lang') ||
      (document.documentElement.lang || '').indexOf('zh') === 0 ? 'zh' : 'en';
  } catch (e) { lang = 'en'; }
  if (lang !== 'zh' && lang !== 'en') lang = 'en';
  function t(key) { return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || ''; }
  function loc(v) { return (v && typeof v === 'object') ? (v[lang] || v.en || '') : (v || ''); }

  var DOING = [
    { t: { zh: '系统体验策略', en: 'System experience strategy' },
      d: { zh: 'OS 层面的体验策略与跨业务协同，从洞察到落地的系统行为。', en: 'OS-level experience strategy and cross-business coordination, from insight to shipped system behavior.' } },
    { t: { zh: '设计语言与系统', en: 'Design language & systems' },
      d: { zh: '共享设计系统、控件与动效；ColorOS 15、16 两代 UI Kit 已在 Figma Community 发布。', en: 'Shared design systems, controls, and motion — including the ColorOS 15 & 16 UI Kits published on Figma Community.' } },
    { t: { zh: 'AI 与原型实践', en: 'AI & prototyping practice' },
      d: { zh: '理解 AI 架构（意图、记忆、知识库），把判断做成可运行的原型。', en: 'Understanding AI architecture — intent, memory, knowledge — and turning judgment into runnable prototypes.' } }
  ];

  var AI_ROWS = [
    { img: './images/cases/ai-workflow/slide-01.png',
      cap: { zh: '新版 03 · AI 工作流', en: 'AI workflow' },
      title: { zh: 'AI 工作流与可运行原型', en: 'AI workflow & runnable prototypes' },
      desc: { zh: '2025 年起将 AI 用于研究、总结、写作与方案讨论；2026 年进一步深入 Agent、本地模型及可运行原型，用实际运行效果重新审视设计判断。', en: 'Since 2025, using AI for research, synthesis, writing, and design critique; in 2026 going deeper into agents, local models, and runnable prototypes — letting real running results re-examine design judgment.' } },
    { img: './images/cases/ai-workflow/slide-02.png',
      cap: { zh: '新版 04 · AI 个人产品', en: 'AI personal product' },
      title: { zh: 'AI 语音助手 · 临场反馈', en: 'AI voice assistant · in-the-moment feedback' },
      desc: { zh: '自己的会议与日常记录助手，实时给反馈。问题很真实：反馈过灵敏、不理解场景，正在一版一版改触发规则。', en: 'My own meeting and daily-recording assistant, giving live feedback. The problems are real — over-eager triggers that miss the context — being fixed one iteration at a time.' } },
    { img: './images/cases/ai-workflow/slide-03.png',
      cap: { zh: '新版 05 · AI 原型验证', en: 'AI prototype validation' },
      title: { zh: '生成式 UI · 理解先于生成', en: 'Generative UI · understanding first' },
      desc: { zh: '生成式 UI 的关键不在界面生成本身，而在意图理解、记忆与知识调用、组件映射三层的确定性；设计系统是其中的确定性锚点。', en: 'Generative UI is not about generating interfaces — it is about certainty across intent, memory, knowledge, and component mapping. The design system is the anchor.' } }
  ];

  var INFLUENCE = [
    { title: 'ColorOS 16 UI Kit', src: 'Figma Community', year: '2026', url: 'https://www.figma.com/community/file/1572820051263618685/coloros-16-ui-kit' },
    { title: 'ColorOS 15 UI Kit', src: 'Figma Community', year: '2025', url: 'https://www.figma.com/community/file/1430008996536373272/coloros-15-ui-kit' },
    { title: { zh: 'MSUP 演讲', en: 'MSUP talk' }, src: 'MSUP', year: '', url: 'https://www.msup.com.cn/teacher/8694' },
    { title: { zh: 'DIA 2023 分享', en: 'DIA 2023 talk' }, src: 'DIA 2023', year: '2023', url: 'https://meia.me/course/170613?p=8432' },
    { title: { zh: 'OPPO 开发者大会', en: 'OPPO Developer Conference' }, src: 'ODC', year: '', url: 'case.html?case=industry' }
  ];

  function renderWork() {
    var list = $('#workList');
    if (!list) return;
    var view = '<span class="cover-link">' + esc(t('viewCase')) + ' <span class="arr">↗</span></span>';
    var feature = '', splits = '', cards = '', dark = '';
    cases.forEach(function (item, i) {
      var c = item[lang];
      var href = 'case.html?case=' + item.slug;
      var kicker = '<p class="cover-kicker">' + esc(item.date) + '</p>';
      var media = '<div class="cover-media"><img src="' + esc(item.image) + '" alt="' + esc(c.title) + '" loading="lazy"></div>';
      if (item.cover === 'feature') {
        feature = '<a class="cover cover-feature" href="' + href + '"><div class="cover-body">' + kicker +
          '<h3>' + esc(c.title) + '</h3><p class="cover-desc">' + esc(c.overview) + '</p>' + view +
          '</div>' + media + '</a>';
      } else if (item.cover === 'split') {
        var flip = (i === 2) ? ' flip' : '';
        splits += '<a class="cover cover-split' + flip + '" href="' + href + '"><div class="cover-title-col">' + kicker +
          '<h3>' + esc(c.title) + '</h3></div>' + media +
          '<div class="cover-details"><p class="cover-desc">' + esc(c.overview) + '</p>' + view + '</div></a>';
      } else if (item.cover === 'dark') {
        dark = '<a class="cover cover-dark" href="' + href + '"><div class="cover-body">' + kicker +
          '<h3>' + esc(c.title) + '</h3><p class="cover-desc">' + esc(c.overview) + '</p>' + view +
          '</div>' + media + '</a>';
      } else {
        cards += '<a class="cover cover-card" href="' + href + '">' + media + '<div class="cover-body">' + kicker +
          '<h3>' + esc(c.title) + '</h3><p class="cover-desc">' + esc(c.overview) + '</p>' + view + '</div></a>';
      }
    });
    list.innerHTML = feature + splits + '<div class="work-grid">' + cards + '</div>' + dark;
  }

  function renderDoing() {
    var el = $('#doingList');
    if (!el) return;
    el.innerHTML = DOING.map(function (d, i) {
      return '<li><span class="n">0' + (i + 1) + '</span><div><b>' + esc(loc(d.t)) + '</b><br><span>' + esc(loc(d.d)) + '</span></div></li>';
    }).join('');
  }

  function renderAI() {
    var el = $('#aiRows');
    if (!el) return;
    el.innerHTML = AI_ROWS.map(function (row, i) {
      var flip = (i % 2 === 1) ? ' flip' : '';
      return '<div class="ai-row' + flip + '"><div class="ai-title-col"><h3>' + esc(loc(row.title)) + '</h3></div>' +
        '<div class="ai-media"><img src="' + esc(row.img) + '" alt="' + esc(loc(row.cap)) + '" loading="lazy"></div>' +
        '<div class="ai-details"><p>' + esc(loc(row.desc)) + '</p></div></div>';
    }).join('');
  }

  function renderInfluence() {
    var el = $('#influenceList');
    if (!el) return;
    el.innerHTML = INFLUENCE.map(function (row) {
      var ext = row.url.indexOf('http') === 0;
      return '<a class="influence-row" href="' + esc(row.url) + '"' + (ext ? ' target="_blank" rel="noopener"' : '') + '>' +
        '<b>' + esc(loc(row.title)) + '</b><span class="src">' + esc(row.src) + '</span><span class="yr">' + esc(row.year) + '</span><span class="arr">↗</span></a>';
    }).join('');
  }

  function renderDetail() {
    var root = $('#detailRoot');
    if (!root) return;
    var slug = '';
    try { slug = new URLSearchParams(window.location.search).get('case') || ''; } catch (e) { slug = ''; }
    var idx = 0;
    cases.forEach(function (item, i) { if (item.slug === slug) idx = i; });
    var item = cases[idx];
    if (!item) { root.innerHTML = '<p>Case not found.</p>'; return; }
    var c = item[lang];
    document.title = c.title + ' — Michael Mu · 牟伟成';
    var next = cases[(idx + 1) % cases.length];
    var nc = next[lang];

    var visuals = '';
    if (item.layout === 'phones') {
      var phones = item.slides.slice(1, 4).map(function (s) {
        return '<figure><div class="phone phone-sm"><div class="phone-screen"><img src="' + esc(s.src) + '" alt="' + esc(s.caption || '') + '"></div><div class="phone-notch"></div></div>' +
          (s.caption ? '<figcaption>' + esc(s.caption) + '</figcaption>' : '') + '</figure>';
      }).join('');
      visuals = '<div class="phones">' + phones + '</div>' +
        '<div class="flow"><figure><img src="' + esc(item.image) + '" alt="' + esc(c.title) + '"><figcaption>' + esc(c.imageCaption) + '</figcaption></figure></div>';
    } else if (item.layout === 'multi') {
      var figs = [{ src: item.image, caption: c.imageCaption, wide: true }]
        .concat(item.slides.slice(1).map(function (s) { return { src: s.src, caption: s.caption || '', wide: false }; }));
      visuals = '<div class="flow-grid">' + figs.map(function (f) {
        return '<figure' + (f.wide ? ' class="wide"' : '') + '><img src="' + esc(f.src) + '" alt=""><figcaption>' + esc(f.caption) + '</figcaption></figure>';
      }).join('') + '</div>';
    } else {
      visuals = '<div class="flow">' + item.slides.map(function (s, i) {
        var cap = s.caption || (i === 0 ? c.imageCaption : '');
        return '<figure><img src="' + esc(s.src) + '" alt=""><figcaption>' + esc(cap) + '</figcaption></figure>';
      }).join('') + '</div>';
    }

    var links = (item.links || []).map(function (l) {
      return '<a class="btn btn-ghost btn-sm" href="' + esc(l[1]) + '" target="_blank" rel="noopener">' + esc(l[0]) + ' ↗</a>';
    }).join('');

    root.innerHTML =
      '<a class="back-link" href="./index.html#work">← ' + esc(t('backLink')) + '</a>' +
      '<p class="detail-kicker">' + esc(item.date) + ' · ' + esc(t('caseWord')) + '</p>' +
      '<h1>' + esc(c.title) + '</h1>' +
      '<p class="detail-lede">' + esc(c.overview) + '</p>' +
      '<dl class="detail-meta"><div><dt>' + esc(t('roleH')) + '</dt><dd>' + esc(c.role || '') + '</dd></div>' +
      '<div><dt>' + esc(t('dateH')) + '</dt><dd>' + esc(item.date) + '</dd></div></dl>' +
      (links ? '<div class="detail-links">' + links + '</div>' : '') +
      visuals +
      (c.process && c.process.length ? '<div class="detail-section"><h2>' + esc(t('processH')) + '</h2><ul>' +
        c.process.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul></div>' : '') +
      (c.result ? '<div class="detail-section"><h2>' + esc(t('resultH')) + '</h2><p>' + esc(c.result) + '</p></div>' : '') +
      '<a class="next-case" href="case.html?case=' + next.slug + '"><div><span>' + esc(t('nextLabel')) + '</span><br><b>' + esc(nc.title) + '</b></div><span class="arr">→</span></a>';
  }

  function armReveal() {
    var els = $$('.cover, .ai-row, .big-card, .influence-row, .sec-head, .about-grid');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.08 });
    els.forEach(function (el) { el.classList.add('reveal'); io.observe(el); });
  }

  function applyLang() {
    document.documentElement.lang = lang;
    $$('[data-i18n]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n'));
      if (v) el.innerHTML = v;
    });
    var tg = $('#langToggle');
    if (tg) tg.textContent = (lang === 'en') ? '中文' : 'EN';
    renderWork(); renderDoing(); renderAI(); renderInfluence(); renderDetail();
    armReveal();
  }

  var tg = $('#langToggle');
  if (tg) tg.addEventListener('click', function () {
    lang = (lang === 'en') ? 'zh' : 'en';
    try { window.localStorage.setItem('v2-lang', lang); } catch (e) {}
    applyLang();
  });
  applyLang();
})();
