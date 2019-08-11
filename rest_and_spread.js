// Rest and Spread Operator
// 正常情況numbers需要是陣列
function addNumbers(numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers([1, 2, 3, 4, 5]);

// 如果不是陣列的情況 可使用 ...在參數
function addNumbers1(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

// ... 將所有參數變成一個陣列
addNumbers1(1, 2, 3, 4, 5, 6, 7); // [1, 2, 3, 4, 5, 6, 7]
// 只有一個陣列參數
addNumbers1([1, 2, 3, 4, 5, 6, 7]);



// 另一種情況，差別在參數是陣列，然後使用...
const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];

// 會先建立一個陣列[]
// 而...defaultColors 會展平，結果是 'red', 'green'
[ 'green', 'bule', ...defaultColors, ...userFavoriteColors];

// example
function validateShoppingList(...items) {
  if (items.indexOf('milk') < 0) {
  	return ['milk', ...items];
  }
  
  return items;
}

validateShoppingList('bread', 'apple', 'eggs');



// example
const MathLibrary = {
  calculateProduct(a, b) {
    return a * b;
  }
};

// 如果過了一段時間想改method name，但又很多地方有用到
const MathLibrary = {
  calculateProduct(...rest) {
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  }
};


// exam
// Many, Many Arguments
function product(...numbers) {
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}

// exam
// Spreadin' Arrays
function join(array1, array2) {
  return [...array1, ...array2];
}

// exam
function unshift(array, ...array1) {
  return [...array1, ...array];
}
