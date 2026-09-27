/* Shared mobile menu. Adds a Menu button to any <nav> that has a .nav-links row. */
(function(){
  var nav=document.querySelector("nav");
  if(!nav)return;
  var links=nav.querySelector(".nav-links"), logo=nav.querySelector(".logo");
  if(!links||!logo)return;
  var btn=document.createElement("button");
  btn.className="navtoggle";btn.type="button";
  btn.setAttribute("aria-label","Open menu");btn.setAttribute("aria-expanded","false");
  btn.innerHTML='<span class="bars"><i></i><i></i><i></i></span>Menu';
  logo.parentNode.insertBefore(btn,links);
  function set(open){
    nav.classList.toggle("open",open);
    btn.setAttribute("aria-expanded",open?"true":"false");
    btn.setAttribute("aria-label",open?"Close menu":"Open menu");
  }
  btn.addEventListener("click",function(e){e.stopPropagation();set(!nav.classList.contains("open"));});
  links.addEventListener("click",function(e){if(e.target.tagName==="A")set(false);});
  document.addEventListener("click",function(e){if(nav.classList.contains("open")&&!nav.contains(e.target))set(false);});
  document.addEventListener("keydown",function(e){if(e.key==="Escape")set(false);});
  window.addEventListener("resize",function(){if(window.innerWidth>760)set(false);});
})();
