// split 分割
const data = 'new york;10.99;2000';

const transformedData = data.split(';');
transformedData[1] = +transformedData[1]; // 利用 + 轉數值
console.log(transformedData);

// join 合併成字串
const nameFragements = ['Max', 'Schwarz'];
const name = nameFragements.join(' ');
console.log(name);

// spread operator 展開運算子 (ES6)
const copiedNameFragments = [...nameFragements]; // 是複製一個全新的陣列，不是 Reference Value
nameFragements.push('Mr');
console.log(nameFragements, copiedNameFragments);

const prices = [10.99, 11.99, 5.99, 3.99, 6.59];
console.log(Math.min(1, 5, -1));
// Math.min() 不支援傳入陣列，可以利用 spread operator 傳入
console.log(Math.min(prices));
console.log(Math.min(...prices));

const persons = [{ name: 'Max', age: 30 }, { name: 'Manuel', age: 31 }];
// 會複製 Max, Manuel 的參考
const copiedPersons = [...persons];
// copiedPersons 不會有 Anna
persons.push({ name: 'Anna', age: 29 });
persons[0].age = 31; // 因為有複製到 Max 的參考，所以 persons 修改，copiedPersons 會跟著變動

console.log(persons, copiedPersons);

// 可以利用 Map 建立一個新的陣列
const persons1 = [{ name: 'Max', age: 30, hobbies:[] }, { name: 'Manuel', age: 31 }];
// const copiedPersons1 = [
  // ...persons.map(person => ({ name:person.name, age: person.age }))
// ];
// 或
const copiedPersons1 = persons.map(person => ({
  name: person.name,
  age: person.age
}));

console.log(persons1, copiedPersons1);

// 取陣列值的方式
const nameData = ['Max', 'Schwarz', 'Mr', 30];
// const firstName = nameData[0];
// const lastName = nameData[1];
const [ firstName, lastName, ...otherInformation ] = nameData;
console.log(firstName, lastName);


// spread object 中的陣列
const person11 = { name: 'Max', age: 30, hobbies:['Sports', 'Cooking'] }

// 複製一個全新的陣列，不是 Reference Value
person12 = { ...person11 };
person11.age = 31 // person11 
console.log(person12.age); // person12.age => 30 因為 age 是數值 所以 spread 是複製一個值過去

// spread 不會深度複製
person11.hobbies.push('Coding') 
console.log(person12); // person12.hobbies => 多了Coding 因為 hobbies 是陣列 是 複製一個參考過去

// 複製且覆蓋值
const person13 = {...person11, age: 29, hobbies: [...person.hobbies]};

person11.hobbies.pop();
console.log(person11);
console.log(person13);

// 另一個複製值的方式 assign，跟 spread 一樣不會深度複製
// Object.assign(target, ...sources) 合併目標物件及(多個)來源物件所得到的最終物件
// 有相同屬性時合併物件
const person21 = {name: 'Max'};
const person22 = Object.assign({}, person21);