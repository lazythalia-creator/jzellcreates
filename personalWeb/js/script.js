var typed = new Typed(".typing", {
    strings: ["Computer Science Student", "Web Designer", "Graphic Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

const navLinks = document.querySelectorAll(".nav a");
const sections = document.querySelectorAll(".section");

function showSection(sectionId) {
    sections.forEach(function (section) {
        section.classList.add("hidden");
    });

    const selectedSection = document.querySelector(sectionId);

    if (selectedSection) {
        selectedSection.classList.remove("hidden");
    }

    navLinks.forEach(function (link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === sectionId) {
            link.classList.add("active");
        }
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
}

navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        showSection(link.getAttribute("href"));
    });
});

const logo = document.querySelector(".logo a");

logo.addEventListener("click", function (event) {
    event.preventDefault();
    showSection("#home");
});

const contactButton = document.querySelector(".hire-me");

contactButton.addEventListener("click", function (event) {
    event.preventDefault();
    showSection("#contact");
});

function sendMessage(event) {
    event.preventDefault();

    const name = document.querySelector("#contactName").value;
    const email = document.querySelector("#contactEmail").value;
    const result = document.querySelector("#formResult");

    result.innerHTML =
        "<strong>Message Sent!</strong><br>" + "Thank you, " + name + "! " + "Your message has been received from " + email + ".";
    result.style.display = "block";

    document.querySelector("#contactForm").reset();
}