// jquery navbarni scroll bo'lganda o'zgartirish

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 1) {
    $("#home #navv").addClass("active shadow");
  } else {
    $("#home #navv").removeClass("active shadow");
  }
});

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $("#home .items>ul>li>a, #home .items>ul>li").addClass("rang");
  } else {
    $("#home .items>ul>li>a, #home .items>ul>li").removeClass("rang");
  }
});

// jqueyEnd

// next border start

window.addEventListener("scroll", () => {
  if (window.scrollY < 500) {
    document.querySelector(
      "#home  #navv ul li:nth-child(1)"
    ).style.borderBottom = "2px solid white";
  }

  if (window.scrollY >= 500 && window.scrollY <= 900) {
    document.querySelector(
      "#home  #navv ul li:nth-child(2)"
    ).style.borderBottom = "2px solid #009899";
  } else {
    document.querySelector(
      "#home  #navv ul li:nth-child(2)"
    ).style.borderBottom = "none";
  }

  if (window.scrollY > 900 && window.scrollY < 1300) {
    document.querySelector(
      "#home  #navv ul li:nth-child(3)"
    ).style.borderBottom = "2px solid #009899";
  } else {
    document.querySelector(
      "#home  #navv ul li:nth-child(3)"
    ).style.borderBottom = "none";
  }

  if ((window.scrollY > 1300) & (window.scrollY < 1600)) {
    document.querySelector(
      "#home  #navv ul li:nth-child(4)"
    ).style.borderBottom = "2px solid #009899";
  } else {
    document.querySelector(
      "#home  #navv ul li:nth-child(4)"
    ).style.borderBottom = "none";
  }

  if ((window.scrollY > 1600) & (window.scrollY < 1900)) {
    document.querySelector(
      "#home  #navv ul li:nth-child(5)"
    ).style.borderBottom = "2px solid #009899";
  } else {
    document.querySelector(
      "#home  #navv ul li:nth-child(5)"
    ).style.borderBottom = "none";
  }
});
// next border end

// right menu
document.querySelector(' #home .rightMenu i').onclick = ()=>{
 document.querySelector(' #home .rightMenu').classList.toggle('rightMenuWidth');

 document.querySelector(' #home .rightMenu i').classList.toggle('aylan');

  document.querySelector(' #home .rightMenu ul').classList.toggle('Visible')
}