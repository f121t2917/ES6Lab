// 產生 Set，值是唯一的
const ids = new Set(['Hi', 'from', 'set!']);
ids.add(2);
if (ids.has('Hi')) {
  ids.delete('Hi');
}

// 會有二個一樣的內容
// (2) ["from", "from"]
// (2) ["set!", "set!"]
// (2) [2, 2]
for (const entry of ids.entries()) {
  console.log(entry);
}

for (const entry of ids.entries()) {
  console.log(entry[0]);
}

// Map：key - value (大量資料 效能會比 Object 好)
// 常用方法 set get entries keys values has
// var kvArray = [['key1', 'value1'], ['key2', 'value2']];
const person1 = { name: 'Max' };
const person2 = { name: 'Manuel' };

// person1 為 key，可以是 object， value 為 陣列中 包 object
const personData = new Map([[person1, [{data: 'yesterday', price: 10}] ]]);

// person1 為 key， value 為 object
// const personData = new Map([[person1, {data: 'yesterday', price: 10} ]]);

personData.set(person2, [{ data: 'two weeks age', preice: 100}]);

console.log(personData);
console.log(personData.get(person1));

for (const entry of personData) {
    console.log(entry);
}

for (const [key, value] of personData.entries()) {
    console.log(key, value);
}

for (const key of personData.keys()) {
    console.log(key);
}

for (const value of personData.values()) {
    console.log(value);
}

console.log(personData.size);



// weak set 弱集合 和 weak map
// 提供的方法比較少
let p = { name: 'Max' };
const ps = new WeakSet();
ps.add(p);

// 如果經過處理後，想釋放記憶體可以直接設為 null
// javascript engine 會提取該地址，從堆中清除
p = null;

console.log(ps);

const pd = new WeakMap();
pd.set(p, 'Extra info!');

p = null;
console.log(pd);