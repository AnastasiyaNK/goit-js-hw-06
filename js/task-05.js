const inputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output")

inputEl.addEventListener("input", handlerInput);

function handlerInput(event) {
    
    if (inputEl.value === "") {
        return nameOutputEl.textContent = "Anonymous"
    } else {
        nameOutputEl.textContent = event.currentTarget.value;
    }

}
console.log(handlerInput)
