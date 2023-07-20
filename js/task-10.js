function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("input");
const buttonCreateEl = document.querySelector("[data-create]")
const buttonDestroyEl = document.querySelector("[data-destroy]")
const boxColorEl = document.querySelector("#boxes")


function createBoxes(amount) {
  
  let boxHeight = 30;
  let boxWidtht = 30; 
  const colorBoxes = [];

  for (let i = 0; i < amount; i += 1){
    const boxSizeEl = document.createElement("div")
    boxSizeEl.style.height = `${boxHeight}px`;
    boxSizeEl.style.width = `${boxWidtht}px`;
    boxSizeEl.style.backgroundColor = getRandomHexColor(); 
    colorBoxes.push(boxSizeEl);
    boxHeight += 10;
    boxWidtht += 10;
  }

   boxColorEl.append(...colorBoxes)
}

buttonCreateEl.addEventListener('click', handlerClick);



function handlerClick() {
  const inputValueEl = Number(inputEl.value);
  boxColorEl.innerHTML = "";
  createBoxes(inputValueEl)
}
buttonDestroyEl.addEventListener('click',handlerDestroy);
 
function handlerDestroy() {
  boxColorEl.innerHTML = "";
  inputEl.value = "";
}
