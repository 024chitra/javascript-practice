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

//6
let button5 = document.querySelector("#button5");
let button6 = document.querySelector("#button6");
function changeText() {
  button5.textContent = "clicked!";
  button5.style.backgroundColor = "orange";
}

button5.addEventListener("click", changeText);

button6.addEventListener("click", () => {
  button5.removeEventListener("click", changeText);
});

//7
const button7 = document.querySelector("#button7");
const button8 = document.querySelector("#button8");
const button9 = document.querySelector("#button9");
function start() {
  button7.classList.toggle("changeColor");
}

button7.addEventListener("click", start);
button8.addEventListener("click", () => {
  button7.addEventListener("click", start);
});
button9.addEventListener("click", () => {
  button7.removeEventListener("click", start);
});

//8
let display = document.querySelector("#displayCount");
const incre = document.querySelector("#incrementBtn");
const stop = document.querySelector("#stopBtn");
const conti = document.querySelector("#continueBtn");
const reset = document.querySelector("#resetBtn");
let count = 0;
function increase() {
  count++;
  display.textContent = count;
}

incre.addEventListener("click", increase);
stop.addEventListener("click", () => {
  incre.removeEventListener("click", increase);
});
conti.addEventListener("click", () => {
  incre.addEventListener("click", increase);
});
reset.addEventListener("click", () => {
  count = 0;
  display.textContent = count;
});

//9
//use a function instead of writing the code on

//10
// solved in Q8

//11
const inputText = document.querySelector("#inputText");
const displayPara = document.querySelector("#paragraph");

inputText.addEventListener("input", () => {
  displayPara.textContent = inputText.value;
});

//12
const selectColor = document.querySelector("#selectColor");
const selected = document.querySelector("#selectedColor");

selectColor.addEventListener("change", () => {
  let color = selectColor.value;
  if (color === "red") {
    selected.style.backgroundColor = "red";
  } else if (color === "green") {
    selected.style.backgroundColor = "green";
  } else if (color === "blue") {
    selected.style.backgroundColor = "blue";
  }
});

//14
const hover = document.querySelector("#hover");

hover.addEventListener("mouseover", () => {
  hover.style.backgroundColor = "yellow";
});

//15
const input = document.querySelector("body");
const press = document.querySelector("#press");
input.addEventListener("keyup", (event) => {
  press.textContent = event.key;
});

//16
const lastKey = document.querySelector("#lastKey");
const countChar = document.querySelector("#character");
mouseHover = document.querySelector("#Q16");

input.addEventListener("keyup", (event) => {
  lastKey.textContent = event.key;
});

let countC = 0;
input.addEventListener("keyup", function () {
  countC++;
  countChar.textContent = countC;
});

mouseHover.addEventListener("mouseover", function () {
  mouseHover.style.border = "4px solid red";
});

//17
const buttonQ17 = document.querySelector("#buttonQ17");
buttonQ17.addEventListener("click", (event) => {
  console.log(event);
});

//18
let buttonQ18 = document.querySelectorAll("#buttonQ18");
let output = document.querySelector("#output");

buttonQ18.forEach((button) => {
  button.addEventListener("click", (event) => {
    output.textContent = event.target.textContent;
  });
});

//19
let button19 = document.querySelector("#button19");

button19.addEventListener("click", (event) => {
  console.log(event.type);
});
button19.addEventListener("mouseover", (event) => {
  console.log(event.type);
});

//20
// solve in q13

//21
const link = document.querySelector("#link");
const linkOut = document.querySelector("#linkOutput");
link.addEventListener("click", (event) => {
  event.preventDefault();
  linkOut.textContent = "Navigation Prevented";
});

//23

