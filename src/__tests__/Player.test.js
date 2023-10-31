import Player from "../Player";

const player = new Player();

test("cpu doesn't hit same coord twice", () => {
  let x1y1 = 0;
  let x1y2 = 0;
  let x1y3 = 0;
  let x1y4 = 0;
  let arr = [];

  const firstPick = player.cpuSelect(1, 4);
  const secondPick = player.cpuSelect(1, 4);
  const thirdPick = player.cpuSelect(1, 4);
  const fourthPick = player.cpuSelect(1, 4);

  arr.push(firstPick);
  arr.push(secondPick);
  arr.push(thirdPick);
  arr.push(fourthPick);

  arr.forEach((pick) => {
    // eslint-disable-next-line default-case
    switch (pick.y) {
      case 1:
        x1y1 += 1;
        break;
      case 2:
        x1y2 += 1;
        break;
      case 3:
        x1y3 += 1;
        break;
      case 4:
        x1y4 += 1;
        break;
    }
  });

  expect(x1y1 && x1y2 && x1y3 && x1y4).toBe(1);
});
