document.addEventListener("DOMContentLoaded", () => {
  const feedbackForm = document.getElementById("feedback-form");
  if (feedbackForm) {
    feedbackForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = feedbackForm.querySelector('input[type="text"]').value;
      const email = feedbackForm.querySelector('input[type="email"]').value;
      const message = feedbackForm.querySelector('textarea').value;

      alert(`Форма отправлена!\n\nОтправленные данные: \nИмя: ${name}\nEmail: ${email}\nВопрос: ${message}`);
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

  const name = signupForm.querySelector('input[name="name"]').value;
  const email = signupForm.querySelector('input[name="email"]').value;
  const trainingValue = signupForm.querySelector('select[name="training"]').value;
  const date = signupForm.querySelector('input[name="date"]').value;

  const trainingLabels = {
    yoga: "Йога",
    boxing: "Бокс",
    crossfit: "Кроссфит",
    cardio: "Кардио",
    strength: "Силовая тренировка"
  };

  const training = trainingLabels[trainingValue] || trainingValue;

  localStorage.setItem("lastSignup", JSON.stringify({ name, email, training, date }));

 document.querySelector(".confirmation-box").innerHTML = `
  <strong>Вы успешно записались!</strong><br><br>
  Данные записи:<br>
  Имя: ${name}<br>
  Email: ${email}<br>
  Тренировка: ${training}<br>
  Дата: ${date}`;

  signupForm.reset();
});

  }
});
