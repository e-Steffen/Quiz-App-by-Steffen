const grabTitle = document.querySelector('[data-js="title"]');

grabTitle.addEventListener("mousedown", () => {
  grabTitle.classList.add("color");
});

grabTitle.addEventListener("mouseup", () => {
  grabTitle.classList.remove("color");
});

const darkModeButton = document.querySelector('[data-js="modeBtn"]');

darkModeButton.addEventListener("click", () => {
  alert("This feature will coming soon.");
});
