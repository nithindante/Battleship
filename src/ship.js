let ship = class {
  constructor(length, hit) {
    this.length = length;
    this.hit = hit;
  }

  hits() {
    this.hit++;
  }

  isSunk() {
    if (this.length == 4 && this.hit == 4) {
      return true;
    } else if (this.length == 3 && this.hit == 3) {
      return true;
    } else if (this.length == 2 && this.hit == 2) {
      return true;
    } else if (this.length == 1 && this.hit == 1) {
      return true;
    } else {
      return false;
    }
  }
};

export { ship };
