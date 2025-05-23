const form = document.querySelector("form");
const card1 = document.querySelector(".form-container");
const card2 = document.querySelector(".success-container");
const dismissButton = document.querySelector(".dismiss");
const emailInput = document.querySelector(".input");
const errorMessage = document.querySelector(".error");
const userEmail = document.getElementById("user-email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!validEmail.test(email)) {
    emailInput.classList.add("error-input");
    form.classList.add("shake");
    setTimeout(() => form.classList.remove("shake"), 300);
    errorMessage.classList.remove("hide");
  } else {
    emailInput.classList.remove("error-input");
    errorMessage.classList.add("hide");
    card1.classList.add("hide");
    card2.classList.remove("hide");
    userEmail.textContent = email;
  }
});

dismissButton.addEventListener("click", () => {
  card1.classList.remove("hide");
  card2.classList.add("hide");
  form.reset();
  card1.scrollIntoView({ behavior: "smooth" });
});
