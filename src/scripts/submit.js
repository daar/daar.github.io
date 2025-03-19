document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");
  
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
  
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
  
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
  
        const result = await response.json();
        if (response.ok) {
          status.textContent = "Message sent!";
          form.reset();
          setTimeout(() => toggleForm(), 1000); // Hide form after success
        } else {
          status.textContent = "Failed to send message.";
        }
      } catch (error) {
        status.textContent = "Error sending message.";
      }
    });
  });
  