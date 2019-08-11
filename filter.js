// Filter and For Loop
// 要過濾資料，但沒有要刪除原本資料，且生成新的陣列
var products = [
  { name: 'cucumber', type: 'vegetable', quantity:0, price:1 },
  { name: 'banana', type: 'fruit', quantity:10, price:15 },
  { name: 'celery', type: 'vegetable', quantity:30, price:9 },
  { name: 'orange', type: 'fruit', quantity:3, price:5 }
];

var filteredProducts = [];

for (var i =0; i < products.length; i++) {
  if (products[i].type === 'fruit') {
    filteredProducts.push(products[i]);
  }
}

console.log(filteredProducts);

var filtered = [];
filtered = products.filter(function(product) {
  return product.type === 'vegetable';
});

console.log(filtered);

// example
// Type is 'vegetable', quantity is greater than 0, price is less than 10

products.filter(function(product) {
	return product.type === 'vegetable' && product.quantity > 0
  	&& product.price < 10;
});

// example
// 找出相關的post comments
var post = { id: 4, title: 'New Post' };
var comments = [
  { postId: 4, content: 'awesome post' },
  { postId: 3, content: 'it was ok' },
  { postId: 4, content: 'neat' },
];

function commentsForPost(post, comments) {
	return comments.filter(function(comment) {
   	return comment.postId === post.id;
  });
}

commentsForPost(post, comments);

// === exam
// Filtering Values
// Filter the array of numbers using the filter helper, creating a new array that only contains numbers greater than 50.  Assign this new array to a variable called 'filteredNumbers'.  Don't forget to use the 'return' keyword in the function!
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers;

filteredNumbers = numbers.filter(function(number) {
    return number > 50;
});

// === exam
// Handling Permissions with Filter
// Filter the array of users, only returning users who have admin level access.  Assign the result to the variable 'filteredUsers'. Don't forget to use the 'return' keyword in the function!
var users = [
 { id: 1, admin: true },  
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers;

filteredUsers = users.filter(function(user) {
    return user.admin;
})


// === exam
// Challenging!  Implementing 'reject'.
// This is a hard one!  Create a function called 'reject'.  Reject should work in the opposite way of 'filter' - if a function returns 'true', the item should *not* be included in the new array.  Hint: you can reuse filter.
// var numbers = [10, 20, 30];
// var lessThanFifteen = reject(numbers, function(number){
//   return number > 15;
//   });
//   lessThanFifteen // [ 10 ];
function reject(array, iteratorFunction) {
  return array.filter(function(arr) {
      return !iteratorFunction(arr);
  });
}

// https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
