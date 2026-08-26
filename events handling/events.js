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