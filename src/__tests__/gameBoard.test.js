import GameBoard from "../GameBoard.js";
import Ship from "../Ship";

// Init gameboard
let ship;
let gb;

beforeEach(() => {
  // Init ship
  ship = new Ship();
  gb = new GameBoard();
});
afterEach(() => {
  ship = null;
  gb = null;
});

test("place ship upwards", () => {
  gb.placeShip(ship, 4, 5);
  expect(gb.grid[4][7]).toBe(ship);
});

test("place ship downwards", () => {
  gb.placeShip(ship, 5, 4);
  expect(gb.grid[5][2]).toBe(ship);
});

test("place ship leftwards", () => {
  gb.placeShip(ship, 4, 5);
  expect(gb.grid[2][5]).toBe(ship);
});

test("place ship rightwards", () => {
  gb.placeShip(ship, 5, 4);
  expect(gb.grid[7][4]).toBe(ship);
});

test("receiveAttack coord hit", () => {
  gb.placeShip(ship, 4, 5);
  gb.receiveAttack(4, 5);
  expect(gb.grid[4][5].status).toMatch("hit");
});

test("receiveAttack ship damage", () => {
  gb.placeShip(ship, 4, 5);
  gb.receiveAttack(4, 5);
  expect(gb.grid[4][5].hits).toBe(1);
});

test("receiveAttack miss", () => {
  gb.receiveAttack(1, 1);
  expect(gb.grid[1][1].status).toMatch("miss");
});

test("ships still not sunk", () => {
  gb.placeShip(ship, 4, 5);
  expect(gb.checkPlayerShips()).toBe(false);
});

test("ships all sunk", () => {
  gb.placeShip(ship, 5, 4);
  ship.sunk = true;
  expect(gb.checkPlayerShips()).toBe(true);
});
