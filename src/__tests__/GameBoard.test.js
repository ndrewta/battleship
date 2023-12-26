import GameBoard from "../GameBoard.js";
import Ship from "../Ship.js";

// Init gameboard
let ship;
let gb;

beforeEach(() => {
  // Init ship
  ship = new Ship(4);
  gb = new GameBoard("test", "top");
});
afterEach(() => {
  ship = null;
  gb = null;
});

test("place ship downwards", () => {
  gb.placeShipDown(ship, 7, 5);
  expect(gb.grid[7][2]).toBe(ship);
});

test("place ship rightwards", () => {
  gb.placeShipRight(ship, 3, 4);
  expect(gb.grid[6][4]).toBe(ship);
});

test("receiveAttack coord hit", () => {
  gb.placeShipDown(ship, 7, 5);
  gb.receiveAttack({ owner: "top", x: 7, y: 4 });
  expect(gb.grid[7][4].status).toMatch("hit");
});

test("receiveAttack ship damage", () => {
  gb.placeShipDown(ship, 7, 5);
  gb.receiveAttack({ owner: "top", x: 7, y: 5 });
  expect(ship.hits).toBe(1);
});

test("receiveAttack miss", () => {
  gb.receiveAttack({ owner: "top", x: 1, y: 1 });
  expect(gb.grid[1][1].status).toMatch("miss");
});

test("ships still not sunk", () => {
  gb.placeShipRight(ship, 2, 4);
  expect(gb.checkPlayerShips()).toBe(false);
});

test("ships all sunk", () => {
  gb.placeShipDown(ship, 5, 4);

  for (let y = 4; y >= 1; y--) {
    gb.receiveAttack({ owner: "top", x: 5, y });
  }
  expect(gb.checkPlayerShips()).toBe(true);
});
