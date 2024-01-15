import ps from "./pubSub";

export default function createBoard() {
  // Create game content board
  const boardDiv = document.getElementsByClassName("container")[0];
  let topBoard = generateBoard("top");
  let botBoard = generateBoard("bot");
  let disableAllBoards = true;
  let playerMoved = false;
  let cpuActive = false;
  let topBoardsTurn = false;
  let botBoardsTurn = false;

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
          // Append obj data to the squares with classes

          if (obj.length) {
            // If AI active then hide top board ships
            if (cpuActive && contentElem.id == "top") {
              break;
            } else {
              node.classList.add("ship");
              node.setAttribute("colour", obj.colour);
              node.style.backgroundColor = obj.colour;
            }
          }
          if (obj.status == "hit") {
            node.classList.add("hit");
            node.style.backgroundColor = "rgb(175, 129, 129)";
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

    // Switch active board state
    switchActiveBoard();
  }

  function switchHiddenBoard() {
    // If pvp mode then hide ships on board, disable all input
    const topBoardShips = Array.from(topBoard.getElementsByClassName("ship"));
    const botBoardShips = Array.from(botBoard.getElementsByClassName("ship"));
    topBoard.style.pointerEvents = "none";
    botBoard.style.pointerEvents = "none";

    // Temp hide ships
    topBoardShips.forEach((ship) => {
      if (!ship.classList.contains("hit")) {
        ship.style.backgroundColor = "white";
      } else if (ship.classList.contains("hit")) {
        ship.style.backgroundColor = "rgb(175, 129, 129)";
      }
    });
    botBoardShips.forEach((ship) => {
      if (!ship.classList.contains("hit")) {
        ship.style.backgroundColor = "white";
      } else if (ship.classList.contains("hit")) {
        ship.style.backgroundColor = "rgb(175, 129, 129)";
      }
    });
    // Wait 2 seconds then display ship status
    setTimeout(() => {
      if (botBoardsTurn) {
        // Top board's turn
        topBoardShips.forEach((ship) => {
          const shipColour = ship.getAttribute("colour");
          if (!ship.classList.contains("hit")) {
            ship.style.backgroundColor = shipColour;
          }
        });
        botBoardShips.forEach((ship) => {
          if (!ship.classList.contains("hit")) {
            ship.style.backgroundColor = "white";
          }
        });
      } else if (topBoardsTurn) {
        // Bottom board's turn
        topBoardShips.forEach((ship) => {
          if (!ship.classList.contains("hit")) {
            ship.style.backgroundColor = "white";
          }
        });
        botBoardShips.forEach((ship) => {
          const shipColour = ship.getAttribute("colour");
          if (!ship.classList.contains("hit")) {
            ship.style.backgroundColor = shipColour;
          }
        });
      }

      if (disableAllBoards) {
        return;
      }

      switchPlayerControl();
    }, 2000);
  }

  function switchPlayerControl() {
    // Switch player control
    if (botBoardsTurn) {
      // Top boards turn
      topBoard.style.pointerEvents = "none";
      botBoard.style.pointerEvents = "auto";
      if (cpuActive) {
        ps.publish("info-update", `CPU's turn`);
      } else {
        ps.publish("info-update", `Top Player's turn`);
      }

      // Set turn variables for next turn
      topBoardsTurn = true;
      botBoardsTurn = false;
    } else if (topBoardsTurn) {
      topBoard.style.pointerEvents = "auto";
      botBoard.style.pointerEvents = "none";
      if (cpuActive) {
        ps.publish("info-update", `Your turn`);
      } else {
        ps.publish("info-update", `Bottom Player's turn`);
      }

      // Set turn variables for next turn
      topBoardsTurn = false;
      botBoardsTurn = true;
    }
  }

  function switchActiveBoard() {
    // Switch active boards
    if (disableAllBoards) {
      return;
    }

    // If pvp mode enabled
    if (!cpuActive) {
      switchHiddenBoard();
    }

    // If AI active then attack
    if (cpuActive) {
      switchPlayerControl();
      if (playerMoved) {
        setTimeout(cpuAttack, 800);
      }
    }
  }

  function disableBoards() {
    // Game end
    disableAllBoards = true;
    topBoard.style.pointerEvents = "none";
    botBoard.style.pointerEvents = "none";
  }

  function resetBoard() {
    // Clear both boards from container
    while (boardDiv.firstChild) {
      boardDiv.removeChild(boardDiv.lastChild);
    }

    topBoard = generateBoard("top");
    botBoard = generateBoard("bot");

    boardDiv.appendChild(topBoard);
    boardDiv.appendChild(botBoard);
  }

  // AI Move
  function cpuAttack() {
    // Check if game has ended
    if (disableAllBoards) {
      return;
    }

    // Pass turn back to player and attack
    playerMoved = false;
    ps.publish("cpu-attack", "bot");
  }

  // Mouse events
  boardDiv.addEventListener("click", (e) => {
    const parentBoard = e.target.parentElement.parentElement;
    if (parentBoard.id == "top") {
      const dataX = Number(e.target.getAttribute("data-x"));
      const dataY = Number(e.target.getAttribute("data-y"));
      const coordinates = { owner: "top", x: dataX, y: dataY };

      // Player has moved (AI check)
      playerMoved = true;
      ps.publish("attack-grid", coordinates);
    }
    // Disable checking bot board if AI active
    if (parentBoard.id == "bot" && cpuActive == false) {
      const dataX = Number(e.target.getAttribute("data-x"));
      const dataY = Number(e.target.getAttribute("data-y"));
      const coordinates = { owner: "bot", x: dataX, y: dataY };

      ps.publish("attack-grid", coordinates);
    }
  });

  function startGame() {
    disableAllBoards = false;
    playerMoved = false;
    topBoardsTurn = false;
    botBoardsTurn = true;
    // clear board status and rebuild ships
    resetBoard();
  }

  disableBoards();
  ps.subscribe("update-board", updateBoard);
  ps.subscribe("game-over", disableBoards);
  ps.subscribe("new-game", startGame);
  ps.subscribe("clear-board", resetBoard);
  ps.subscribe("cpu-on", () => {
    cpuActive = true;
  });
  ps.subscribe("cpu-off", () => {
    cpuActive = false;
  });
}
