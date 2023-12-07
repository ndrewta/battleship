import "./style.css";
import createLayout from "./layout";
import Player from "./Player";
import GameBoard from "./GameBoard";
import Ship from "./Ship";
import ps from "./pubSub";

// Create board layout
createLayout("container");

// Create players
const player = new Player("YOU");
const cpu = new Player("CPU");

// Gameboard setup
const playerBoard = new GameBoard(player);
const CPUBoard = new GameBoard(cpu);

// Player ships
const playerShip1 = new Ship();
const playerShip2 = new Ship();
const playerShip3 = new Ship();
const playerShip4 = new Ship();

// Place player ships
playerBoard.placeShipDown(playerShip1, 10, 9);
playerBoard.placeShipDown(playerShip2, 1, 5);
playerBoard.placeShipDown(playerShip3, 4, 8);
playerBoard.placeShipDown(playerShip4, 6, 4);

// CPU ships
const CPUShip1 = new Ship();
const CPUShip2 = new Ship();
const CPUShip3 = new Ship();
const CPUShip4 = new Ship();

// Place CPU ships
CPUBoard.placeShipDown(CPUShip1, 10, 9);
CPUBoard.placeShipDown(CPUShip2, 1, 5);
CPUBoard.placeShipDown(CPUShip3, 4, 8);
CPUBoard.placeShipDown(CPUShip4, 6, 4);

playerBoard.updateGrid("bot");
CPUBoard.updateGrid("top");

ps.subscribe("attack-grid-top", (e) => CPUBoard.receiveAttack(e));
ps.subscribe("attack-grid-bot", (e) => playerBoard.receiveAttack(e));
