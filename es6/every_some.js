// Some and Every
var computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 }
];

//  是否所有電腦都能執行
var allComputersCanRunProgram = true;

// 只有一些電腦可以執行
var onlySomeComputersCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
  var computer = computers[i];
  
  // 判斷是否有ram < 16
  if (computer.ram < 16) {
    // 如果有 ram < 16 則 allComputersCanRunProgram 改為false
    allComputersCanRunProgram = false;
  } else {
    // 如果有 ram > 16 則 onlySomeComputersCanRunProgram 改為true
    onlySomeComputersCanRunProgram = true;
  }
}

allComputersCanRunProgram
onlySomeComputersCanRunProgram

// 使用every 是否每一個都是ram > 16
computers.every(function(computer) {
  return computer.ram > 16;
});

// 使用some 是否有一個是ram > 16
computers.some(function(computer) {
  return computer.ram > 16;
});

// example
var names = [
  'Alexandria', 
  'Matthew',
  'Joe'
];

names.every(function(name) {
  return name.length > 4;
});

names.some(function(name) {
  return name.length > 4;
});

// example
function Field(value) {
  this.value = value;
}

Field.prototype.validate = function() {
  return this.value.length > 3;
}

var username = new Field('');
var password = new Field('password');

// example field一個一個驗證
username.validate() && password.validate();

// 使用every驗證
var fields = [username, password];
var formIsValid = fields.every(function(field) {
  return field.validate();
});

formIsValid

// exam
// Finding Submitted Users
var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted;

hasSubmitted = users.every(function(user) {
    return user.hasSubmitted;
});

// In Progress Network Requests
var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress;

inProgress = requests.some(function(request) {
    return request.status === 'pending';
});

// https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/some
