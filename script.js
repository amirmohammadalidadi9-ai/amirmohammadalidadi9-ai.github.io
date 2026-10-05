// script.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const button = document.getElementById("submitButton");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = form.elements["lastname"].value.trim();
    const email = form.elements["email"].value.trim();
    const message = form.elements["message"].value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    button.disabled = true;
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        alert("Thank you, " + name + "! Your message was sent.");
        form.reset();
      } else {
        alert("Sorry, something went wrong. Please try again later.");
      }
    } catch (error) {
      alert("Network error. Please check your connection and try again.");
    } finally {
      button.disabled = false;
    }
  });
});
