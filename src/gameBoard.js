let gameBoard = class {
  constructor() {
    this.arr = this.initaliseArray();
  }

  initaliseArray() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push([]);
      for (let j = 0; j < 10; j++) {
        arr[i].push(["", ""]);
      }
    }
    return arr;
  }

  splitCoordinates(coordinates) {
    let coordinate = coordinates.split("");
    let secondCoordinate = this.col(coordinate[0]) - 1;
    let firstCoordinate = coordinate[1] - 1;
    let coordinateArr = [];
    coordinateArr.push(firstCoordinate);
    coordinateArr.push(secondCoordinate);
    return coordinateArr;
  }

  placeShips(names, coordinates) {
    let coordinateArr = this.splitCoordinates(coordinates);
    console.log(names);
    for (let i = 0; i < 10; i++) {
      if (i == coordinateArr[0]) {
        for (let j = 0; j < 10; j++) {
          if (j == coordinateArr[1]) {
            if (coordinateArr[1] > 5) {
              for (let k = j; k > j - names.length; k--) {
                this.arr[i][k][0] = "X";
                this.arr[i][k][1] = names.length;
              }
            } else {
              for (let k = j; k < names.length + j; k++) {
                this.arr[i][k][0] = "X";
                this.arr[i][k][1] = names.length;
              }
            }
          }
        }
      }
    }
  }

  receiveAttack(coordinates) {
    let markerArr = this.splitCoordinates(coordinates);
    if (this.arr[markerArr[0]][markerArr[1]] == "X") {
      return true;
    }
  }

  col = (s) => s.toLowerCase().charCodeAt(0) - 96;
};

export { gameBoard };
