"use strict";

let btns = document.querySelectorAll(".square");
let text = document.querySelector(".template .text");
let squares = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [6, 4, 2],
];

// const change = document.querySelector(".dropdown-select");

// *********************************************************

class TicTacToe {
  constructor(text, btns, squares) {
    this.text = text;
    this.btns = btns;
    this.squares = squares;
    this.playerX = true;
    this.clear;
  }

  // *********************************************************

  clear() {
    this.filteredArray = "";
    this.array = [];
    this.text.style.display = "flex";
    this.playerX = false;
  }

  // *********************************************************

  turn(btn) {
    if (!this.playerX) return;
    document.getElementById(btn).innerText = "x";
  }

  // *********************************************************
  random() {
    this.array = [...this.btns];

    this.filteredArray = this.array.filter((item) => {
      return item.innerText == "";
    });

    if (this.winner("x")) return;
    if (this.filteredArray.length == "") return;
    return (this.filteredArray[
      Math.floor(Math.random() * this.filteredArray.length)
    ].innerText = "o");
  }

  // *********************************************************

  winner(player) {
    for (let array of this.squares) {
      let all = array.every(
        (ele) => document.getElementById("item" + ele).innerText == player
      );
      if (all) {
        this.clear();
        this.text.innerText = `Player ${player} wins!`;
        setTimeout(() => {
          this.btns.forEach((btn) => {
            btn.innerText = "";
            console.log(btn);
          });
          this.playerX = true;
          this.text.style.display = "none";
          this.startGame();
        }, 3000);
        break;
      }

      if (
        !all &&
        [...this.btns].every((btn) => btn.innerText != "") &&
        ![...this.btns].some(
          (btn) => btn.innerText == "x" && btn.innerText == "o"
        ) &&
        this.filteredArray.length == ""
      ) {
        this.clear();
        this.text.innerText = "It's a draw!";
        setTimeout(() => {
          this.btns.forEach((btn) => {
            btn.innerText = "";
            console.log(btn);
          });
          this.playerX = true;
          this.text.style.display = "none";
          this.startGame();
        }, 3000);
      }
    }
  }

  startGame() {
    this.btns.forEach((btn) => {
      // btn.innerText = "";

      if (
        [...document.querySelectorAll(".square")].every(
          (btn) => btn.innerText == ""
        )
      ) {
        btn.addEventListener("click", (event) => {
          if (event.target.innerText == "") {
            this.turn(event.target.id);
            this.random();
            this.winner("x");
            this.winner("o");
          }
        });
      }
    });
  }
}

const game = new TicTacToe(text, btns, squares);

game.startGame();

// btns.forEach((btn) => {
//   btn.innerText = "";

//   if (
//     [...document.querySelectorAll(".square")].every(
//       (btn) => btn.innerText == ""
//     )
//   ) {
//     btn.addEventListener("click", (event) => {
//       if (event.target.innerText == "") {
//         game.turn(event.target.id);
//         game.random();
//         game.winner("x");
//         game.winner("o");
//       }
//     });
//   }
// });

/*
function random(btn) {
  let btns = btn;

  let array = [...btns];

  let filteredArray = array.filter((item) => {
    return item.innerText == "";
  });

  console.log(filteredArray);

  if (filteredArray == "") return;

  return (filteredArray[
    Math.floor(Math.random() * filteredArray.length)
  ].innerText = "o");

  // console.log(filteredArray);
}

let btns = document.querySelectorAll(".square");
function turn() {
  let btns = document.querySelectorAll(".square");
  player = "x";

  btns.forEach((btn) => {
    // btn.innerText = "";
    btn.addEventListener("click", (event) => {
      if (event.target.innerText == "") {
        document.getElementById(event.target.id).innerText = player;
        random(btns);

        winner();

        // console.log(random() == "undefined");
      }
    });
  });
}
btns.forEach((btn) => {
  btn.addEventListener("click", turn);
  if (winner) btn.innerText = "";
});

// function turn() {
//   let btns = document.querySelectorAll(".square");
//   player = "x";

//   btns.forEach((btn) => {
//     btn.innerText = "";
//     btn.addEventListener("click", (event) => {
//       if (event.target.innerText == "") {
//         document.getElementById(event.target.id).innerText = player;
//         random(btns);

//         winner();

//         // console.log(random() == "undefined");
//       }
//     });
//   });
// }

function winner(player) {
  let isDraw = true;

  for (let array of squares) {
    let all1 = array.every(
      (ele) => document.getElementById("item" + ele).innerText == "x"
    );

    let all2 = array.every(
      (ele) => document.getElementById("item" + ele).innerText == "o"
    );

    if (all1) {
      isDraw = false;
      text.style.display = "flex";

      time(`x is wins!`);

      break;
    }
    if (all2) {
      isDraw = false;
      text.style.display = "flex";

      time(`o is wins!`);

      break;
    }
    if (
      !all1 &&
      !all2 &&
      isDraw &&
      [...document.querySelectorAll(".square")].every(
        (btn) => btn.innerText !== ""
      )
    ) {
      isDraw = false;

      text.style.display = "flex";
      text.innerText = `It's a draw!`;
      time("Drawe");
    }
  }
}

function time(player) {
  let number = 3;

  let players = player || "Draw";
  text.innerText = `Player ${player} ${number}`;

  setInt = setInterval(() => {
    number--;
    text.innerText = `Player  ${players} ${number}`;

    if (number < 0) {
      clearInterval(setInt);
      text.style.display = "none";

      startGame();
    }
  }, 1000);
}

function startGame() {
  clearInterval(setInt);
  document.querySelector(".turn").innerText = "X vs O";

  turn();
}

startGame();

document.querySelector(".replay").addEventListener("click", () => {
  text.style.display = "none";
  startGame();
});

//   btns.forEach((btn) => {
//     btn.innerText = "";
//     btn.addEventListener("click", (event) => {
//       if (event.target.innerText == "") {
//         if (player == "x") {
//           document.getElementById(event.target.id).innerText = player;
//           winner(player);

//           player = "o";
//           document.querySelector(".turn").innerText = `${player}`;
//         } else if (player == "o") {
//           document.getElementById(event.target.id).innerText = player;
//           winner(player);
//           player = "x";
//           document.querySelector(".turn").innerText = `${player}`;
//         }
//       }
//       random(btns);
//     });
//   });
// }

// function winner(player) {
//   let isDraw = true;

//   for (let array of squares) {
//     let all = array.every(
//       (ele) => document.getElementById("item" + ele).innerText == player
//     );

//     if (all) {
//       isDraw = false;
//       text.style.display = "flex";

//       time(`${player} wins!`);

//       break;
//     }
//     if (
//       isDraw &&
//       [...document.querySelectorAll(".square")].every(
//         (btn) => btn.innerText !== ""
//       )
//     ) {
//       isDraw = false;

//       text.style.display = "flex";
//       text.innerText = `It's a draw!`;
//       time("Drawe");
//     }
//   }
// }

// function time(player) {
//   let number = 3;

//   let players = player || "Draw";
//   text.innerText = `Player ${player} ${number}`;

//   setInt = setInterval(() => {
//     number--;
//     text.innerText = `Player  ${players} ${number}`;

//     if (number < 0) {
//       clearInterval(setInt);
//       text.style.display = "none";

//       startGame();
//     }
//   }, 1000);
// }

// function startGame() {
//   clearInterval(setInt);
//   document.querySelector(".turn").innerText = "X vs O";

//   turn();
// }

// startGame();

// document.querySelector(".replay").addEventListener("click", () => {
//   text.style.display = "none";
//   startGame();
// });
*/
