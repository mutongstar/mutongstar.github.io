const tabNames=['about','ai','work','influence'];
const tabTrack=document.querySelector('#tabTrack');
const panels=tabNames.map(name=>document.querySelector('[data-panel="'+name+'"]'));
let activeTab='about';
function selectTab(name,{reset=false}={}){
  const next=tabNames.includes(name)?name:'about';
  const index=tabNames.indexOf(next);
  tabTrack.style.setProperty('--tab-index',index);
  panels.forEach((panel,n)=>{panel.inert=n!==index});
  document.querySelectorAll('[data-tab]').forEach(link=>{
    if(link.dataset.tab===next)link.setAttribute('aria-current','page');
    else link.removeAttribute('aria-current');
  });
  if(reset)panels[index].scrollTo({top:0,behavior:'smooth'});
  activeTab=next;
  document.title=(next==='about'?'Michael Mu':document.querySelector('[data-tab="'+next+'"] [data-i18n], [data-tab="'+next+'"][data-i18n]')?.textContent.trim()+' — Michael Mu');
}
function routeHash(){
  const hash=decodeURIComponent(location.hash.slice(1));
  const name=hash==='profile'?'about':hash==='home'?'about':hash;
  selectTab(name);
  if(hash==='profile'){
    const panel=panels[0],story=document.querySelector('.intro-story');
    requestAnimationFrame(()=>panel.scrollTo({top:(story.offsetHeight-panel.clientHeight)*.72,behavior:'smooth'}));
  }
}
document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',event=>{
  const hash=link.getAttribute('href').slice(1);
  if(!tabNames.includes(hash)&&hash!=='profile')return;
  if(hash===activeTab){event.preventDefault();panels[tabNames.indexOf(hash)].scrollTo({top:0,behavior:'smooth'});return}
  if(hash==='profile'&&activeTab==='about'){event.preventDefault();const panel=panels[0],story=document.querySelector('.intro-story');panel.scrollTo({top:(story.offsetHeight-panel.clientHeight)*.72,behavior:'smooth'});return}
}));
addEventListener('hashchange',routeHash);
addEventListener('portfolio-language',()=>queueMicrotask(()=>selectTab(activeTab)));
routeHash();
let startX=0,startY=0;
tabTrack.addEventListener('touchstart',event=>{startX=event.touches[0].clientX;startY=event.touches[0].clientY},{passive:true});
tabTrack.addEventListener('touchend',event=>{
  const dx=event.changedTouches[0].clientX-startX,dy=event.changedTouches[0].clientY-startY;
  if(Math.abs(dx)<65||Math.abs(dx)<Math.abs(dy)*1.3)return;
  const next=tabNames.indexOf(activeTab)+(dx<0?1:-1);
  if(next>=0&&next<tabNames.length)location.hash=tabNames[next];
},{passive:true});
