const overLay = document.querySelector(".overlay");
const OkBtn = document.querySelector(".okfine");
const YesBtn = document.querySelector(".yes");
const Board = document.querySelector(".board-troll");
const result = document.querySelector(".result");

OkBtn.addEventListener("click", () => {
  overLay.classList.add("active");
  Board.classList.add("active");
});
const NeverBtn = document.getElementById("never");

NeverBtn.addEventListener("mouseover", () => {
  let x = Math.floor(Math.random() * 70);
  let y = Math.floor(Math.random() * 70);
  NeverBtn.style.top = `${x > 100 ? 96 : x}%`;
  NeverBtn.style.left = `${y > 100 ? 96 : y}%`;
});

YesBtn.addEventListener("click", () => {
  Board.classList.remove("active");
  result.classList.add("show");
});

let txtFill = "Because I love you so much!";

const txt = document.getElementById("txt");
let current = 1;
const hit = () => {
  txt.value = txtFill.slice(0, current);
  current++;
};
