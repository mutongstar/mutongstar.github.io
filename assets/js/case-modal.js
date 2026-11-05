/* Case copy lives in case-content.js. Cards render from the same data:
   Figma website page "作品集 · 七张编辑式项目卡片" card N = PORTFOLIO_CASES[N-1].
   Per-card theme (dark|light) / size (feature|standard) come from the record.
   Modal slides: item.slides (URLs or {src, caption}); Figma 01-page
   1920x1080 slides map here in order under part 2. */
(function () {
  'use strict';
  const cases = window.PORTFOLIO_CASES;
  const list = document.getElementById('portfolioCards');
  let language = document.documentElement.lang.startsWith('zh') ? 'zh' : 'en';
  let opener, currentIndex = 0, slideIndex = 0, slides = [];
  const arrowSvg = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const closeSvg = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';

  const modal = document.createElement('div');
  modal.className = 'case-modal'; modal.hidden = true;
  modal.innerHTML =
    '<div class="case-backdrop" data-close></div>' +
    '<div class="case-panel" role="dialog" aria-modal="true" aria-labelledby="case-heading" tabindex="-1">' +
      '<button class="case-close" data-close type="button" aria-label="Close / 关闭">' + closeSvg + '</button>' +
      '<div class="case-carousel">' +
        '<div class="case-carousel-viewport"><img class="case-carousel-image" alt=""></div>' +
        '<button class="case-carousel-prev" type="button" aria-label="上一张 / Previous slide">‹</button>' +
        '<button class="case-carousel-next" type="button" aria-label="下一张 / Next slide">›</button>' +
        '<div class="case-carousel-bar"><span class="case-carousel-counter"></span><span class="case-carousel-dots"></span></div>' +
      '</div>' +
      '<p class="case-carousel-caption"></p>' +
      '<div class="case-body"><p class="case-tag"></p>' +
      '<h3 class="case-title" id="case-heading"></h3><dl class="case-meta"></dl>' +
      '<p class="case-overview"></p><h4 class="process-heading"></h4><ul class="case-process"></ul>' +
      '<h4 class="result-heading"></h4><p class="case-result"></p><div class="case-links"></div></div>' +
    '</div>';
  document.body.appendChild(modal);
  const $ = s => modal.querySelector(s);

  function esc(s) {
    return String(s).replace(/[&<>"']/g, c => (
      { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function renderCards() {
    if (!list) return;
    list.innerHTML = cases.map((item, i) => {
      const c = item[language];
      return '<li class="project-item active editorial-card theme-' + item.theme +
        ' size-' + item.size + '" data-case="' + i + '">' +
        '<a href="#case-' + (i + 1) + '">' +
        '<figure class="ed-card-media"><img src="' + esc(item.image) + '" alt="' +
        esc(c.imageCaption) + '" loading="lazy" decoding="async"></figure>' +
        '<div class="ed-card-text">' +
        '<p class="ed-card-index"><span class="ed-card-bar"></span>0' + (i + 1) + '</p>' +
        '<p class="ed-card-time">' + esc(item.date) + '</p>' +
        '<h3 class="ed-card-title">' + esc(c.title) + '</h3>' +
        '<p class="ed-card-desc">' + esc(c.overview) + '</p>' +
        '<span class="ed-card-arrow">' + arrowSvg + '</span>' +
        '</div></a></li>';
    }).join('');
  }

  function normalizeSlides(item, c) {
    const raw = (item.slides && item.slides.length) ? item.slides : [item.image];
    return raw.map((s, i) => typeof s === 'string'
      ? { src: s, caption: i === 0 ? c.imageCaption : '' }
      : { src: s.src, caption: s.caption || '' });
  }

  function renderSlide() {
    const s = slides[slideIndex];
    const img = $('.case-carousel-image');
    img.src = s.src;
    img.alt = s.caption || $('.case-title').textContent;
    $('.case-carousel-caption').textContent = s.caption || '';
    $('.case-carousel-caption').hidden = !s.caption;
    $('.case-carousel-counter').textContent = (slideIndex + 1) + ' / ' + slides.length;
    modal.querySelectorAll('.case-carousel-dot').forEach((d, i) => {
      d.classList.toggle('active', i === slideIndex);
      d.setAttribute('aria-label', language === 'zh' ? '第' + (i + 1) + '张' : 'Slide ' + (i + 1));
    });
    $('.case-carousel').classList.toggle('single', slides.length < 2);
  }

  function goSlide(delta) {
    if (slides.length < 2) return;
    slideIndex = (slideIndex + slides.length + delta) % slides.length;
    renderSlide();
  }

  function open(index, anchor) {
    opener = anchor; currentIndex = index; slideIndex = 0;
    const item = cases[index], c = item[language], zh = language === 'zh';
    slides = normalizeSlides(item, c);
    $('.case-tag').textContent = '0' + (index + 1) + ' / ' + (zh ? '精选实践' : 'SELECTED PRACTICE');
    $('.case-title').textContent = c.title;
    $('.case-carousel-dots').replaceChildren(...slides.map((_, i) => {
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'case-carousel-dot';
      b.addEventListener('click', () => { slideIndex = i; renderSlide(); });
      return b;
    }));
    renderSlide();
    $('.case-meta').replaceChildren();
    [[zh ? '本人职责' : 'MY ROLE', c.role], [zh ? '阶段' : 'PERIOD', item.date]].forEach(([label, value]) => {
      const div = document.createElement('div'), dt = document.createElement('dt'), dd = document.createElement('dd');
      dt.textContent = label; dd.textContent = value; div.append(dt, dd); $('.case-meta').append(div);
    });
    $('.case-overview').textContent = c.overview;
    $('.process-heading').textContent = zh ? '关键判断与做法' : 'Decisions & approach';
    $('.case-process').replaceChildren(...c.process.map(text => { const li = document.createElement('li'); li.textContent = text; return li; }));
    $('.result-heading').textContent = zh ? '交付与阶段结果' : 'Delivery & current outcomes';
    $('.case-result').textContent = c.result;
    $('.case-links').replaceChildren(...item.links.map(([label, url]) => { const a = document.createElement('a'); a.textContent = label + ' ↗'; a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer'; return a; }));
    modal.hidden = false; document.body.style.overflow = 'hidden'; modal.scrollTop = 0; $('.case-close').focus();
  }

  function close() {
    modal.hidden = true; document.body.style.overflow = '';
    if (opener) opener.focus();
  }

  if (list) list.addEventListener('click', e => {
    const a = e.target.closest('[data-case]');
    if (!a) return;
    e.preventDefault();
    open(Number(a.dataset.case), a);
  });
  modal.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', close));
  $('.case-carousel-prev').addEventListener('click', () => goSlide(-1));
  $('.case-carousel-next').addEventListener('click', () => goSlide(1));
  $('.case-carousel-image').addEventListener('click', () => {
    if (slides[slideIndex]) window.open(slides[slideIndex].src, '_blank', 'noopener');
  });
  let touchX = null;
  const viewport = $('.case-carousel-viewport');
  viewport.addEventListener('touchstart', e => { touchX = e.changedTouches[0].clientX; }, { passive: true });
  viewport.addEventListener('touchend', e => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) goSlide(dx < 0 ? 1 : -1);
    touchX = null;
  }, { passive: true });
  document.addEventListener('keydown', e => {
    if (modal.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') goSlide(-1);
    if (e.key === 'ArrowRight') goSlide(1);
    if (e.key === 'Tab') {
      const els = Array.from(modal.querySelectorAll('button,a[href]')), first = els[0], last = els[els.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  document.addEventListener('portfolio-language', e => { language = e.detail; renderCards(); });
  renderCards();
})();
