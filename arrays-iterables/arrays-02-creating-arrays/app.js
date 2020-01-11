const numbers = [1, 2, 3];
console.log(numbers);

// const moreNumbers = new Array(); // 等於 []
// const moreNumbers = new Array('Hi', 'Welcome'); 

// const moreNumbers = Array(5, 2);
// console.log(moreNumbers);

// 但只有一個數值，會產生一個 長度5的空陣列
// const moreNumbers = new Array(5); 
// const moreNumbers = Array(5); 

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);


// Array.from，將 Iterables 轉成陣列
const moreNumbers = Array.from([1, 2, 3]);
const moreString = Array.from('Hi!'); // (3) ["H", "i", "!"]

const listItems = document.querySelectorAll('li');
console.log(listItems); // NodeList(3) [li, li, li]

const arrayListItems = Array.from(listItems);
console.log(arrayListItems); // (3) [li, li, li]

const hobbies = ['Cooking', 'Sports'];
const personalData = [30, 'Max', {moreDetail:[]}];

// push 增加
hobbies.push('Reading');

// 新增至開頭 (可多個)
// var arr = [1, 2];
// arr.unshift(-2, -1); // = 5
// arr is [-2, -1, 1, 2]
// arr.unshift([-3]);
// arr is [[-3], -2, -1, 1, 2]
hobbies.unshift('Coding');

const popedValue = hobbies.pop();
// 所有元素向左移一位
hobbies.shift();

console.log(hobbies); // (2) ["Cooking", "Sports"]
// 如果元素只有2個 index 只有 0, 1
// 加入一個 index 5 的元素
hobbies[5] = 'Reading'; // rarely used
console.log(hobbies); // (6) ["Cooking", "Sports", empty × 3, "Reading"]

// splice(刪除的起始位置, 刪除個數, 加入的元素)
hobbies.splice(1, 0, 'Good Food');
console.log(hobbies); // (7) ["Cooking", "Good Food", "Sports", empty × 3, "Reading"]

// 刪除最後一個
const removedElements = hobbies.splice(-1, 1);
console.log(hobbies);

// 使用 slice 建立副本，storedResults = testResults 是指針
const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
const storedResults = testResults.slice();

// 使用 合併 concat() 建立副本
// const storedResults = testResults.concat();

testResults.push(5.91);

console.log(storedResults, testResults);
console.log(testResults.indexOf(1.5)); // 2 有相同值，取第一次出現的位置
console.log(testResults.lastIndexOf(1.5)); // 2 有相同值，取第一次出現的位置

// 是否包含，沒有會回傳 -1
console.log(testResults.includes(10.99));
// 等於 
console.log(testResults.indexOf(10.99) !== -1);

const personData = [ {name: 'Max'}, {name: 'Manuel'}];
console.log(personData.indexOf({ name: 'Manuel'})); // -1 Object 不適用，因為 Object 是 Reference Value

// Object 可使用 find
const manuel = personData.find((person, idx, persons) => {
  return person.name === 'Manuel';
});

// 找到後修改，personData 也會跟著修改
manuel.name = 'Anna';
console.log(manuel, personData);

// 找 ojbect index
const maxIndex = personData.findIndex((person, idx, persons) => {
  return person.name === 'Max';
});

console.log(maxIndex);
