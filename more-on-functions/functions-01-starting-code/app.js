// 當Javascript讀取我們的腳本時，它基本上首先遍歷整個腳本，找到所有我們添加的這些函數聲明，
// 將它們註冊，然後真正開始執行腳本，我們可以隨意調用我們的函數，
// 因此我們擁有可以在程序的不同位置多次執行的代碼。

// Parameters vs Arguments
// function sayHi(name) { ... } // name is a parameter
// sayHi('Max'); // 'Max' is an argument

// const person = {
//     name: 'Max',
//     greet: function gree() {
//         console.log('Hello there!');
//     }
// };

// person.greet();

const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
    console.log('Game is starting...');
}
// 也可以利用下面表達示建立一個函數，把函數儲在變數中
// const start = function startGame() {
const start = function () { // 匿名函數 anonymous function
    console.log('Game is start...');
};

console.log(typeof startGame);

// function 本身也是 object
console.dir(startGame);

startGameBtn.addEventListener('click', start);

// 為什麼要使用匿名函數
// 一般函數必需定義、先初始化，再調用，如果沒有初始化會無法調用，但 function 可以 (因為Hoisting)

// 一般使用 function 的情況下
test1(); // 執行正常
function test1() {
    console.log('test1');
}

// 當系統大且多人開發的時候 一般定義 function 方式有可能會造成維護上的困難
test2(); // Cannot access 'test2' before initialization

var test2 = function () {
    console.log('test2');
};