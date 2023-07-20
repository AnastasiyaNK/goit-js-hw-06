const inputEl = document.querySelector("#validation-input");
const correctSymbol = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", handleBlur);

function handleBlur(event) {
    const enterSymbol = event.target.value.length;
    if (correctSymbol === enterSymbol) {
        inputEl.classList.add("valid")
        inputEl.classList.remove("invalid")
    } else {
        inputEl.classList.add("invalid")
        inputEl.classList.remove("valid")
    }
  
}