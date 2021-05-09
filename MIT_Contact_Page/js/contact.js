const inputs = document.querySelectorAll("#contact input");
const textarea = document.querySelector("#contact textarea");
const form = document.querySelector("#contact form");

const addStyles = `
    transform: translate(-7px, -30px);
    -webkit-transform: translate(-7px, -30px);
    -moz-transform: translate(-7px, -30px);
    -ms-transform: translate(-7px, -30px);
    -o-transform: translate(-7px, -30px);
      transition: 0.4s ease;
    -webkit-transition: 0.4s ease;
    -moz-transition: 0.4s ease;
    -ms-transition: 0.4s ease;
    -o-transition: 0.4s ease;
    color:#000;
`;

const removeStyles = `
    transform: translate(0, 0);
    -webkit-transform: translate(0, 0);
    -moz-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -o-transform: translate(0, 0);
      transition: 0.4s ease;
    -webkit-transition: 0.4s ease;
    -moz-transition: 0.4s ease;
    -ms-transition: 0.4s ease;
    -o-transition: 0.4s ease;
    color:#fff;
`;

const elements = (a) => {
  const parentElement = a.target.parentNode;
  const labelElement = parentElement.querySelector("label");
  return labelElement;
};

// inputs focus event
inputs.forEach((item) => {
  item.addEventListener("focusin", (e) => {
    elements(e).style.cssText = addStyles;
  });
});

// inputs focus out event
inputs.forEach((item) => {
  item.addEventListener("focusout", (e) => {
    elements(e).style.cssText =
      e.target.value.length === 0 ? removeStyles : addStyles;
  });
});

// textarea focus event
textarea.onfocus = (e) => {
  elements(e).style.cssText = addStyles;
};

// textarea focus out event
textarea.onblur = (e) => {
  elements(e).style.cssText =
    e.target.value.length === 0 ? removeStyles : addStyles;
};

// onsubmit event
form.addEventListener("submit", (e) => e.preventDefault());
