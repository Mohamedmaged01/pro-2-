const btn = document.getElementById("btn");
const label = document.getElementById("label");
const min = 1;
const max = 6;
let randomNum;
btn.onclick = function () {
  randomNum = Math.floor(Math.random() * max) + min;
  label.textContent = randomNum;
};
