var swiper = new Swiper("#portfolio .mySwiper", {
  slidesPerView: 3,
  slidesPerColumn: 2,
  spaceBetween: 40,
  pagination: {
    el: "#portfolio .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: "#portfolio .swiper-button-next",
    prevEl: "#portfolio .swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerColumn: 2,
      spaceBetween: 10,
    },
    769: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 30,
    },
  },
});
$(document).on("click", "#portfolioFather", function () {
  $(this).removeClass("d-none");
  console.log(`ishladi`);
});
