const aboutPanel=document.querySelector('[data-panel="about"]');
const story=document.querySelector('.intro-story');
const artStage=document.querySelector('.story-art');
const snapEnd=document.querySelector('.intro-snap-end');
const cover=document.querySelector('.story-cover');
const outcome=document.querySelector('.story-outcome');
const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)');
const clamp=value=>Math.max(0,Math.min(1,value));
const mix=(start,end,progress)=>start+(end-start)*progress;
function desktopStoryLayout(vw,vh){
  const contentWidth=vw>=1600?1400:vw>=1100?990:Math.min(vw-40,1080);
  const phoneWidth=Math.min(278,contentWidth*.3);
  const phoneHeight=Math.min(500,vh*.73);
  return {artHeight:vh-64,phoneWidth,phoneHeight,targetX:(vw-contentWidth)/2+contentWidth-phoneWidth-26,targetY:(vh-phoneHeight)/2,progressEnd:.72,borderRadius:38,borderWidth:8};
}
function mobileStoryLayout(vw,vh){
  const phoneWidth=Math.min(118,vw*.31);
  const phoneHeight=Math.min(218,vh*.28);
  return {artHeight:vh-98,phoneWidth,phoneHeight,targetX:vw-phoneWidth-18,targetY:18,progressEnd:.92,borderRadius:24,borderWidth:5};
}
let storyFrame=0;
function renderStory(){
  storyFrame=0;
  const vw=aboutPanel.clientWidth,vh=aboutPanel.clientHeight,mobile=vw<760;
  const layout=mobile?mobileStoryLayout(vw,vh):desktopStoryLayout(vw,vh);
  const english=document.documentElement.lang==='en';
  const range=Math.max(1,story.offsetHeight-vh);
  snapEnd.style.top=range*layout.progressEnd+'px';
  const snapRelease=Math.min(story.offsetHeight-12,aboutPanel.scrollHeight-aboutPanel.clientHeight-12);
  aboutPanel.classList.toggle('about-snapping',aboutPanel.scrollTop<snapRelease);
  const raw=clamp((aboutPanel.scrollTop-story.offsetTop)/range);
  const progress=reduceMotion.matches?(raw>.48?1:0):clamp(raw/layout.progressEnd);
  const eased=progress*progress*(3-2*progress);
  artStage.style.width=mix(vw,layout.phoneWidth,eased)+'px';
  artStage.style.height=mix(layout.artHeight,layout.phoneHeight,eased)+'px';
  artStage.style.left=mix(0,layout.targetX,eased)+'px';
  artStage.style.top=mix(0,layout.targetY,eased)+'px';
  artStage.style.borderRadius=mix(0,layout.borderRadius,eased)+'px';
  artStage.style.borderWidth=mix(0,layout.borderWidth,eased)+'px';
  artStage.style.setProperty('--message-size',mix(mobile?(english?28:38):(english?48:60),mobile?(english?15:20):(english?26:36),eased)+'px');
  artStage.querySelector('.story-portrait').style.opacity=String(1-clamp((progress-.12)/.58));
  cover.style.opacity=String(1-clamp((progress-.12)/.85));
  cover.style.transform='translateY('+mix(0,-vh*.7,clamp(progress/.82))+'px)';
  cover.style.pointerEvents=progress>.48?'none':'auto';
  outcome.style.opacity=String(clamp((progress-.42)/.4));
  outcome.style.transform='translateY('+mix(28,0,clamp((progress-.42)/.4))+'px)';
  outcome.style.pointerEvents=progress>.72?'auto':'none';
  artStage.querySelector('.device-top').style.opacity=String(clamp((progress-.55)/.35));
  artStage.querySelector('.device-caption').style.opacity=String(clamp((progress-.55)/.35));
}
function scheduleStory(){if(!storyFrame)storyFrame=requestAnimationFrame(renderStory)}
aboutPanel.addEventListener('scroll',scheduleStory,{passive:true});
addEventListener('resize',scheduleStory);
reduceMotion.addEventListener('change',scheduleStory);
addEventListener('portfolio-language',()=>queueMicrotask(scheduleStory));
renderStory();
