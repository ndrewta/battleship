import Ship from "../Ship";

// Init ships
const ship = new Ship(4);

test("Hit target", () => {
  // Hit ships
  ship.hit();
  expect(ship.hits).toBe(1);
});

test("Check if sunk", () => {
  // Hit ship 4 times then check if sunk
  for (let i = 0; i < ship.length; i++) {
    ship.hit();
  }

  expect(ship.isSunk()).toBe(true);
});
