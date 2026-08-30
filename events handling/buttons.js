const output = document.querySelector("#output");
document.addEventListener("click", (event) => {
  output.textContent = `Event: ${event.type}
  Target: ${event.target.tagName}`
});
