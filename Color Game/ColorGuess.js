// Declaring elements
const remainingTries = document.querySelector(".tries");
const startButton = document.querySelector(".start");
const displayedColor = document.querySelector(".randomcolor");
const feedbackMsg = document.querySelector(".feedback");

const easyButton = document.querySelector(".easy");
const hardButton = document.querySelector(".hard");
const colorBlocks = document.querySelectorAll(".first-block");
const inactiveBlocks = document.querySelectorAll(".second-block");

let isEasyMode = false; // Default mode is hard???????

// Event listeners
startButton.addEventListener("click", startGame);

easyButton.addEventListener("click", () => {
  isEasyMode = true;
  adjustModeStyles(easyButton, hardButton, "green");
  toggleBlocksVisibility(inactiveBlocks, false);
  startGame();
});

hardButton.addEventListener("click", () => {
  isEasyMode = false;
  adjustModeStyles(hardButton, easyButton, "red");
  toggleBlocksVisibility(inactiveBlocks, true);
  startGame();
});

//Functions
function startGame() {
  
  feedbackMsg.textContent = "...";
  feedbackMsg.style.backgroundColor = "yellow";
  feedbackMsg.style.color = "black";

  const colorsArray = assignColorsToBlocks();
  setRandomTargetColor(colorsArray);
}

function adjustModeStyles(activeButton, inactiveButton, color) {
  activeButton.style.backgroundColor = color;
  inactiveButton.style.backgroundColor = "";
}

function toggleBlocksVisibility(blocks, isVisible) {
  blocks.forEach((block) => {
    block.style.display = isVisible ? "block" : "none";
  });
}

function assignColorsToBlocks() {
  const colors = [];
  colorBlocks.forEach((block, index) => {
    if (isEasyMode && index > 2) return;
    const randomColor = RandomRgb();
    block.style.backgroundColor = randomColor;
    colors.push(randomColor);
    block.onclick = () => handleBlockClick(block, randomColor);
  });
  return colors;
}

function setRandomTargetColor(colors) {
  const randomIndex = Math.floor(Math.random() * colors.length);
  displayedColor.textContent = colors[randomIndex];
}

function RandomRgb() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function handleBlockClick(block, color) {
  if (color === displayedColor.textContent) {
    feedbackMsg.textContent = "Success!";
    feedbackMsg.style.backgroundColor = "green";
    Swal.fire({
      icon: "success",
      title: "Well done!",
      text: "You matched the color!",
      timer: 2000,
    });
    setTimeout(() => location.reload(), 2000);
  } else {
    feedbackMsg.textContent = "Try Again!";
    feedbackMsg.style.backgroundColor = "red";
    block.style.opacity = 0.5;
    remainingTries.textContent--;

    if (parseInt(remainingTries.textContent) === 0) {
      Swal.fire({
        icon: "error",
        title: "Game Over",
        text: "You are out of attempts!",
      });
      setTimeout(() => location.reload(), 2000);
    }
  }
}
