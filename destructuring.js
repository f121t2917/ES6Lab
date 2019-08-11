// Destructuring
const expense = {
  type: 'Business',
  amount: '$45 USD'
}

// 變數名稱與expense的成員名稱一樣，可簡化
// 如果名稱不一樣就會undefined
const { type, amount, test } = expense;

// example
var savedFiled = {
  extension: 'jpg',
  name: 'repost',
  size: 14040
}

function fileSummary(file) {
  return `The file ${file.name}.${file.extension} is of size ${file.size}`;
}

fileSummary(savedFiled);

// 利用 destructuring
function fileSummary({ name, extension, size }, { color}) {
  return `${color} The file ${name}.${extension} is of size ${size}`;
}

fileSummary(savedFiled, { color: 'red' });

// example destructuring array
const companies = [
  'Google',
  'Facebook',
  'Uber'
];

const [ name, name2, name3, name4 ] = companies;
name; // Google
name2; // Facebook
name3; // Uber
typeof name4; // undefined

const { length } = companies;
length; // 3 {}為抓成員變數

// [] 是抓值
const [ length ] = companies;
length; // Google


const [ name, ...rest ] = companies;
name; // Google
rest; // ["Facebook", "Uber"]

// Destructuring Arrays and Object * At the same Time *
const companies = [
  { name: 'Google', location: 'Mountain View' },
  { name: 'Facebook', location: 'Menlo Park' },
  { name: 'Uber', location: 'San Francisco' }
];

//const [location] = companies; // 為destructuring array
//location; // { name: 'Google', location: 'Mountain View' }
const [{ location }] = companies;
location; // Mountain View

// example
const Google = {
  locations: ['Mountain View', 'New York', 'London']
};

const { locations: [ location ] } = Google;
location; // Mountain View


// example
function signup(username, password) {
  //create new user
}

signup('myname', 'mypassword');

// 如果一段時間後 又要加一些欄位，就需要改變代入的參數
function signup(username, password, email, dateOfBirth, city) {
  //create new user
}

signup('myname', 'mypassword', 'myemail@example.com', '1990/1/1' ,'New York');

// 所以可用destructuring方式，會對應到變數名稱
const user = {
  username: 'myname',
  password: 'mypassword',
  email: 'email@example.com',
  dateOfBirth: '1990/1/1',
  city: 'New York'
}

// 參數不用依順序
function signup({  email, password, dateOfBirth, city, username }) {
  //create new user
}

signup(user);

// example
const points = [
  [4, 5],
  [10, 1],
  [0, 40]
];

// 轉換成[{"x":4,"y":5},{"x":10,"y":1},{"x":0,"y":40}]
points.map( ([x, y]) => {
  // return { x: x, y: y};
  return { x, y };
});


// example
const numbers = [1, 2, 3];

function double([number, ...rest]) {
  if(rest.length === 0){
    return [number * 2];
  }
  return [number * 2, ...double(rest)];
}

double(numbers)


// exam
// Destructuring in Practice
const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

function isEngineer({ title, department }) {
  return title === 'Engineer' && department === 'Engineering';
}

// Array Destructuring in Practice
// [subject, time, teacher]
// const classesAsObject = [{ subject: 'Geography', time: '2PM', teacher: 'Mrs. Larsen' }]

const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map( ([subject, time, teacher]) => {
   return {subject, time, teacher};
});
