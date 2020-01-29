// 純函數
function add(num1, num2) {
    return num1 + num2;
}

console.log(add(1, 5));
console.log(add(12, 15));

// 因為無法預測給定的輸出，所以是不純函數
function addRandom(num1) {
    return num1 + Math.random();
}

console.log(addRandom(5));

// pure function and side effect
// 因為有一個外在變數 previousResult
let previousResult = 0;

function addMoreNumbers(num1, num2) {
    const sum = num1 + num2;
    previousResult = sum;
    return sum;
}

console.log(addMoreNumbers(1,5));

// pure function and side effect
const hobbies = ['Sports', 'Cooking'];
function printHobbies(h) {
    h.push('NEW HOBBY');
    console.log(h);
}

printHobbies(hobbies);

// impure
function sendDataToServer() {}

// factory pattern
// 假如處理不同稅收的金額 可以使用此解決方式
// 一般方式
// function calculateTax(amount, tax) {
//     return amount * tax;
// }

// const vatAmount = calculateTax(100, 0.19);
// const incomTax = calculateTax(100, 0.25);

let multiplier = 1.1;

function createTaxCalculator(tax) {
    function calculateTax(amount) {
        // 因為 multiplier 是全局，如果發生更改，此函數會使用最新的值
        console.log(multiplier); // 1.2
        return amount * tax * multiplier;
    }
    return calculateTax;
}

multiplier = 1.2;

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

// closures 閉包概念就是工廠功能
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
// 因此，一個函數，Javascript中的每個函數都是一個閉包，因為它會封閉在閉包中定義的變數
// 它的環境並能記住變數，這樣當您在不需要使用這些全域變數時，它們不會被扔掉
// 因此，即使在本地不使用乘數，因此在全域範圍內，實際上也不會被使用了，
// Javascript仍不會丟棄這裡存儲的值，因為在此內部函數中
// 我們仍然可能會使用它，因此此內部函數關閉了周圍的變數並存儲了它們值，
// 這樣即使您在其他任何地方都不需要它們，您仍然可以從內部使用它們

let userName = 'Max';

// JS在創建和登錄這個函數的時候，並不會複製 userName值
// 而是訪問時可以取得哪一個變數的值 (指針)
// 所以當呼叫這個函數時，會去找這備變數的值，目前最新的值是多少
function greetUser() {
    let name = userName;
    let name1 = 'Anna';
    console.log('Hi ' + userName); // Hi Manuel
    console.log('Hi ' + name); // Hi Manuel
    console.log('Hi ' + name1); // Hi Anna，因為 name1 是在函數內部創建的變數，所以不會是 Maximilian
}

let name1 = 'Maximilian';
userName = 'Manuel';

greetUser(); // Hi Manuel

// IIFEs
// 因為 舊的 JS 沒有 let 和 const 的宣告方式來解決 block
(function() {
    var age = 30;
    console.log(age); // 30
})()
 
// console.log(age); // Error: "age is not defined"

{
    const age = 30;
    console.log(age); // 30
}
 
// console.log(age); // Error: "age is not defined"

// 遞迴
function powerOf(x, n) {

    // if (n === 1) {
    //     return x;
    // }
    // return x * powerOf(x, n - 1);
    return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3)); // 2 * 2 * 2

function outerFun(x){
    function innerFun(){
		x++
		console.log(x);
    }
    return innerFun;
}
// 閉包會記錄 innerFun() x 的值
var num = outerFun(1);
num();//2
num();//3

for(var i=0; i<3; i++){
    setTimeout(function(){
        console.log(i);
    },0)
} // 3 3 3

function showIndex(index){
    return ()=> console.log(index);
}

function counter(){
    let i = 0;
    for (i = 0; i< 5; i++) {
        setTimeout(showIndex(i), 1000);
    }
}
counter();