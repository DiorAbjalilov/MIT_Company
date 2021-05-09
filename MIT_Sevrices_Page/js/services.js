var swiper_servises = new Swiper("#services .mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: "#services .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: "#services .swiper-button-next",
    prevEl: "#services .swiper-button-prev",
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});

document
  .querySelector("#services .mySwiper")
  .addEventListener("mousemove", () => swiper_servises.autoplay.stop());

document
  .querySelector("#services .mySwiper")
  .addEventListener("mouseout", () => swiper_servises.autoplay.start());

document.querySelectorAll("#services .swiper-slide button").forEach((item) => {
  item.addEventListener("click", (e) => {
    const modal = document.querySelector("#services #modal");
    modal.style.cssText = `
        opacity:1;
        transform: translate(-50%, -50%) scale(.8);
        -webkit-transform: translate(-50%, -50%) scale(.8);
        -moz-transform: translate(-50%, -50%) scale(.8);
        -ms-transform: translate(-50%, -50%) scale(.8);
        -o-transform: translate(-50%, -50%) scale(.8);
        `;
    modalInfoAdd(data[e.target.getAttribute("data-mod")], modal);
  });
});

const modalInfoAdd = ({ img_url, info }, modal) => {
  modal.querySelector("img").src = img_url;
  modal.querySelector("p").innerText = info;
};

const closeModalFunc = () => {
  const modal = document.querySelector("#services #modal");
  swiper_servises.autoplay.start();
  modal.style.cssText = `
        opacity:0;
        transform: translate(-50%, -50%) scale(0);
        -webkit-transform: translate(-50%, -50%) scale(0);
        -moz-transform: translate(-50%, -50%) scale(0);
        -ms-transform: translate(-50%, -50%) scale(0);
        -o-transform: translate(-50%, -50%) scale(0);
        `;
};

document.querySelector("#services #modal").onmousemove = () =>
  swiper_servises.autoplay.stop();
