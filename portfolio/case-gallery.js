(() => {
  let imagePreview;
  document.addEventListener('click', event => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target.closest('a[data-case-image-preview]');
    if (!link || typeof HTMLDialogElement === 'undefined') return;

    if (!imagePreview) {
      imagePreview = document.createElement('dialog');
      imagePreview.className = 'case-image-preview';
      imagePreview.setAttribute('aria-label', '原图预览');
      imagePreview.innerHTML = '<img alt=""><form method="dialog"><button type="submit" autofocus aria-label="关闭原图预览">×</button></form>';
      imagePreview.addEventListener('click', event => {
        if (event.target === imagePreview) imagePreview.close();
      });
      document.body.append(imagePreview);
    }

    event.preventDefault();
    const image = imagePreview.querySelector('img');
    image.alt = link.querySelector('img').alt;
    image.src = link.href;
    imagePreview.showModal();
  });

  function updateComparison(event) {
    const input = event.target;
    if (!(input instanceof HTMLInputElement) || !input.matches('.case-before-after input[type="range"]')) return;
    input.closest('.case-before-after-panel')?.querySelector('.case-before-after-view')
      ?.style.setProperty('--comparison-split', `${input.value}%`);
  }

  document.addEventListener('input', updateComparison);
  document.addEventListener('change', updateComparison);
  document.addEventListener('change', event => {
    const input = event.target;
    if (!(input instanceof HTMLInputElement) || !input.matches('.case-before-after-scenes input:checked')) return;
    const activePanel = input.getAttribute('aria-controls');
    input.closest('.case-before-after').querySelectorAll('.case-before-after-panel').forEach(panel => {
      panel.hidden = panel.id !== activePanel;
    });
    input.nextElementSibling?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  });

  function mount(gallery) {
    const track = gallery.querySelector('.case-gallery-track');
    const caption = gallery.querySelector('.case-gallery-caption');
    if (!track || !caption) return;

    const cards = Array.from(track.children);
    let active = 1;
    let dragStart;
    let suppressClick = false;
    let lastWheelChange = -Infinity;

    function select(index) {
      active = Math.max(0, Math.min(cards.length - 1, index));
      cards.forEach((card, position) => {
        const offset = position - active;
        const distance = Math.abs(offset);
        const side = Math.sign(offset);
        const spread = distance ? 25 + 14 * (1 - 0.5 ** (distance - 1)) : 0;
        card.style.setProperty('--slide-shift', `${side * spread}cqw`);
        card.style.setProperty('--slide-angle', `${-side * Math.min(46, 29 + 5 * distance)}deg`);
        card.style.setProperty('--slide-scale-x', String(distance ? Math.max(.24, .61 - .12 * distance) : 1));
        card.style.setProperty('--slide-scale-y', String(Math.max(.68, 1 - .085 * distance)));
        card.style.setProperty('--slide-depth', String(cards.length - distance));
        card.style.setProperty('--slide-opacity', String(Math.max(.45, 1 - .16 * distance)));
        const link = card.querySelector('a');
        if (offset === 0) link.setAttribute('aria-current', 'true');
        else link.removeAttribute('aria-current');
      });
      caption.textContent = cards[active].querySelector('figcaption')?.textContent ?? '';
    }

    track.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      select(active + (event.key === 'ArrowLeft' ? -1 : 1));
    });
    track.addEventListener('wheel', event => {
      if (Math.abs(event.deltaX) <= Math.abs(event.deltaY) || Math.abs(event.deltaX) < 8) return;
      event.preventDefault();
      if (event.timeStamp - lastWheelChange < 350) return;
      lastWheelChange = event.timeStamp;
      select(active + Math.sign(event.deltaX));
    }, { passive: false });
    track.addEventListener('pointerdown', event => {
      if (!event.isPrimary || event.button !== 0) return;
      dragStart = event.clientX;
      suppressClick = false;
    });
    track.addEventListener('dragstart', event => event.preventDefault());
    track.addEventListener('pointercancel', () => { dragStart = undefined; });
    track.addEventListener('pointerup', event => {
      if (dragStart === undefined) return;
      const delta = event.clientX - dragStart;
      dragStart = undefined;
      if (Math.abs(delta) < 30) return;
      suppressClick = true;
      select(active + (delta < 0 ? 1 : -1));
    });
    track.addEventListener('click', event => {
      const slide = cards.indexOf(event.target.closest('li'));
      const fromSwipe = suppressClick && event.detail > 0;
      if (fromSwipe || (slide >= 0 && slide !== active)) event.preventDefault();
      if (!fromSwipe && slide >= 0 && slide !== active) select(slide);
      suppressClick = false;
    });

    select(active);
    caption.hidden = false;
    gallery.classList.add('case-gallery--stacked');
  }

  function mountNewGalleries() {
    document.querySelectorAll('.case-gallery--coverflow:not(.case-gallery--stacked)').forEach(mount);
  }

  mountNewGalleries();
  // Next.js can insert the case article during client-side navigation.
  new MutationObserver(mountNewGalleries).observe(document.body, { childList: true, subtree: true });
})();
