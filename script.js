let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let winnerMessage = document.querySelector("#msg");

let turn0 = true;
let player1 = prompt("Enter Player 1 name:");
let player2 = prompt("Enter Player 2 name:");

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText === "") {
      if (turn0) {
        box.innerText = "O";
        turn0 = false;
      } else {
        box.innerText = "X";
        turn0 = true;
      }
      checkWinner();
    }
  });
});

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        winnerMessage.style.display = "block";
        let winnerName = pos1Val === "O" ? player1 : player2;
        winnerMessage.innerText = `CONGRATULATIONS! WINNER IS ${winnerName}`;
        boxes.forEach((box) => (box.style.pointerEvents = "none")); // Disable all boxes when there's a winner
        return;
      }
    }
  }
};

// Reset button functionality
resetBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.style.pointerEvents = "auto";
  });
  winnerMessage.style.display = "none";
  turn0 = true;
  player1 = prompt("Enter Player 1 name:");
  player2 = prompt("Enter Player 2 name:");
});
