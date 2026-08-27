const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let username = document.querySelector("#username").value;
  let mail = document.querySelector("#email").value;
  let pass = document.querySelector("#password").value;
  console.log("username:", username);
  console.log("email:", mail);
  console.log("password", pass);
});
