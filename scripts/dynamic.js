(function () {
  window.addEventListener('load', function () {
    let header = document.querySelector('header');
    let start = parseFloat(header.getBoundingClientRect().bottom);

    window.addEventListener('scroll', function () {
      parallax(header, start);
    });
    
    document.querySelector('.navbutton').addEventListener('click', ()=>{
      document.querySelector('nav ul').classList.toggle('show');
    });
  });

  let parallax = (el, start) => {
    if (window.innerWidth < 810){
      return false;
    }
    let max = parseFloat(window.innerHeight) - start  - 
        document.querySelector('footer').getBoundingClientRect().height;
    let bottom = document.body.getBoundingClientRect().height;
    let maxScroll = bottom - window.innerHeight;
    let scrollLeft = parseFloat(window.scrollY) + window.innerHeight - bottom;

    el.style.transform = "translateY(" + ((scrollY / maxScroll) * max * 0.2) + "px)";
  }
})();
