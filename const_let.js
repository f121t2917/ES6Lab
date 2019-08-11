function count(targetString) {
  
  // 使用const 可以讓其他人知道 const是沒有要改變的
  const characters = ['a', 'e', 'i', 'o', 'u'];
  // 使用let 可知道這是表示一個可改變且初始的
  let number = 0;
  
  for (var i = 0; i < targetString.length; i++) {
    if (characters.includes(targetString[i])) {
      number++;
    }
  }
  
  return number;
}

count('aeiobzxceiaipbixo');

// exam
const statuses = [
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your reqeust is still pending' }
];
let message = '';
const currentCode = 'OK';

for (let i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}
