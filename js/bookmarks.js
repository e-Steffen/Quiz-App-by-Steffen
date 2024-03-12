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

// set toggle-function to bookmark (already set)
const setBookmarkButton = document.querySelector(".bookmark-set");
setBookmarkButton.addEventListener("click", () => {
  setBookmarkButton.classList.toggle("toggle-bookmark-set");
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
