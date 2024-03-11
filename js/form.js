// add new question-card (via form)

const form = document.querySelector('[data-js="form"]');
form.addEventListener("submit", (input) => {
  input.preventDefault();

  const inputData = new FormData(input.target);
  const dataItems = Object.fromEntries(inputData);
  console.log(dataItems);

  const createNewCard = document.createElement("section");
  (createNewCard.className = "cards"), "cards-frame", "hidden";
  createNewCard.innerHTML = `
 
        <p>${dataItems.newQuestion}</p>
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
  document.body.appendChild(createNewCard);
});

// const textInput = document.querySelector('[data-js="textInput"]');
// const countCharacters = document.querySelectorAll('[data-js="character-count"]');
// countCharacters.forEach((adressAllCharInputs) => {
//   adressAllCharInputs.addEventListener("input", (event) => {
//     countCharacters.textContent = 150 - event.target.value.length + " characters left";
//   });
// });
const textInput = document.querySelector('[data-js="textInput"]');
const countCharacters = document.querySelectorAll('[data-js="character-count"]');

textInput.addEventListener("input", (event) => {
  countCharacters.forEach((characterCountElement) => {
    characterCountElement.textContent = 150 - textInput.value.length + " Zeichen übrig";
  });
});
