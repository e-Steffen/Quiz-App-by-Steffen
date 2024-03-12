// color-changing title
const grabTitle = document.querySelector('[data-js="title"]');

grabTitle.addEventListener("mousedown", () => {
  grabTitle.classList.add("colored");
});

grabTitle.addEventListener("mouseup", () => {
  grabTitle.classList.remove("colored");
});

//time-dependent greeting-message
const grabGreeting = document.querySelector('[data-js="greeting-message"]');

const greetingTimeDependent = () => {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  if (hours > 11) {
    grabGreeting.textContent = "Good Afternoon - Time to play a quiz!";
  } else if (hours > 18) {
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
    alert(
      "This feature will coming soon. However, you can use your browser or system settings to view the Quiz App in dark mode. "
    );
  });
}

// set toggle-function to bookmark

const bookmarkButton = document.querySelector(".bookmark");
bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("toggle-bookmark");
});

// toggle answer button

const toggleAnswer = document.querySelector('[data-js="answerButton"]');
const answerText = document.querySelector('[data-js="showAnswer"]');
toggleAnswer.addEventListener("click", () => {
  answerText.classList.toggle("hidden");
  if (toggleAnswer.innerHTML === "Hide Answer") {
    toggleAnswer.innerHTML = "Show Answer";
  } else {
    toggleAnswer.innerHTML = "Hide Answer";
  }
});
