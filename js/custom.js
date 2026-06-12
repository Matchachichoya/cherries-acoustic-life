document.addEventListener("DOMContentLoaded", function () {

  const swiper = new Swiper(".main-swiper", {
    slidesPerView: 3,
    spaceBetween: 80,
    speed: 700,
    loop: true,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },

    navigation: {
      nextEl: ".icon-arrow-right",
      prevEl: ".icon-arrow-left"
    },

    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 80
      }
    }
  });

});
