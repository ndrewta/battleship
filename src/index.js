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
let player = new Player("YOU");
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

  playerShip1 = new Ship();
  playerShip2 = new Ship();
  playerShip3 = new Ship();
  playerShip4 = new Ship();

  // CPU ships
  CPUShip1 = null;
  CPUShip2 = null;
  CPUShip3 = null;
  CPUShip4 = null;

  CPUShip1 = new Ship();
  CPUShip2 = new Ship();
  CPUShip3 = new Ship();
  CPUShip4 = new Ship();

  ps.publish("reset-values");

  // Place player ships
  playerBoard.placeShipDown(playerShip1, 10, 9);
  // playerBoard.placeShipDown(playerShip2, 1, 5);
  // playerBoard.placeShipDown(playerShip3, 4, 8);
  // playerBoard.placeShipDown(playerShip4, 6, 4);

  // Place CPU ships
  CPUBoard.placeShipDown(CPUShip1, 10, 9);
  // CPUBoard.placeShipDown(CPUShip2, 1, 5);
  // CPUBoard.placeShipDown(CPUShip3, 4, 8);
  // CPUBoard.placeShipDown(CPUShip4, 6, 4);

  // Update both grids

  playerBoard.updateGrid("bot");
  CPUBoard.updateGrid("top");
}

ps.subscribe("new-game", newGame);
