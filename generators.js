// Generators
// 可用在順序循環、或運用狀態模式(State Pattern)概念時
const colors = ['red', 'green', 'blue'];

for (let color of colors) {
  console.log(color);
}

// 加星號轉成generator
function* numbers() {
  yield; // 會對下次調用的內容產生一些影響
}

console.log(numbers()); // __proto__: Generator

const gen = numbers();
gen.next(); // done: false
gen.next(); // done: true
gen.next(); // done: true

// example 搭配圖1
function* shopping() {
  // stuff on the sidewalk
  
  // walking down the sidewalk
  
  // go into the store with cash
  
  const stuffFromStore = yield 'cash';
  
  // walking to laundry place
  const cleanClothes = yield 'laundry';

  // walking back home
  return stuffFromStore;
}

//stuff in the store
const shopGen = shopping();
shopGen.next(); // leaving our house
// walked into the store
// walking up and down the aisles...
// purchase our stuff

shopGen.next('groceries'); // leaving the store with groceries
shopGen.next('clean clothes');

// ==================================
// example
function* colors_1() {
  yield 'red';
  yield 'blue';
  yield 'green';
}

const genColor = colors_1();
genColor.next(); // red
genColor.next(); // blue
genColor.next(); // green
genColor.next(); // done: true

const myColors = [];
for (let color of colors_1()) {
  myColors.push(color);
}
myColors;

// ==================================
// 運用
// 利用一個循環形式來遍歷所有成員(包括testing team)

// 建立generators時 先建 iterator

// symbol iterator
// combine multiple generators together
// 需在engineeringTeam 不然無法
const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill'
};

function* TestTeamIterator(team) {
  yield team.lead;
  yield team.tester;
}

// === testing team

const engineeringTeam = {
  testingTeam, // symbol iterator 例子使用
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineering: 'Dave'

}

// 如果只想iterator 員工
function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  
  // combine 第二個generator
  const testingTeamGenerator = TestTeamIterator(team.testingTeam);
  yield* testingTeamGenerator;
}

const names = [];
for (let name of TeamIterator(engineeringTeam)) {
  names.push(name);
}

// ==================================
// ======= clean ======
const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill',
  
  // 使用symbol
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
  }
};

// === testing team

const engineeringTeam = {
  testingTeam, // symbol iterator 例子使用
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineering: 'Dave'
}

// 如果只想iterator 員工
function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  
  // combine 第二個generator
  yield* team.testingTeam;
}

const names = [];
for (let name of TeamIterator(engineeringTeam)) {
  names.push(name);
}

// ==================================
// ===== Symbol.iterator 的複雜性 =====
const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill',
  
  // 使用symbol
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
  }
};

const engineeringTeam = {
  testingTeam, // symbol iterator 例子使用
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineering: 'Dave',
  
  [Symbol.iterator]: function* () {
  	yield this.lead;
    yield this.manager;
    yield this.enginner;
    yield* this.testingTeam
  }
};

const names = [];
for (let name of engineeringTeam) {
  names.push(name);
}


// ==================================
// 使用在tree (Recursion)
class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }
  
  *[Symbol.iterator]() {
    yield this.content; // yield
    for (let child of this.children) {
      yield* child;
    }
  }
  
}

const children = [
  new Comment('good comment', []),
  new Comment('good comment', []),
  new Comment('good comment', [])
];

const tree = new Comment('Great post!', children);

const values = [];
for (let value of tree) {
  values.push(value);
}

values;




