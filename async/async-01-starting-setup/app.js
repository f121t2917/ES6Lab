const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  console.log('Clicked!');
}

button.addEventListener('click', trackUserHandler);

// 一般情況下必須等下面迴圈跑完才能執行 button click 
let result = 0;
for (let i = 0; i < 100000000; i++) {
  result += i;
}

console.log(result);