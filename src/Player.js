export default class Player {
  constructor(name) {
    this.name = name;
  }

  selectedMoves = [];

  cpuSelect(x = 10, y = 10) {
    let cpuMove;

    const randomCoord = () => {
      // Generate random coordinates
      const obj = {};
      const coordX = Math.floor(Math.random() * x) + 1;
      const coordY = Math.floor(Math.random() * y) + 1;
      obj.x = coordX;
      obj.y = coordY;
      return obj;
    };

    const checkMoves = (newMove) => {
      // Check if coordinates have been selected previously
      for (const move of this.selectedMoves) {
        if (move.x === newMove.x && move.y === newMove.y) {
          return true;
        }
      }
      return false;
    };

    while (true) {
      // Continue looping until a unique coordinate is found
      cpuMove = randomCoord();
      if (!checkMoves(cpuMove)) {
        break;
      }
    }

    this.selectedMoves.push(cpuMove);

    return cpuMove;
  }
}
