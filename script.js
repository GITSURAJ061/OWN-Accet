document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (email && message) {
        alert("Thank you for reaching out!");
        document.getElementById("contact-form").reset(); // Clear the form
    } else {
        alert("Please fill out all fields.");
    }
});