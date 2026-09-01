const form = document.querySelector("#form");
const username = document.querySelector("#username");
const error = document.querySelector("#error");

form.addEventListener("submit", (event) => {
  if (username.value.trim() === "") {
    event.preventDefault();
    error.textContent = "username must be filled";
  }
});
