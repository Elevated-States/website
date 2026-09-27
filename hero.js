/* ============================================================
   HOMEPAGE HERO — thirty years of states rising
   Draws the US from the same topojson the Atlas uses and replays
   each state's real milestones (medical cannabis → adult-use →
   psychedelic reform) from 1996 to today on a slow loop.
   Everything reads from atlas-data.js; nothing here is invented.
   Respects prefers-reduced-motion (shows today's map, no loop).
   ============================================================ */
(function(){
  var hero=document.getElementById("hero"), svgEl=document.getElementById("heromap"), sf=document.getElementById("starfield"), yrEl=document.getElementById("heroyr");
  if(!hero||!svgEl||typeof d3==="undefined"||typeof STATES==="undefined")return;
  var reduced=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---- starfield ----
  if(sf){
    var n=reduced?40:(window.innerWidth<700?45:90);
    for(var i=0;i<n;i++){
      var s=document.createElement("i");
      s.style.left=(Math.random()*100)+"%"; s.style.top=(Math.random()*78)+"%";
      var sz=Math.random()<.15?3:2; s.style.width=s.style.height=sz+"px";
      s.style.setProperty("--d",(3+Math.random()*5).toFixed(2)+"s");
      s.style.setProperty("--o",(-Math.random()*8).toFixed(2)+"s");
      sf.appendChild(s);
    }
  }

  // ---- map ----
  var svg=d3.select(svgEl);
  var COL={none:"rgba(255,255,255,.035)",med:"rgba(217,178,106,.30)",rec:"rgba(217,178,106,.62)",psi:"rgba(247,240,228,.92)"};
  var FLASH="rgba(255,236,190,1)";
  var Y0=1996, Y1=new Date().getFullYear();

  function levelAt(d,y){
    if(d.psiY&&y>=d.psiY&&d.psi!=="none")return "psi";
    if(d.recY&&y>=d.recY)return "rec";
    if(d.medY&&y>=d.medY)return "med";
    return "none";
  }

  d3.json("https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json").then(function(us){
    var feats=topojson.feature(us,us.objects.states).features.filter(function(f){return STATES[f.properties.name];});
    var fc={type:"FeatureCollection",features:feats};
    var proj=d3.geoAlbersUsa(), path=d3.geoPath(proj), paths;
    function layout(){
      var W=hero.clientWidth,H=hero.clientHeight;
      svg.attr("viewBox","0 0 "+W+" "+H);
      // wide and low, so the title floats over the northern states rather than covering the middle
      var narrow=W<700;
      proj.fitExtent(narrow?[[-W*0.25,H*0.30],[W*1.25,H*1.05]]:[[W*0.06,H*0.16],[W*0.94,H*1.02]],fc);
      paths=svg.selectAll("path").data(feats).join("path").attr("class","state").attr("d",path);
    }
    layout();

    var prev={};
    function paint(y,instant){
      if(yrEl)yrEl.textContent=y;
      paths.each(function(f){
        var d=STATES[f.properties.name], lv=levelAt(d,y), el=d3.select(this), key=f.properties.name;
        if(prev[key]===lv)return;
        prev[key]=lv;
        if(instant||reduced){ el.style("fill",COL[lv]); return; }
        el.style("transition","none").style("fill",lv==="none"?COL.none:FLASH);
        requestAnimationFrame(function(){ el.style("transition","fill 1.1s ease").style("fill",COL[lv]); });
      });
    }

    if(reduced){ paint(Y1,true); return; }

    var y=Y0, running=true; paint(y,true);
    // pause the loop when the hero is off-screen — no work for nothing
    if("IntersectionObserver" in window){
      new IntersectionObserver(function(en){ running=en[0].isIntersecting; },{threshold:0.05}).observe(hero);
    }
    function step(){
      if(!running){ setTimeout(step,600); return; }
      y++;
      if(y>Y1){
        setTimeout(function(){
          svg.style("transition","opacity .9s ease").style("opacity",0);
          setTimeout(function(){ prev={}; y=Y0; paint(y,true); svg.style("opacity",1); setTimeout(step,900); },950);
        },4000);
        return;
      }
      paint(y,false);
      setTimeout(step,(y>=2012&&y<=2024)?620:380);   // linger through the busy years
    }
    setTimeout(step,1400);

    var rt; window.addEventListener("resize",function(){ clearTimeout(rt); rt=setTimeout(function(){ layout(); paths.each(function(f){ d3.select(this).style("fill",COL[prev[f.properties.name]||"none"]); }); },150); });
  }).catch(function(){ /* no map, no problem — the hero still reads fine */ });
})();
