import "./style.css";
import { ship } from "./ship.js";
import { gameBoard } from "./gameBoard.js";

let cruiserShip = new ship(7, 3);
cruiserShip.hits();
cruiserShip.isSunk();

let board1 = new gameBoard();
console.log(board1);
