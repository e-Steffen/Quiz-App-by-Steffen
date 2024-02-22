const grabTitle = document.querySelector('[data-js="title"]');

grabTitle.addEventListener("mousedown", () => {
  grabTitle.classList.add("colored");
});

grabTitle.addEventListener("mouseup", () => {
  grabTitle.classList.remove("colored");
});

const darkModeButton = document.querySelector('[data-js="modeBtn"]');

darkModeButton.addEventListener("click", () => {
  alert("This feature will coming soon.");
});
