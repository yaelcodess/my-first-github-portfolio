
/* =========================================
   1. SCROLL REVEAL ANIMATIONS
========================================= */

const sections = document.querySelectorAll("section");

if ("IntersectionObserver" in window) {
    document.documentElement.classList.add("js");

    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1
        }
    );

    sections.forEach(function (section) {
        observer.observe(section);
    });
}

/* =========================================
   2. CONTACT FORM VALIDATION
========================================= */

const sendButton = document.getElementById("send-btn");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const status = document.getElementById("form-status");

if (
    sendButton &&
    nameInput &&
    emailInput &&
    messageInput &&
    status
) {
    sendButton.addEventListener("click", function () {

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        // Check if all fields are filled
        if (name === "" || email === "" || message === "") {
            status.textContent = "Please complete all fields before submitting.";
            return;
        }

        // Validate email format
        if (!emailInput.checkValidity()) {
            status.textContent = "Please enter a valid email address.";
            emailInput.focus();
            return;
        }

        // Display confirmation message
        status.textContent =
            "Thank you, " + name +
            "! Your form was completed successfully. However, this is only a prototype, so no message was sent.";

        // Clear the form fields
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
    });
}

/* =========================================
   3. BACK TO TOP BUTTON
========================================= */

const backToTop = document.getElementById("back-to-top");

if (backToTop) {

    function toggleBackToTop() {
        if (window.scrollY > 400) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    }

    window.addEventListener("scroll", toggleBackToTop, {
        passive: true
    });

    // Check initial scroll position
    toggleBackToTop();
}
