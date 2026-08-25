//1
let button = document.querySelector("#button1");
button.addEventListener("click", function () {
  button.textContent = "clicked";
  button.style.color = "red";
});

//2
let button2 = document.querySelector("#button2");
button2.addEventListener("click", function () {
  button2.innerHTML =
    "<p>lorem hir ti oi sidhf asdaf asdf fwe fas ew gis awe gfs fog jhil jok </p>";
});

//3
let button3 = document.querySelector("#button3");
button3.addEventListener("click", function () {
  button3.style.backgroundColor = "blue";
  button3.style.color = "white";
  button3.style.fontSize = "28px";
});

//4
button3.addEventListener("dblclick", function () {
  button3.style.backgroundColor = "green";
});

//5
function handleClick() {
  button4.textContent = "button clicked";
  button4.style.backgroundColor = "red";
  button4.style.color = "white";
  button4.style.fontSize = "28px";
}
let button4 = document.querySelector("#button4");
button4.addEventListener("click", handleClick);
