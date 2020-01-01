// ForEach and For Loop
var colors = [ 'red', 'bule', 'green' ];

for (var i = 0; i < colors.length; i++){
 console.log(colors[i]); 
}

colors.forEach(function(color) {
  console.log(color);
});

// example
// Create an array of numbers
var numbers = [1, 2, 3, 4, 5];

// Create a variable to hold the sum
var sum = 0;

// Loop over the array, incrementing the sum variable =
numbers.forEach(function(number) {
  sum += number;
});

console.log(sum);

// ==== exam
// Moving Away from For Loops
// The code below is calling 'savePost' three times, but it is doing so using a for loop.  This implementation works, but the for loop makes it more challenging to understand the purpose of the function.  Rather than using a for loop, refactor the code below to instead use the forEach helper.


function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];

    posts.forEach(function(post) {
        savePost(post);
    });
}

// ==== exam
// Processing Values
// The array below contains an array of objects, each of which is a representation of an image.  Using the forEach helper, calculate the area of each image and store it in a new array called 'areas'.  The area of an image can be calculated as 'image.height * image.width'.
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

images.forEach(function(image, index) {
    areas[index] = image.height * image.width;
});


// https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

