// color-changing title
const grabTitle = document.querySelector('[data-js="title"]');

grabTitle.addEventListener("mousedown", () => {
  grabTitle.classList.add("colored");
});

grabTitle.addEventListener("mouseup", () => {
  grabTitle.classList.remove("colored");
});

// set alert for answer-buttons
const showAnswerComesSoon = document.querySelectorAll('[data-js="answerButton"]');
showAnswerComesSoon.forEach((adressAllButtons) => {
  adressAllButtons.addEventListener("click", () => {
    alert("Sorry, no function yet, this is coming soon.");
  });
});

// get number of collected Questions (by cards)
const getNumberOfCards = document.getElementsByClassName("cards");
const numberOfQuestions = getNumberOfCards.length;
// for testing:
console.log(`We collected ${numberOfQuestions} Questions so far.`);

const grabcountedQuestions = document.querySelector('[data-js="countedQuestions"]');
grabcountedQuestions.innerHTML = `We collected ${numberOfQuestions} Questions so far.`;

// set alert for dark mode Button
const darkModeButton = document.querySelector('[data-js="modeButton"]');

darkModeButton.addEventListener("click", () => {
  alert("This feature will coming soon.");
});
