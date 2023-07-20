const inputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output")

inputEl.addEventListener("input", handlerInput);

function handlerInput(event) {
    nameOutputEl.textContent = event.target.value || 'Anonymous';
}



