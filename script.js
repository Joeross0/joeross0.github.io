// Example script.js
function toggleMenu() {
    const menu = document.getElementById("side-menu");
    menu.classList.toggle("show");
}

document.addEventListener("click", function (event) {
    const menu = document.getElementById("side-menu");
    const hamburger = document.querySelector(".hamburger-menu");

    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove("show");
    }
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from redirecting

    const formData = new FormData(this);

    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById("success-message").style.display = "block"; // Show success message
            this.reset(); // Clear form fields after submission
        } else {
            alert("Error sending message. Please try again.");
        }
    })
    .catch(error => {
        alert("An error occurred. Please try again.");
    });
});
