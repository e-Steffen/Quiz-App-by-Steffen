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

const grabGreeting = document.querySelector('[data-js="greeting-message"]');

const greetingTimeDependent = () => {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  if (hours.value > 12) {
    grabGreeting.textContent = "Good Afternoon - Time to play a quiz!";
  } else if (hours.value > 18) {
    grabGreeting.textContent = "Good Evening - Time to play a quiz!";
  } else grabGreeting.textContent = "Good Morning - Time to play a quiz!";
};

greetingTimeDependent();

// get number of collected Questions (by cards)
// Problem: ClassName liest nur die Elemente auf der profile.html aus und dort sind keine Cards, man müsste mit AJAX
// oder anderem arbeiten >> daher unten stehende Lösung via speichern als Cookie in localStorage
// const getNumberOfCards = document.getElementsByClassName("cards");
// const numberOfQuestions = getNumberOfCards.length;
// // for testing:
// console.log(`We collected ${numberOfQuestions} Questions so far.`);

// const grabCountedQuestions = document.querySelector('[data-js="countedQuestions"]');
// grabCountedQuestions.textContent = `We collected ${numberOfQuestions} Questions so far.`;

// Check, ob auf index.html
if (window.location.pathname === "/index.html" || window.location.pathname === "/") {
  // Karten zählen (via Array-Länge)
  const numberOfCards = document.getElementsByClassName("cards").length;

  // Anzahl der "cards" in localStorage speichern
  localStorage.setItem("numberOfCards", numberOfCards);
} else if (window.location.pathname === "/profile.html") {
  // Auf die gespeicherte Anzahl der "cards" zugreifen, während auf profile.html
  const numberOfCards = localStorage.getItem("numberOfCards");

  // Anzahl der "cards" auf der Seite ausgeben
  const grabCountedQuestions = document.querySelector('[data-js="countedQuestions"]');
  grabCountedQuestions.textContent = `We collected ${numberOfCards} Questions so far.`;
}

if (window.location.pathname === "/bookmarks.html") {
  const numberOfBookmarkedCards = document.getElementsByClassName("cards").length;
  localStorage.setItem("numberOfBookmarkedCards", numberOfBookmarkedCards);
} else if (window.location.pathname === "/profile.html") {
  const numberOfBookmarkedCards = localStorage.getItem("numberOfBookmarkedCards");
  const grabcountedBooksmarks = document.querySelector('[data-js="countedBooksmarks"]');
  grabcountedBooksmarks.textContent = `There are ${numberOfBookmarkedCards} bookmarked cards so far.`;
}

// set alert for dark mode Button
if (window.location.pathname === "/profile.html") {
  const darkModeButton = document.querySelector('[data-js="modeButton"]');

  darkModeButton.addEventListener("click", () => {
    alert("This feature will coming soon.");
  });
}
