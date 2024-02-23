const grabTitle = document.querySelector('[data-js="title"]');

grabTitle.addEventListener("mousedown", () => {
  grabTitle.classList.add("colored");
});

grabTitle.addEventListener("mouseup", () => {
  grabTitle.classList.remove("colored");
});

const showAnswerComesSoon = document.querySelectorAll('[data-js="answerButton"]');
showAnswerComesSoon.forEach((adressAllButtons) => {
  adressAllButtons.addEventListener("click", () => {
    alert("Sorry, no function yet, this is coming soon.");
  });
});

const darkModeButton = document.querySelector('[data-js="modeButton"]');

darkModeButton.addEventListener("click", () => {
  alert("This feature will coming soon.");
});
