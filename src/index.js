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
let botPlayer = new Player("PLAYER 1");
let topPlayer = new Player("PLAYER 2");

// Gameboard setup
let botPlayerBoard = new GameBoard(botPlayer, "bot");
let topPlayerBoard = new GameBoard(topPlayer, "top");

// Bottom Player ships
let botShip1 = new Ship();
let botShip2 = new Ship();
let botShip3 = new Ship();
let botShip4 = new Ship();

// Top player ships
let topShip1 = new Ship();
let topShip2 = new Ship();
let topShip3 = new Ship();
let topShip4 = new Ship();

function newGame() {
  // Bottom player ships
  botShip1 = null;
  botShip2 = null;
  botShip3 = null;
  botShip4 = null;

  botShip1 = new Ship(2);
  botShip2 = new Ship(3);
  botShip3 = new Ship(4);
  botShip4 = new Ship(4);

  // Top player ships
  topShip1 = null;
  topShip2 = null;
  topShip3 = null;
  topShip4 = null;

  topShip1 = new Ship(2);
  topShip2 = new Ship(3);
  topShip3 = new Ship(4);
  topShip4 = new Ship(4);

  ps.publish("reset-values");

  // Place player ships
  botPlayerBoard.placeShipDown(botShip1);
  botPlayerBoard.placeShipDown(botShip2);
  botPlayerBoard.placeShipRight(botShip3);
  botPlayerBoard.placeShipRight(botShip4);

  // Place CPU ships
  topPlayerBoard.placeShipDown(topShip1);
  topPlayerBoard.placeShipDown(topShip2);
  topPlayerBoard.placeShipRight(topShip3);
  topPlayerBoard.placeShipRight(topShip4);

  // Update both grids
  botPlayerBoard.updateGrid("bot");
  topPlayerBoard.updateGrid("top");
}

ps.subscribe("new-game", newGame);
