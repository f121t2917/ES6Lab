'use strict' // 開啟嚴格模式 必需放在最上面

userName = 'Max'; // Uncaught ReferenceError: userName is not defined

console.log(userName);

// 比較 var let

// 重複宣告
var varName = 'varMax';
var varName = 'varAnna'; // 不會error

let letName = 'letMax';
//let letName = 'Anna'; // Uncaught SyntaxError: Identifier 'letName' has already been declared

function greet() {
    let age = 30;
    let letName = 'letManuel'; // 在 function 區塊內
    var varName = 'varManuel';
    console.log(letName, varName, age);
}

console.log(varName);
console.log(letName);
greet();

