// Find and For Loop
var users = [
  { name: 'Jill' },
  { name: 'Alex', id: 4 },
  { name: 'Bill' },
  { name: 'Alex', id: 5 },
];

var user;

for (var i = 0; i < users.length; i++) {
  if (users[i].name === 'Alex') {
    user = users[i];
    break;
  }
}

// 只會回傳第一個相符的值
users.find(function(user) {
  return user.name === 'Alex';
});

// example
function Car(model) {
  this.model = model;
}

var cars = [
  new Car('Buick'),
  new Car('Damaro'),
  new Car('Focus'),
];

cars.find(function(car) {
  return car.model === 'Focus';
});

// example
var posts = [
  { id: 1, title: 'New Post' },
  { id: 2, title: 'Old Post' },
];

var comment = { postId: 1, content: 'Great Post' };

function postForComment(posts, comment) {
  return posts.find(function(post) {
    return post.id === comment.postId;
  });
}

postForComment(posts, comment);

// === exam
// Find the user in the users's array who is an admin.  Assign this user to the variable 'admin'.
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin;

admin = users.find(function(user) {
    return user.admin;
});

// === exam 
// Find the account with a balance of 12 and assign it to the variable 'account'.
var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account;

account = accounts.find(function(acc) {
    return acc.balance === 12;
});

// === exam 
// Really Challenging: Custom findWhere Helper
// This is a tough one!  The most common find operation is to an object that has a given property.  Rather than writing out a full function every time, it would be great if we has a shorthand syntax to find an object like this:
// findWhere(ladders, { height: '20 feet' });
// The object { ladders: '20 feet' }  should be used as the search criteria - we would want to find a ladder whose 'height' property was '20 feet';
function findWhere(array, criteria) {
  return array.find(function(element) {
      var property = Object.keys(criteria)[0];
      return element[property] === criteria[property];
  });
}

// https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/find


