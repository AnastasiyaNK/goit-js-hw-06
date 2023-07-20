const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");
spanEl.style.fontSize = `${inputEl.value}px`
inputEl.addEventListener("input", handleInput)

function handleInput(event) {
    spanEl.style.fontSize = `${event.target.value}px`
}