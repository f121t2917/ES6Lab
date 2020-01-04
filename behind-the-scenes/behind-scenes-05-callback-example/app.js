const addListenerBtn = document.getElementById('add-listener-btn');
const clickableBtn = document.getElementById('clickable-btn');
const messageInput = document.getElementById('click-message-input');

// 宣告 person
let person = {name: 'Max'};

// 這時 {name: 'Max'} 未被指向時，{name: 'Max'} 就會被清除
// (Garbage Collection 不會馬上執行，使用演算法找到資源而清除它)
person = null;

function printMessage() {
  const value = messageInput.value;
  console.log(value || 'Clicked me!');
}

// function addListener() {
  // clickableBtn.addEventListener('click', printMessage);
// }

// 如果將上面方式改成下方的情況下，點擊多次會一直新增一個新函數到監聽器上
function addListener() {
  clickableBtn.addEventListener('click', function () {
    const value = messageInput.value;
    console.log(value || 'Clicked me!');
  });
}

addListenerBtn.addEventListener('click', addListener);
