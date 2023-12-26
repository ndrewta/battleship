import "./style.css";
import createLayout from "./gameBoardLayout";
import Player from "./Player";
import GameBoard from "./GameBoard";
import Ship from "./Ship";
import statBoard from "./statBoard";
import ps from "./pubSub";

// Create board layout
statBoard();
createLayout();

// Create players
let player = new Player("PLAYER 1");
let cpu = new Player("CPU");

// Gameboard setup
let playerBoard = new GameBoard(player, "bot");
let CPUBoard = new GameBoard(cpu, "top");

// Player ships
let playerShip1 = new Ship();
let playerShip2 = new Ship();
let playerShip3 = new Ship();
let playerShip4 = new Ship();

// CPU ships
let CPUShip1 = new Ship();
let CPUShip2 = new Ship();
let CPUShip3 = new Ship();
let CPUShip4 = new Ship();

function newGame() {
  // Player ships
  playerShip1 = null;
  playerShip2 = null;
  playerShip3 = null;
  playerShip4 = null;

  playerShip1 = new Ship(2);
  playerShip2 = new Ship(3);
  playerShip3 = new Ship(4);
  playerShip4 = new Ship(4);

  // CPU ships
  CPUShip1 = null;
  CPUShip2 = null;
  CPUShip3 = null;
  CPUShip4 = null;

  CPUShip1 = new Ship(2);
  CPUShip2 = new Ship(3);
  CPUShip3 = new Ship(4);
  CPUShip4 = new Ship(4);

  ps.publish("reset-values");

  // Place player ships
  playerBoard.placeShipDown(playerShip1, ...generateCoords());
  playerBoard.placeShipDown(playerShip2, ...generateCoords());
  playerBoard.placeShipRight(playerShip3, ...generateCoords());
  playerBoard.placeShipRight(playerShip4, ...generateCoords());

  // Place CPU ships
  CPUBoard.placeShipDown(CPUShip1, ...generateCoords());
  CPUBoard.placeShipDown(CPUShip2, ...generateCoords());
  CPUBoard.placeShipRight(CPUShip3, ...generateCoords());
  CPUBoard.placeShipRight(CPUShip4, ...generateCoords());

  // Update both grids

  playerBoard.updateGrid("bot");
  CPUBoard.updateGrid("top");
}

function generateCoords() {
  let numX = Math.floor(Math.random() * 10) + 1;
  let numY = Math.floor(Math.random() * 10) + 1;
  let absDifference = Math.abs(numX - numY);
  let coordinates = [numX, numY];

  while (absDifference > 4 || absDifference == 0) {
    numX = Math.floor(Math.random() * 10) + 1;
    numY = Math.floor(Math.random() * 10) + 1;
    absDifference = Math.abs(numX - numY);
  }

  return coordinates;
}

ps.subscribe("new-game", newGame);

const testBtn = document.getElementById("test");
testBtn.style.pointerEvents = "auto";
testBtn.addEventListener("click", () => generateCoords());
