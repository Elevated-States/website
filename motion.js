/* ============================================================
   ELEVATED STATES — motion layer (behaviour)
   - reveals section content as it scrolls into view (once)
   - counts up any element with data-count when it appears
   - grows leaderboard bars when the board appears (and again when it re-renders)
   - builds a twinkling starfield inside any .starfield container
   Off entirely under prefers-reduced-motion or without IntersectionObserver.
   ============================================================ */
(function(){
  var reduced=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var ok=!reduced && "IntersectionObserver" in window;
  if(ok) document.documentElement.classList.add("js-motion");

  // ---- starfields (run even when reduced: static stars, no animation via CSS) ----
  document.querySelectorAll(".starfield").forEach(function(sf){
    if(sf.children.length)return;
    var n=parseInt(sf.getAttribute("data-stars")||"80",10);
    for(var i=0;i<n;i++){
      var s=document.createElement("i");
      if(Math.random()<.14)s.className="big";
      s.style.left=(Math.random()*100).toFixed(2)+"%"; s.style.top=(Math.random()*85).toFixed(2)+"%";
      s.style.setProperty("--d",(3+Math.random()*5).toFixed(2)+"s");
      s.style.setProperty("--o",(-Math.random()*8).toFixed(2)+"s");
      sf.appendChild(s);
    }
  });

  if(!ok)return;

  // ---- reveal targets: direct children of each section's .wrap (or the section itself) ----
  var targets=[];
  document.querySelectorAll("section, .feature, .why, footer").forEach(function(sec){
    if(sec.closest(".hero"))return;
    var wrap=sec.querySelector(":scope > .wrap")||sec;
    var kids=Array.prototype.slice.call(wrap.children).filter(function(k){return k.tagName!=="SCRIPT"&&k.tagName!=="STYLE"&&!k.hasAttribute("data-no-reveal");});
    kids.forEach(function(k,i){
      // grids: stagger their children instead of the grid as one block
      var cs=getComputedStyle(k);
      if((cs.display==="grid"||cs.display==="flex")&&k.children.length>1&&k.children.length<=8&&!k.matches("form,.row,.form-row,.orn,.orn2,.btns")){
        Array.prototype.forEach.call(k.children,function(c,j){ c.setAttribute("data-reveal",""); c.style.setProperty("--rd",(Math.min(j,5)*0.08)+"s"); targets.push(c); });
      }else{
        k.setAttribute("data-reveal",""); k.style.setProperty("--rd",(Math.min(i,3)*0.06)+"s"); targets.push(k);
      }
    });
  });
  document.querySelectorAll("[data-reveal]").forEach(function(el){ if(targets.indexOf(el)<0)targets.push(el); });

  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(!en.isIntersecting)return;
      var el=en.target; el.classList.add("in"); io.unobserve(el);
      el.querySelectorAll("[data-count]").forEach(countUp);
      if(el.hasAttribute("data-count"))countUp(el);
    });
  },{threshold:0.08});
  // standalone counters (e.g. hero stats) are observed too, even outside reveal targets
  var counters=Array.prototype.slice.call(document.querySelectorAll("[data-count]")).filter(function(c){ return !c.closest("[data-reveal]"); });
  var observed=targets.concat(counters);
  observed.forEach(function(t){ io.observe(t); });
  // anything already on screen at load shows immediately (no pop-in above the fold)
  requestAnimationFrame(function(){ observed.forEach(function(t){ var r=t.getBoundingClientRect(); if(r.top<window.innerHeight*0.9&&r.bottom>0){ t.classList.add("in"); io.unobserve(t); t.querySelectorAll("[data-count]").forEach(countUp); if(t.hasAttribute("data-count"))countUp(t); } }); });
  // belt and braces: at the very bottom of the page, nothing may stay hidden
  window.addEventListener("scroll",function(){ if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-2){ targets.forEach(function(t){ t.classList.add("in"); }); } },{passive:true});

  // ---- count-up ----
  function countUp(el){
    if(el.__counted)return; el.__counted=true;
    var target=parseFloat(el.getAttribute("data-count")), dur=1300, t0=null;
    var prefix=el.getAttribute("data-prefix")||"", suffix=el.getAttribute("data-suffix")||"";
    var decimals=(String(target).split(".")[1]||"").length;
    function fmt(v){ return prefix+(decimals?v.toFixed(decimals):Math.round(v).toLocaleString())+suffix; }
    function frame(ts){
      if(t0===null)t0=ts;
      var p=Math.min(1,(ts-t0)/dur), e=1-Math.pow(1-p,3);   // ease-out cubic
      el.textContent=fmt(target*e);
      if(p<1)requestAnimationFrame(frame); else el.textContent=fmt(target);
    }
    requestAnimationFrame(frame);
  }

  // ---- leaderboard bars: grow when visible; re-grow when the board re-renders ----
  var lb=document.getElementById("lb");
  if(lb){
    function armBars(){
      lb.classList.remove("in");
      Array.prototype.forEach.call(lb.querySelectorAll(".lbbarfill"),function(b,i){ b.style.setProperty("--bd",(Math.min(i,24)*0.025)+"s"); });
      requestAnimationFrame(function(){ requestAnimationFrame(function(){ var r=lb.getBoundingClientRect(); if(r.top<window.innerHeight&&r.bottom>0)lb.classList.add("in"); else lbIO.observe(lb); }); });
    }
    var lbIO=new IntersectionObserver(function(en){ if(en[0].isIntersecting){ lb.classList.add("in"); lbIO.unobserve(lb); } },{threshold:0.1});
    new MutationObserver(function(){ armBars(); }).observe(lb,{childList:true});
    armBars();
  }
})();
