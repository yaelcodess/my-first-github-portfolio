const sendButton = document.getElementById("send-btn");
const nameInput = document.getElementById("name");
const messageInput = document.getElementById("message");
const status = document.getElementById("form-status");

sendButton.addEventListener("click", function () {
    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (name === "" || message === "") {
        status.textContent = "Please fill in both your name and message.";
        return;
    }

    status.textContent = "Thanks, " + name + "! This form is a prototype, so no message was actually sent.";
    nameInput.value = "";
    messageInput.value = "";
});

const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});