/* Add your JavaScript to this file */

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".newsletter form");
    const emailInput = document.getElementById("email");
    const messageDiv = document.querySelector(".newsletter .message");

    form.addEventListener("submit", (event) => {
        // Prevent default page reload upon form submission
        event.preventDefault();

        const emailValue = emailInput.value.trim();

        if (emailValue === "") {
            messageDiv.textContent = "Please enter a valid email address.";
        } else {
            messageDiv.textContent = `Thank you! Your email address ${emailValue} has been added to our mailing list!`;
            emailInput.value = ""; // Clears the input field after success
        }
        messageTimer = setTimeout(() => {
            messageDiv.textContent = "";
        }, 5000);
    });
});