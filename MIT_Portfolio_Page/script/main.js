// var swiper = new Swiper(".mySwiper", {
//  slidesPerView: 3,
//  spaceBetween: 30,
//  slidesPerGroup: 1,
//  loop: true,
//  loopFillGroupWithBlank: true,
//  pagination: {
//    el: ".swiper-pagination",
//    clickable: true,
//  },

//  autoplay: {
//    delay: 2500,
//    disableOnInteraction: false,
//  },
// });
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
});

$(document).on("click", "#portfolioFather", function () {
  $(this).removeClass("d-none");
  console.log(`ishladi`);
});
