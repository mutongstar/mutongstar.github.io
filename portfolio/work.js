const cases=window.PORTFOLIO_CASES;
const lang=()=>window.PortfolioI18N.lang;
const copy=i=>cases[i][lang()];
const path=s=>s;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const image=i=>`<img src="${path(cases[i].image)}" alt="${esc(copy(i).imageCaption)}" loading="lazy">`;
const meta=i=>`<span class="meta">${String(i+1).padStart(2,'0')} / ${esc(lang()==='en'?cases[i].date.replace('至今 / Present','Present'):cases[i].date)}</span>`;
const entry=()=>`<span class="entry">${lang()==='zh'?'查看案例 ↗':'View case ↗'}</span>`;
const title=(i,t)=>`${meta(i)}<h3>${t||esc(copy(i).title)}</h3>`;
const desc=i=>`<p>${esc(copy(i).overview)}</p>`;
function renderWork(){document.querySelector('#projects').innerHTML=`
<a href="case.html?id=1" class="project system"><div class="project-head"><div>${title(0,lang()==='zh'?'让设计意图，<br>成为共同的语言。':'A shared language<br>for design.')}</div><div>${desc(0)}${entry()}</div></div><div class="wide-media">${image(0)}</div></a>
<a href="case.html?id=2" class="project split"><div>${title(1,lang()==='zh'?'系统之大，<br>体验入微。':'System scale.<br>Human detail.')}</div>${image(1)}<div class="right">${desc(1)}${entry()}</div></a>
<div class="compact-grid wrap" aria-label="更多作品案例"><a href="case.html?id=4" class="project compact-card"><div class="compact-media">${image(3)}</div><div class="compact-body">${meta(3)}<h3>${esc(copy(3).title)}</h3><p>${esc(copy(3).overview)}</p>${entry()}</div></a><a href="case.html?id=5" class="project compact-card"><div class="compact-media">${image(4)}</div><div class="compact-body">${meta(4)}<h3>${esc(copy(4).title)}</h3><p>${esc(copy(4).overview)}</p>${entry()}</div></a><a href="case.html?id=6" class="project compact-card"><div class="compact-media">${image(5)}</div><div class="compact-body">${meta(5)}<h3>${esc(copy(5).title)}</h3><p>${esc(copy(5).overview)}</p>${entry()}</div></a></div>`;}
function renderAiSummary(){const host=document.querySelector('#aiCaseSummary');if(!host)return;const c=copy(2);host.innerHTML=`<a class="ai-summary-card" href="case.html?id=3"><div class="ai-summary-copy">${meta(2)}<h3>${esc(c.title)}</h3>${desc(2)}<span class="entry">${lang()==='zh'?'阅读完整案例 ↗':'Read the full case ↗'}</span></div><div class="ai-summary-image">${image(2)}</div></a>`}
window.addEventListener('portfolio-language',()=>{renderWork();renderAiSummary()});renderWork();renderAiSummary();window.PortfolioI18N.apply();
