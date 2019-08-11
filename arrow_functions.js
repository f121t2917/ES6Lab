// ES5
const add = function(a, b) {
  return a + b;
}

// Arrow Functions
const add1 = (a, b) => {
  return a + b;
}

// 如果直接return，可以將{}拿掉
const add2 = (a, b) => a + b;

// 單一參數
const double = function(number) {
  return 2 * number;
};

// 可簡化成
const double1 = number => 2 * number;

// 另一寫法
const double3 = (number => 2 * number);

// 沒有參數
const double2 = () => 2;

// example 簡化map
const numbers = [1, 2, 3];

numbers.map(function(number) {
  return 2 * number;
});

numbers.map((number) => 2 * number);
numbers.map(number => 2 * number);


// example Cannot read property 'teamName'
const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function() {
    return this.members.map(function(member) {
      // 下方中因為在map下面的function，所以this並不是team
      return `${member} is on team ${this.teamName}`;
    });
  }
};

// 可加入bind(this)修正
const team1 = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function() {
    return this.members.map(function(member) {
      return `${member} is on team ${this.teamName}`;
    }.bind(this));
  }
};

// 直接用Arrow Function修正
//箭頭函式並不擁有自己的 this 變數；使用的 this 值來自封閉的文本上下文，也就是說，箭頭函式遵循常規變量查找規則。因此，如果在當前範圍中搜索不到 this 變量時，他們最終會尋找其封閉範圍。因此，在以下程式碼內，傳遞給 map 的 箭頭函式中的this ，會與封閉函式的 this 值相同

const team2 = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function() {
    return this.members.map((member) => {
      // Arrow Function 適切的參考了team建構式所建立的物件
      return `${member} is on team ${this.teamName}`;
    });
  }
};

// map下用this會變成以下情況
var team2 = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function teamSummary() {
    var _this = this;

    return this.members.map(function (member) {
      // Arrow Function 適切的參考了team建構式所建立的物件
      return "".concat(member, " is on team ").concat(_this.teamName);
    });
  }
};

//
team.teamSummary();


// example
// 箭頭函數當中的 this 是定義時的對象，而不是使用時的對象
// 在使用箭頭函數時，有一點要注意的是，在箭頭函數中，
// this 指稱的對象在所定義時就固定了，而不會隨著使用時的脈絡而改變。
const profile = {
  name: 'Alex',
  getName: () => profile.name // 在這如果使用this會undefined，因為this is referencing window which is outer level of profile
};

profile.getName()


// 如果getName用this會變成以下情況
var _this = void 0;

var profile = {
  name: 'Alex',
  getName: function getName() {
    return _this.name;
  }
};

// exam
// Refactoring Keyword Functions
const fibonacci = n => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

// https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// https://pjchender.blogspot.com/2017/01/es6-arrow-function.html











