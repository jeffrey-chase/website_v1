$(() => {
  let header = $('header');
  let start = header[0].getBoundingClientRect().bottom;

  $(window).scroll(() => {
    parallax(header, start);
  })

  $('.navbutton').click(() => {
    $('nav ul, .navbutton').toggleClass('show');
  });

  function parallax(el, start) {
    if ($(window).width() < 801) {
      return false;
    }
    let max = $(window).height() - start - $('footer').outerHeight();
    let bottom = $(document.body).height();
    let maxScroll = bottom - $(window).height();
    $(el).css('transform', 'translateY(' + ((window.scrollY / maxScroll) * max * 0.4) + 'px)');
  }
})
