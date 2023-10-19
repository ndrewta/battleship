import Ship from "../ship";

// Init ships
const ship1 = new Ship();
const ship2 = new Ship();

test("Hit target", () => {
  // Hit ships
  ship1.hit(ship2);
  expect(ship2.hits).toBe(1);
});

test("Check if sunk", () => {
  // Hit ship 4 times then check if sunk
  for (let i = 0; i < 4; i++) {
    ship1.hit(ship2);
  }

  expect(ship2.isSunk()).toBe(true);
});
