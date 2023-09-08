document.addEventListener("DOMContentLoaded", function ()
 {
    const registrationForm = document.getElementById("registerform");
     registrationForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const firstName = document.getElementById("first1").value;
      const lastName = document.getElementById("last").value;
      const email = document.getElementById("phone").value;
      const game = document.getElementById("int").value;
      const paymentMethod = document.querySelector('input[name="payment"]:checked');
      if (firstName.trim() === "") {
        alert("First Name is required.");
        return;
      }
      if (lastName.trim() === "") {
        alert("Last Name is required.");
        return;
      }
      if (email.trim() === "") {
        alert("Email is required.");
        return;
      }
      if (game === "choose") {
        alert("Please select a game.");
        return;
      }
      if (!paymentMethod) {
        alert("Please select a payment method.");
        return;
      }
      alert("Form submitted successfully!");
            registrationForm.reset();
    });
  });
  