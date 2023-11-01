export default function createBoard(contentDiv) {
  // Create game board
  const board = document.createElement("div");
  board.setAttribute("class", "board");

  for (let x = 1; x <= 10; x++) {
    for (let y = 1; y <= 10; y++) {
      const square = document.createElement("div");
      square.setAttribute("class", "squares");
      square.setAttribute("data-x", x);
      square.setAttribute("data-y", y);
      board.appendChild(square);
    }
  }

  // Create labels
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const leftLabel = document.createElement("div");
  leftLabel.setAttribute("id", "left-label");
  for (let i = 0; i < 10; i++) {
    const letter = document.createElement("p");
    letter.textContent = letters[i];
    leftLabel.appendChild(letter);
  }
  const topLabel = document.createElement("div");
  topLabel.setAttribute("id", "top-label");
  for (let i = 1; i <= 10; i++) {
    const number = document.createElement("p");
    number.textContent = i;
    topLabel.appendChild(number);
  }

  // Append objects to board
  contentDiv.appendChild(board);
  contentDiv.appendChild(leftLabel);
  contentDiv.appendChild(topLabel);
}
