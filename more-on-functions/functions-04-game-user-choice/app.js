// 猜拳遊戲
const startGameBtn = document.getElementById('start-game-btn'); 

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINDS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINDS';

let gameIsRunning = false;

// 玩家選擇
const getPlayerChoice = function() {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

// 電腦選擇
const getComputerChoice = function() {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  }else if (randomValue < 0.67) {
    return PAPER;
  }else {
    return SCISSORS;
  }
};

// 取得 Winner
// const getWinner = function(cChoice, pChoice) {
//   if (cChoice === pChoice) {
//     return RESULT_DRAW
//   } else if (
//     (cChoice === ROCK && pChoice === PAPER) ||
//     (cChoice === PAPER && pChoice === SCISSORS) ||
//     (cChoice === SCISSORS && pChoice === ROCK)
//   ){
//     return RESULT_PLAYER_WINS;
//   }else {
//     return RESULT_COMPUTER_WINS;
//   }
// };

// 使用 arrow function 加 三元運算
// const getWinner = (cChoice, pChoice) => {
//   return cChoice === pChoice
//     ? RESULT_PLAYER_WINS
//     : (cChoice === ROCK && pChoice === PAPER) ||
//       (cChoice === PAPER && pChoice === SCISSORS) ||
//       (cChoice === SCISSORS && pChoice === ROCK)
//     ? RESULT_PLAYER_WINS
//     : RESULT_COMPUTER_WINS;
// };

// 把 {} 拿掉 例如
// const add = (a, b) => a + b;
// const add = function (a, b) { return a + b; }
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => 
  cChoice === pChoice
    ? RESULT_PLAYER_WINS
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;


startGameBtn.addEventListener('click', function() {
  if (gameIsRunning) {
    return;
  }
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoice);
  console.log(winner);
  let message = `You picked ${playerChoice}, computer picked ${computerChoice}, therefore you `;
  if (winner === RESULT_DRAW) {
    message = message + 'had a draw.';
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + 'won.';
  } else {
    message = message + 'lost.';
  }
  alert(message);
  gameIsRunning = false;
});

// not related to game
// Rest parameter 其餘參數
const sumUp = (a, b, ...numbers) => {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
};

// 使用arguments
const subtractUp = function() {
  let sum = 0;
  for (const num of arguments) {
    sum -= num;
  }
  return sum;
}

console.log(sumUp(1, 5, 10, -3, 6, 10));
console.log(subtractUp(1, 5, 10, -3, 6, 10));