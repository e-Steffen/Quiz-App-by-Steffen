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

//doesn't working yet >> Why?
const getNumberofCards = document.getElementsByClassName("cards");
const numberofQuestions = getNumberofCards.length;
console.log(`We collected ${numberofQuestions} Questions so far.`);

const darkModeButton = document.querySelector('[data-js="modeButton"]');

darkModeButton.addEventListener("click", () => {
  alert("This feature will coming soon.");
});
