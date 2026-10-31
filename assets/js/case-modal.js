/* Reviewed case copy lives in case-content.js. One compact page per case. */
(function () {
  'use strict';
  const cases = window.PORTFOLIO_CASES;
  let language = document.documentElement.lang.startsWith('zh') ? 'zh' : 'en';
  let opener;
  const modal = document.createElement('div');
  modal.className = 'case-modal'; modal.hidden = true;
  modal.innerHTML = '<div class="case-backdrop" data-close></div><div class="case-panel" role="dialog" aria-modal="true" aria-labelledby="case-heading" tabindex="-1"><button class="case-close" data-close type="button" aria-label="Close / 关闭">×</button><div class="case-body"><p class="case-tag"></p><h3 class="case-title" id="case-heading"></h3><dl class="case-meta"></dl><p class="case-overview"></p><h4 class="process-heading"></h4><ul class="case-process"></ul><h4 class="result-heading"></h4><p class="case-result"></p><div class="case-links"></div></div></div>';
  document.body.appendChild(modal);
  const $ = s => modal.querySelector(s);
  function cards() {
    document.querySelectorAll('[data-case-title]').forEach(el => el.textContent = cases[el.dataset.caseTitle][language].title);
    document.querySelectorAll('[data-case-summary]').forEach(el => el.textContent = cases[el.dataset.caseSummary][language].overview);
  }
  function open(index, anchor) {
    opener = anchor;
    const item = cases[index], c = item[language], zh = language === 'zh';
    $('.case-tag').textContent = '0'+(index+1)+' / '+(zh ? '精选实践' : 'SELECTED PRACTICE');
    $('.case-title').textContent = c.title;
    $('.case-meta').replaceChildren();
    [[zh?'本人职责':'MY ROLE',c.role],[zh?'阶段':'PERIOD',item.date]].forEach(([label,value])=>{
      const div=document.createElement('div'),dt=document.createElement('dt'),dd=document.createElement('dd');
      dt.textContent=label;dd.textContent=value;div.append(dt,dd);$('.case-meta').append(div);
    });
    $('.case-overview').textContent=c.overview;
    $('.process-heading').textContent=zh?'关键判断与做法':'Decisions & approach';
    $('.case-process').replaceChildren(...c.process.map(text=>{const li=document.createElement('li');li.textContent=text;return li;}));
    $('.result-heading').textContent=zh?'交付与阶段结果':'Delivery & current outcomes';
    $('.case-result').textContent=c.result;
    $('.case-links').replaceChildren(...item.links.map(([label,url])=>{const a=document.createElement('a');a.textContent=label+' ↗';a.href=url;a.target='_blank';a.rel='noopener noreferrer';return a;}));
    modal.hidden=false;document.body.style.overflow='hidden';modal.scrollTop=0;$('.case-close').focus();
  }
  function close(){modal.hidden=true;document.body.style.overflow='';if(opener)opener.focus();}
  document.querySelectorAll('[data-case]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();open(Number(a.dataset.case),a);}));
  modal.querySelectorAll('[data-close]').forEach(el=>el.addEventListener('click',close));
  document.addEventListener('keydown',e=>{
    if(modal.hidden)return;
    if(e.key==='Escape')close();
    if(e.key==='Tab'){
      const els=Array.from(modal.querySelectorAll('button,a[href]')),first=els[0],last=els[els.length-1];
      if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
      else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
    }
  });
  document.addEventListener('portfolio-language',e=>{language=e.detail;cards();});
  cards();
})();

