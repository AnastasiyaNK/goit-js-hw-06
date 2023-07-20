function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widgetEl = document.querySelector(".widget");
const colorEl = document.querySelector(".color");
const buttonChangeEl = document.querySelector(".change-color")


buttonChangeEl.addEventListener('click', function () {
  const colorRandomEl = getRandomHexColor();
  document.body.style.backgroundColor = colorRandomEl;
  colorEl.textContent = colorRandomEl;
  
})
