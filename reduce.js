// Reduce and For Loop

var numbers = [10, 20, 30];
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

// reduce
numbers.reduce(function(sum, number) {
  return sum + number;
}, 0); // 0 is initial value


// example 
var primaryColors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'bule' }
];

// 這邊使用reduce，也可以用map
primaryColors.reduce(function(previous, primaryColor) {
  previous.push(primaryColor.color);
  return previous;
}, []);

// example 刮號匹配
function balancedParens(string) {
  return !string.split('').reduce(function(previous, char) {
    if (previous < 0) { return previous; }
    if (char === '(') { return ++previous; }
    if (char === ')') { return --previous; }
  }, 0);
}

balancedParens('(((())))');

// example
var numbers = [1, 1, 2, 3, 4, 4];

function unique(array) {
  return array.reduce(function(uniArr, elem) {
    
    var hasValue = uniArr.find(function(e) {
    	return e === elem;
    });
    
    if (!hasValue) {
    	uniArr.push(elem);
    }
    return uniArr;
  },[]);
}

unique(numbers);


// === exam
// Distance Traveled
var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance;

totalDistance = trips.reduce(function(totalDistance, trip) {
    return totalDistance += trip.distance;
}, 0);

// exam 
// Reducing Properties
var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(types, desk) {
    if(desk.type === 'sitting') { ++types.sitting; }
    if(desk.type === 'standing') { ++types.standing; }
    return types;
}, { sitting: 0, standing: 0 });


// exam
// Hardmode: Custom 'Unique' Helper
// var numbers = [1, 1, 2, 3, 4, 4];
// return [1, 2, 3, 4]
function unique(array) {
  return array.reduce((prev, num) => {
    if (!prev.find(el => el === num)) prev.push(num);
    return prev;
  }, []);
}


