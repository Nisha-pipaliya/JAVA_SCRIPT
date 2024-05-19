// // script.js
// function rollDice() {
//     const dice = document.getElementById('dice');
//     const faces = dice.getElementsByClassName('face');

//     // Hide all faces
//     for (let face of faces) {
//         face.style.display = 'none';
//     }

//     // Show one random face
//     const randomFace = Math.floor(Math.random() * 6) + 1;
//     document.getElementById('face' + randomFace).style.display = 'flex';
// }

// // Initialize the dice to show face 1 at the beginning
// document.addEventListener('DOMContentLoaded', () => {
//     rollDice();
// });


// script.js
// function rollDice() {
//     const dice = document.getElementById('dice');
//     dice.innerHTML = ''; // Clear previous dots

//     const dotsPosition = [
//         [], // No dots for face 0, should never be used
//         [4], // Face 1: Center
//         [0, 8], // Face 2: Top-left, Bottom-right
//         [0, 4, 8], // Face 3: Top-left, Center, Bottom-right
//         [0, 2, 6, 8], // Face 4: Corners
//         [0, 2, 4, 6, 8], // Face 5: Corners + Center
//         [0, 2, 3, 5, 6, 8] // Face 6: Corners + Middle sides
//     ];

//     // Generate random number between 1 and 6
//     const randomFace = Math.floor(Math.random() * 6) + 1;

//     // Place dots according to the random face
//     dotsPosition[randomFace].forEach(position => {
//         const dot = document.createElement('div');
//         dot.classList.add('dot');
//         dice.appendChild(dot);

//         // Position the dot within the dice grid
//         dot.style.gridArea = {
//             0: '1 / 1 / 2 / 2', // Top-left
//             1: '1 / 2 / 2 / 3', // Top-center
//             2: '1 / 3 / 2 / 4', // Top-right
//             3: '2 / 1 / 3 / 2', // Middle-left
//             4: '2 / 2 / 3 / 3', // Center
//             5: '2 / 3 / 3 / 4', // Middle-right
//             6: '3 / 1 / 4 / 2', // Bottom-left
//             7: '3 / 2 / 4 / 3', // Bottom-center
//             8: '3 / 3 / 4 / 4'  // Bottom-right
//         }[position];
//     });
// }

// // Initialize the dice to show a random face at the beginning
// document.addEventListener('DOMContentLoaded', rollDice);








// // Player name 
// var player1 = "Player 1"; 
// var player2 = "Player 2"; 

// // Function to change the player name 
// function editNames() { 
//     player1 = prompt("Change Player1 name"); 
//     player2 = prompt("Change player2 name"); 

//     document.querySelector("p.Player1").innerHTML = player1; 
//     document.querySelector("p.Player2").innerHTML = player2; 
// } 

// // Function to roll the dice 
// function rollTheDice() { 
//     setTimeout(function () { 
//         var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
//         var randomNumber2 = Math.floor(Math.random() * 6) + 1; 

//         document.querySelector("./dice_img/dice1.png").setAttribute("src", 
//             "dice" + randomNumber1 + ".png"); 

//         document.querySelector("./dice_img/dice2.png").setAttribute("src", 
//             "dice" + randomNumber2 + ".png"); 

//         if (randomNumber1 === randomNumber2) { 
//             document.querySelector("h1").innerHTML = "Draw!"; 
//         } 

//         else if (randomNumber1 < randomNumber2) { 
//             document.querySelector("h1").innerHTML 
//                             = (player2 + " WINS!"); 
//         } 

//         else { 
//             document.querySelector("h1").innerHTML 
//                             = (player1 + " WINS!"); 
//         } 
//     }, 2500); 
// } 







var elDiceOne       = document.getElementById('dice1');
var elDiceTwo       = document.getElementById('dice2');
var elComeOut       = document.getElementById('roll');

elComeOut.onclick   = function () {rollDice();};

function rollDice() {

  var diceOne   = Math.floor((Math.random() * 6) + 1);
  var diceTwo   = Math.floor((Math.random() * 6) + 1);
 
  console.log(diceOne + ' ' + diceTwo);

  for (var i = 1; i <= 6; i++) {
    elDiceOne.classList.remove('show-' + i);
    if (diceOne === i) {
      elDiceOne.classList.add('show-' + i);
    }
  }

  for (var k = 1; k <= 6; k++) {
    elDiceTwo.classList.remove('show-' + k);
    if (diceTwo === k) {
      elDiceTwo.classList.add('show-' + k);
    }
  } 
  setTimeout(rollDice(), 1000);
}

