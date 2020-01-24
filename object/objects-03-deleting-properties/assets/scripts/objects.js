const movieList = document.getElementById('movie-list');

movieList.style.backgroundColor = 'red';
// style 使用 key name
// movieList.style['backgroundColor'] = 'red';
// movieList.style['background-color'] = 'red';
movieList.style.display = 'block';

let person = {
  'first name': 'first name', // 用單引號可以設定成 key name
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  greet: function() {
    alert('Hi there!');
  },
  1.5: 'hello' // 會強制轉成字串，取得資料 person[1.5] 或 person['1.5']
  // 如果產生一個 key 全部都是數值的，則會轉成數值排序
  // ex. const numbers = { 5: 'hi', 1: 'true' };
  // {1: "true", 5: "hi"}
};

// ...

// person.age = 31;
// 刪除一個屬性
delete person.age;
// 設 undefined、null 不乾淨
// person.age = undefined;
// person.age = null;

// 增加一個屬性
person.isAdmin = true;

console.log(person);

console.log(person['first name']); // key 才能這樣取得資料
console.log(person['age']); // undefined 因為 age 是屬性




// dynamically access properties 動態屬性訪問
const keyName = 'first name';
console.log(person[keyName]);
// console.log(person.keyName); // 則會找尋 keyName 屬性

// 動態屬性建立
const propKey = 'field 12';
const person1 = {
  [propKey]: 'Max'
};
console.log(person1[propKey]);