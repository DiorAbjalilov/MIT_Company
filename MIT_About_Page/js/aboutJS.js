//  Initialize Swiper
let swiper_about = new Swiper("#body_wrap .mySwiper", {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: "#body_wrap .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: "#body_wrap .swiper-button-next",
    prevEl: "#body_wrap .swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    769: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

document
  .querySelector("#body_wrap .mySwiper")
  .addEventListener("mousemove", () => {
    swiper_about.autoplay.stop();
  });
document
  .querySelector("#body_wrap .mySwiper")
  .addEventListener("mouseout", () => {
    swiper_about.autoplay.start();
  });
