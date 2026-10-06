/* Live stat tiles. Counts come from atlas-data.js (STATES) so the home page and the Atlas
   never drift from the data. D.C. is excluded; the labels say "plus D.C." where it qualifies.
   An element with data-live="can|rsch|psi|psiLegal" gets its data-count set before motion.js counts it up. */
(function(){
  if(typeof STATES!=="object"||!STATES)return;
  var n={can:0,rsch:0,psi:0,psiLegal:0};
  Object.keys(STATES).forEach(function(k){
    if(k==="District of Columbia")return;
    var d=STATES[k]||{};
    if(d.can==="rec"||d.can==="med")n.can++;
    if(d.rsch==="active")n.rsch++;
    if(d.psi==="legal"){n.psi++;n.psiLegal++;}else if(d.psi==="decrim"){n.psi++;}
  });
  var els=document.querySelectorAll("[data-live]");
  for(var i=0;i<els.length;i++){var v=n[els[i].getAttribute("data-live")];if(typeof v==="number")els[i].setAttribute("data-count",String(v));}
})();
