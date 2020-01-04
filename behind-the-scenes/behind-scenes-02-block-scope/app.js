var varName = 'varMax';
let letName = 'letMax';
let letGlobalHobbies;

if (letName === 'letMax') {
  // varHobbies 會是 global
  var varHobbies = ['varSports', 'varCooking'];
  // letHobbies 只在區塊內
  let letHobbies = ['letSports', 'letCooking'];
  
  letGlobalHobbies = ['letGlobalSports', 'letGlbalCooking'];

  console.log(varHobbies);
  console.log(letHobbies);
}

function greet() {
  let age = 30;
  let name = 'Manuel';
  // console.log(name, age, letHobbies); //Uncaught ReferenceError: letHobbies is not defined
  
  // varHobbies 會是上面 global varHobbies 的值
  console.log(name, age, varHobbies);
}

// varHobbies 會是上面 global varHobbies 的值
console.log(varName, varHobbies);
// console.log(letName, letHobbies); // Uncaught ReferenceError: letHobbies is not defined

// 全域
console.log(letGlobalHobbies);

greet();


// Hoisting
// 如果 var 變數在下面宣告時，console.log 會顯示 undefined
// 因為瀏覽器在加載script時，會遍歷整個script，並且會執行以下操作
// 1. 自動加載並註冊函數，以便可以實際使用
// 2. 使用 var，會將此變數宣告「提升」到文件的開頭(原理跟移動程式碼到最上面沒有關係)，且分配了undefined的初始值
// 而使用 let 它只是一種聲明，不會分配任何初始值
console.log(userName);
var userName = 'Max';


// 如果 let 變數在下面宣告時，console.log 會顯示 Uncaught ReferenceError: Cannot access 'letUserName' before initialization
console.log(letUserName);
let letUserName = 'Max';


// console.log(a) // undefined
// var a = 5
// 可以把上面程式碼想像拆成下方程式碼
// 只有前面的變數宣告會被提升，賦值不會
var a;
console.log(a); // undefined
a = 5;

// function test(v){
//   console.log(v);
//   var v = 3;
// }
// test(10);
// 上面程式碼 轉變過程

// 1.
// function test(v){
//   var v;
//   console.log(v); // 10
//   v = 3;
// }
// test(10);

// 2.
// function test(v){
//   var v = 10; // 因為下面呼叫 test(10)
//   var v;
//   console.log(v);
//   v = 3;
// }
// test(10);

// 3.
// function test(v){
//   var v; // 做一次 Hoisting
//   v = 10;
//   console.log(v);
//   v = 3;
// }
// test(10);


// function 的宣告也會提升而且優先權比較高
// console.log(a) //[Function: a]
// var a
// function a(){}


// let 也會提升，但提升後的行為跟 var 比較不一樣
var b = 10;
function testb(){
  console.log(b); // ReferenceError: a is not defined
  let b;
}
testb();

// javascript 為什麼需要 Hoisting
// 如果 function 一定要先宣告才可以使用，那每個檔案你都必須把 function 宣告放到最上面去
// 才能保證你底下的程式碼都可以 call 到這些 function


// Hoisting 解決另一個問題，讓 function 不能互相呼叫
// 下面的程式碼就不可能達成，因為不可能同時做到 A 在 B 上面而 B 又在 A 上面
function loop(n){
  if (n>1) {
    logEvenOrOdd(--n)
  }
}

function logEvenOrOdd(n) {
  console.log(n, n % 2 ? 'Odd' : 'Even')
  loop(n)
}

loop(10)