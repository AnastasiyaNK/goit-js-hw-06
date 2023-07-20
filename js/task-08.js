const formEl = document.querySelector(".login-form")
formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
   
    const dataOb = {
        email: formEl.elements.email.value,
        password: formEl.elements.password.value,
    }

    if (dataOb.email === "" || dataOb.password === "") {
        return alert("всі поля повинні бути заповнені")
    }
    console.log(dataOb)

    formEl.reset();
   
}