import ps from "./pubSub";

export default function createBoard(contentDiv) {
  // Create game content board
  const boardDiv = document.getElementsByClassName(contentDiv)[0];
  const topBoard = generateBoard("top");
  const botBoard = generateBoard("bot");

  boardDiv.appendChild(topBoard);
  boardDiv.appendChild(botBoard);

  function generateBoard(id) {
    // Create board
    const container = document.createElement("div");
    container.setAttribute("class", "content");
    container.setAttribute("id", id);
    const board = document.createElement("div");
    board.setAttribute("class", "board");

    // Create squares
    for (let y = 10; y > 0; y--) {
      for (let x = 1; x <= 10; x++) {
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

    // Append objects to top board
    container.appendChild(board);
    container.appendChild(leftLabel);
    container.appendChild(topLabel);

    return container;
  }

  // Mouse events
  boardDiv.addEventListener("click", (e) => {
    const parentBoard = e.target.parentElement.parentElement;
    if (parentBoard.id == "top") {
      const dataX = Number(e.target.getAttribute("data-x"));
      const dataY = Number(e.target.getAttribute("data-y"));
      const coordinates = { owner: "top", x: dataX, y: dataY };

      ps.publish("attack-grid-top", coordinates);
    }
    if (parentBoard.id == "bot") {
      const dataX = Number(e.target.getAttribute("data-x"));
      const dataY = Number(e.target.getAttribute("data-y"));
      const coordinates = { owner: "bot", x: dataX, y: dataY };

      ps.publish("attack-grid-bot", coordinates);
    }
  });
}

function updateBoard(obj) {
  // Update board elements
  const contentElem = document.getElementById(obj.elem);
  const boardElem = contentElem.getElementsByClassName("board")[0];

  function updateCoordinate(obj, x, y) {
    // Update coordinate with obj
    for (const node of boardElem.children) {
      const dataX = node.getAttribute("data-x");
      const dataY = node.getAttribute("data-y");

      if (dataX == x && dataY == y) {
        // append obj data to the squares with classes...
        if (obj.length) {
          node.classList.add("ship");
        }
        if (obj.status == "hit") {
          node.classList.add("hit");
        }
        if (obj.status == "miss") {
          node.classList.add("miss");
        }
      }
    }
  }

  // Update board coordinates
  for (let x = 1; x <= 10; x++) {
    for (let y = 1; y <= 10; y++) {
      // For each x & y coordinate
      // if (obj.data[x][y].length > 1) {
      // If there is a hit/miss or ship object

      updateCoordinate(obj.grid[x][y], x, y);
      // }
    }
  }
}

ps.subscribe("update-board", updateBoard);
