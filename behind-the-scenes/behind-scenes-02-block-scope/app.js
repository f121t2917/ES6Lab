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
// 2. 使用 var，會將此變數宣告拉到文件的開頭，且分配了undefined的初始值
// 而使用 let 它只是一種聲明，不會分配任何初始值
console.log(userName);
var userName = 'Max';

// 如果 let 變數在下面宣告時，console.log 會顯示 Uncaught ReferenceError: Cannot access 'letUserName' before initialization

console.log(letUserName);
let letUserName = 'Max';