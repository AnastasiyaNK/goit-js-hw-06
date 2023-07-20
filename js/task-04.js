const buttonDecrementEl = document.querySelector("button[data-action='decrement']");
const buttonIncrementEl = document.querySelector("button[data-action='increment']");
const sumValue = document.querySelector("#value")

let counterValue = 0; 

buttonDecrementEl.addEventListener("click", handleDecrement);

buttonIncrementEl.addEventListener("click", handleIncrement)

function handleDecrement(event) {
    counterValue -= 1;
    sumValue.textContent = counterValue;
}

function handleIncrement(event) {
     counterValue += 1;
    sumValue.textContent = counterValue;
    
}

