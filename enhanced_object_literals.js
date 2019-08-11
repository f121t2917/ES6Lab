// 物件實字威力加強版 (Enhanced Object Literals)

function createBookShop(inventory) {
  return {
    inventory: inventory,
    inventoryValue: function() {
      return this.inventory.reduce((total, book) => total + book.price, 0); // 0 is default
    },
    priceForTitle: function(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

// 在ES6可簡化成
function createBookShop1(inventory) {
  return {
    inventory, // 名稱與參數名稱一樣可簡化
    inventoryValue() { // 可拿掉function保留字
      return this.inventory.reduce((total, book) => total + book.price, 0); // 0 is default
    },
    priceForTitle(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  };
}


const inventory = [
  { title: 'Harry Potter', price: 10 },
  { title: 'Eloquent Javascript', price: 15 }
];

const bookShop = createBookShop(inventory);

bookShop.inventoryValue();
bookShop.priceForTitle('Harry Potter');

// example
function saveFile(url, data) {
	$.ajax({
      url, // 名稱和參數一樣
      data,
      method: 'POST'
    });
}


// exam
// Multiple Properties with Enhanced Notation
const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { red, blue };

// exam
// Condensing Code with Enhanced Literals
const fields = ['firstName', 'lastName', 'phoneNumber'];
      
const props = { fields };

// exam
// Literals in Functions
const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return { 
    width, 
    height 
  };
}

// exam
// Refactor to use enhanced literal notation
const color = 'red';

const Car = {
  color,
  drive() {
    return 'Vroom!';
  },
  getColor() {
    return this.color;
  }
};

