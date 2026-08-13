(function(){
  var btn=document.getElementById('menuBtn');
  var nav=document.getElementById('mobNav');
  if(!btn||!nav) return;
  btn.addEventListener('click',function(){
    var open=nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open?'true':'false');
  });
})();
