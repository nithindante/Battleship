import { ship } from "../src/ship.js";
import { gameBoard } from "../src/gameBoard.js";

// test("ship", () => {
//   let cruiserShip = new ship(4, 2);
//   cruiserShip.hits();
//   cruiserShip.hits();
//   expect(cruiserShip.isSunk()).toBe(true);
// });

// test("Place ships at specific coordinates ", () => {
//   let cruiserShip = new ship(4, 0);
//   let board1 = new gameBoard();
//   board1.placeShips(cruiserShip, "b2");
//   expect(board1.arr[1][1]).toBe("X");
// });

// test("Place ships at specific coordinates ", () => {
//   let Battleship = new ship(5, 0);
//   let board1 = new gameBoard();
//   board1.placeShips(Battleship, "f3");
//   expect(board1.arr[2][5]).toBe("X");
// });

test("Check whether a Ship is hit or not ", () => {
  let Battleship = new ship(5, 0);
  let board1 = new gameBoard();
  board1.placeShips(Battleship, "f3");
  console.log(board1.arr);
  expect(board1.receiveAttack("f3")).toBe(true);
  // expect(board1.arr[2][1]).toBe("X");
});
