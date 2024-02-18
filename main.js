document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });


  window. onload = function () {
    window. addEventListener('scroll', function (e) {
      if (window.pageYOffset > 100) {
          document.querySelector("header"). classList.add('is-scrolling');
      } else {
           document. querySelector("header").classList. remove('is-scrolling');
      }
  });

    const menu_btn = document.querySelector('.hamburger');

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
    });
}
