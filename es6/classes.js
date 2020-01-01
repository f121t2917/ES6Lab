// we use a class we are still makeing use of prototype inheritance.
//
// 使用prototype建立一個方法
function Car(options) {
  this.title = options.title;
}

Car.prototype.drive = function() {
  return 'vroom';
}

// 繼承Car
function Toyota(options) {
  Car.call(this, options);
  this.color = options.color;
}
// 繼承Car方法
Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;
// Toyota本身方法
Toyota.prototype.honk = function() {
  return 'beep';
}

const toyota = new Toyota({ color: 'red', title: 'Daily Driver' });

toyota;
toyota.drive();
toyota.honk();

// ES6重構
class NewCar {
  constructor({ title }) {
    this.title = title;
  }
  
  drive() {
    return 'vroom';
  }
}

const car = new NewCar({ title: 'Toyota' });

car.drive();

// ES6繼承
class NewToyota extends NewCar {
  constructor(options) {
    super(options); // Car.constructor()
    this.color = options.color;
  }
  
  honk() {
    return 'beep';
  }
}

const newToyota = new NewToyota({ color: 'red', title: 'Daily Driver' });


// exam
// The Snake should have a 'bite' method.  The only argument to this method is another instance of a Snake.
// The instance of Snake that is passed in should have their health deducated by 10
class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

class Snake extends Monster {
    constructor(options) {
        super(options);
    }
    
    bite(snake) {
        snake.health -= 10;
    }

}





