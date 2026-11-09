document.documentElement.classList.add("js");


const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

sections.forEach(function (section) {
    observer.observe(section);
});

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