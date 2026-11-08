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
<a href="case.html?id=3" class="project ai"><div class="project-head"><div>${title(2,lang()==='zh'?'从一个想法，<br>到一次真实交互。':'From an idea<br>to a real interaction.')}</div><div>${desc(2)}${entry()}</div></div><div class="phones"><div class="phone"><small>9:41　 ···</small><h4>留住<br>此刻的想法。</h4><div class="ui-block">语音记录<br>━━━━ ━━ ━━━━━<br>正在聆听…</div><div class="ui-lines"></div><div class="ui-action">结束记录</div></div><div class="phone"><small>我的记忆 / MEMORY</small><h4>想法有了<br>自己的脉络。</h4><div class="ui-block">今天的记录<br>项目 · 灵感 · 生活</div><div class="ui-lines"></div><div class="ui-block">每一次记录，都有所连接。</div><div class="ui-action">查看记忆</div></div><div class="phone"><small>探索 / EXPLORE</small><h4>让记忆，<br>回应当下。</h4><div class="ui-block">从记录中寻找线索<br>关联想法，形成新的视角。</div><div class="ui-lines"></div><div class="ui-action">开始探索</div></div></div><p class="prototype-note">三屏交互结构示意 · 用于本轮封面形式验证，非已上线产品界面</p></a>
<div class="compact-grid wrap" aria-label="更多作品案例"><a href="case.html?id=4" class="project compact-card"><div class="compact-media">${image(3)}</div><div class="compact-body">${meta(3)}<h3>${esc(copy(3).title)}</h3><p>${esc(copy(3).overview)}</p>${entry()}</div></a><a href="case.html?id=5" class="project compact-card"><div class="compact-media">${image(4)}</div><div class="compact-body">${meta(4)}<h3>${esc(copy(4).title)}</h3><p>${esc(copy(4).overview)}</p>${entry()}</div></a><a href="case.html?id=6" class="project compact-card"><div class="compact-media">${image(5)}</div><div class="compact-body">${meta(5)}<h3>${esc(copy(5).title)}</h3><p>${esc(copy(5).overview)}</p>${entry()}</div></a></div>`;}
window.addEventListener('portfolio-language',renderWork);renderWork();window.PortfolioI18N.apply();
