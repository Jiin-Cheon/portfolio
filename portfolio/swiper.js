const swiper = new Swiper('.swiper', {

    direction: 'vertical',
    speed: 1000,
    mousewheel: true,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    simulateTouch: false
  });