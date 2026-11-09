// landing-page-design B7 + B11: scroll reveals and tagline word reveals.
// Reveal once when an element enters the viewport (IntersectionObserver).
// Taglines split into words (English) or characters (Chinese) and activate
// one at a time from a muted tone to full color. Re-splits after a language
// change; new elements rendered by work.js are picked up by MutationObserver.
(function(){
  var seen=new WeakSet();
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}
    });
  },{threshold:0.2});
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
})();
