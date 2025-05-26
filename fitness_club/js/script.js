document.addEventListener("DOMContentLoaded", () => {
  const feedbackForm = document.getElementById("feedback-form");
  if (feedbackForm) {
    feedbackForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Форма обратной связи отправлена!");
      feedbackForm.reset(); // очистка формы
    });
  }

  const signupForm = document.getElementById("signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const inputs = signupForm.querySelectorAll("input, select");
      const data = {};
      inputs.forEach(input => {
        if (input.name) data[input.name] = input.value;
      });
      localStorage.setItem("lastSignup", JSON.stringify(data));
      document.getElementById("confirmation").textContent = "Вы успешно записались!";
    });
  }
});
