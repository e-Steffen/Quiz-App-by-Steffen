// color-changing title - Repetition from script.js, as interlocking of js content only occurs later in the curriculum
const grabTitle = document.querySelector('[data-js="title"]');

grabTitle.addEventListener("mousedown", () => {
  grabTitle.classList.add("colored");
});

grabTitle.addEventListener("mouseup", () => {
  grabTitle.classList.remove("colored");
});
const grabGreeting = document.querySelector('[data-js="greeting-message"]');

//time-dependent greeting-message - Repetition from script.js, as interlocking of js content only occurs later in the curriculum
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

// add new question-card (via form)

const form = document.querySelector('[data-js="form"]');
form.addEventListener("submit", (input) => {
  input.preventDefault();

  const inputData = new FormData(input.target);
  const dataItems = Object.fromEntries(inputData);
  console.log(dataItems);

  const createNewCard = document.createElement("section");
  createNewCard.className = "cards card-frame";
  createNewCard.innerHTML = `
 
        <p>${dataItems.newQuestion}</p>
        <p class="hidden" data-js="showAnswer">${dataItems.newAnswer}</p>
        <button class="button" aria-label="button to show answer" data-js="answerButton">
          Show Answer
        </button>
        <button class="bookmark" aria-label="bookmark-button">
          <img src="/images/bookmark.png" alt="bookmark-icon" class="bookmark-set" />
        </button>
        <ul class="tags" aria-labelledby="assigned topic tags">
          <li>${dataItems.newTag}</li>
        </ul>
     
  `;

  document.querySelector("main").appendChild(createNewCard);
  // set toggle-function to bookmark

  const bookmarkButton = document.querySelector(".bookmark");
  bookmarkButton.addEventListener("click", () => {
    bookmarkButton.classList.toggle("toggle-bookmark");
  });

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
});

const textInput = document.querySelectorAll('[data-js="textInput"]');
const countCharacters = document.querySelectorAll('[data-js="character-count"]');

textInput.forEach((inputItem, index) => {
  inputItem.addEventListener("input", () => {
    const inputValue = inputItem.value;
    const charsRemaining = 150 - inputValue.length;

    countCharacters[index].textContent = `${charsRemaining} Zeichen übrig`;
  });
});
