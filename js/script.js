document.addEventListener("DOMContentLoaded", () => {
  const feedbackForm = document.getElementById("feedback-form");
  if (feedbackForm) {
    feedbackForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Форма обратной связи отправлена!");
      feedbackForm.reset();
    });
  }

  const signupForm = document.getElementById("signup-form");
  const dateInput = document.getElementById("training-date");

  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);
  }

  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const inputs = signupForm.querySelectorAll("input, select");
      const data = {};
      inputs.forEach(input => {
        if (input.name) data[input.name] = input.value;
      });
      localStorage.setItem("lastSignup", JSON.stringify(data));
      document.getElementById("confirmation").innerHTML = "<strong>Вы успешно записались!</strong>";
      signupForm.reset();
    });
  }
});
