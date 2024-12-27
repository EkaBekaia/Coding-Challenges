"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // If now input provided
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number Provided";
  }

  // If correct number provided
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  }

  // If Higher number provided
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "⬆️ Too High! Try Again 😉";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🥲You lost the game";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#ca1616";
    }
  }
  // If lower number provided
  else {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "⬇️ Too Low! Try Again 😉";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🥲You lost the game";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#ca1616";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
  document.querySelector("body").style.backgroundColor = "#222 ";
  document.querySelector(".number").style.width = "15rem";
});
