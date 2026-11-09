// landing-page-design B7 + B11 and design-to-motion (website context):
// scroll reveals, tagline word reveals, hero appear, card intros and the
// phone loading intro. All play once, via IntersectionObserver. Stories
// after loading are deliberately NOT added: the skill asks the user first.
(function(){
  var seen=new WeakSet();
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}
    });
  },{threshold:0.2});
  var ioCard=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){e.target.classList.add('in');ioCard.unobserve(e.target);}
    });
  },{threshold:0.3});
  function splitTagline(el){
    if(!el||el.dataset.split==='1')return;
    var lines=el.innerHTML.split(/<br\s*\/?>/i);
    var idx=0;
    el.innerHTML=lines.map(function(line){
      var text=line.replace(/<[^>]+>/g,'');
      var isCJK=/[\u4e00-\u9fa5]/.test(text);
      var units=isCJK?Array.from(text):text.split(/\s+/).filter(Boolean);
      return units.map(function(u){
        return '<span class="tag-word" style="transition-delay:'+(idx++*50)+'ms">'+u+'</span>';
      }).join(isCJK?'':' ');
    }).join('<br>');
    el.dataset.split='1';
  }
  function watch(){
    document.querySelectorAll('.tagline,.reveal').forEach(function(el){
      if(seen.has(el))return;
      seen.add(el);
      if(el.classList.contains('tagline'))splitTagline(el);
      io.observe(el);
    });
    document.querySelectorAll('.card-intro,.phones').forEach(function(el){
      if(seen.has(el))return;
      seen.add(el);
      ioCard.observe(el);
    });
  }
  watch();
  var track=document.getElementById('tabTrack');
  if(track)new MutationObserver(watch).observe(track,{childList:true,subtree:true});
  addEventListener('portfolio-language',function(){
    // i18n applies after dispatching, so re-split on a microtask.
    queueMicrotask(function(){
      document.querySelectorAll('.tagline').forEach(function(el){
        delete el.dataset.split;
        splitTagline(el);
      });
      watch();
    });
  });
  // Hero appear (design-to-motion): the page opens plain; header, badge,
  // headline, buttons and proof rise 6px and resolve from 2px blur,
  // staggered, once. Double rAF so the initial state paints first.
  requestAnimationFrame(function(){
    requestAnimationFrame(function(){
      document.querySelectorAll('.hero-appear').forEach(function(el){
        el.classList.add('in');
      });
    });
  });
})();
