const emailfield = document.getElementById("textmail");
const button = document.getElementById("send");
const message = document.querySelector(".errmessage");
const error = document.querySelector(".error");
console.log(message);

button.addEventListener("click", function (e) {
    e.preventDefault();
    const email = emailfield.value;
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (mailformat.test(email) && !email == " ") {
        return true;
    } else {
        message.classList.remove("invisible");
        message.classList.add("visible");
        emailfield.style.border = "1px solid hsl(0, 93%, 68%)";
        error.classList.remove("invisible");
        error.classList.add("visible");
    }
});
