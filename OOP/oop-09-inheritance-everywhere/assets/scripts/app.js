class Product {
  // title = 'DEFAULT';
  // imageUrl;
  // description;
  // price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ElementAttribute {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component {
  constructor(renderHookId, shouldRender = true) {
    this.hookId = renderHookId;
    if (shouldRender) {
      this.render();
    }
  }

  // 子類別覆寫 render 方法
  render() {}

  createRootElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClasses) {
      rootElement.className = cssClasses;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

class ShoppingCart extends Component {
  items = [];

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(
      2
    )}</h2>`;
  }

  get totalAmount() {
    const sum = this.items.reduce(
      (prevValue, curItem) => prevValue + curItem.price,
      0
    );
    return sum;
  }

  constructor(renderHookId) {
    super(renderHookId, false);

    this.orderProduct = () => {
      console.log('Ordering...');
      console.log(this.items);
    }

    this.render();
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  // orderProduct() {
  //   console.log('Ordering...');
  //   console.log(this.items);
  // }


  render() {
    const cartEl = this.createRootElement('section', 'cart');
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `;
    const orderButton = cartEl.querySelector('button');
    // orderButton.addEventListener('click', this.orderProduct); // orderProduct 中的 this 為 <button>Order Now!</button>
    // 方法一 使用 arrow function
    // orderButton.addEventListener('click', () => this.orderProduct());
    // 方法二 將 orderProduct() 改成 arrow function
    orderButton.addEventListener('click', this.orderProduct);
    
    this.totalOutput = cartEl.querySelector('h2');
  }
}

class ProductItem extends Component {
  constructor(product, renderHookId) {
    // 因 super 會呼叫 render，所以先 shouldRender = false，給 product 給值之後再 render()
    super(renderHookId, false);
    this.product = product;
    this.render();
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = this.createRootElement('li', 'product-item');
    prodEl.innerHTML = `
        <div>
          <img src="${this.product.imageUrl}" alt="${this.product.title}" >
          <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;
    const addCartButton = prodEl.querySelector('button');
    addCartButton.addEventListener('click', this.addToCart.bind(this));
  }
}

class ProductList extends Component {
  // private 使用 #
  #products = [];

  constructor(renderHookId) {
    // 如呼叫 super()時，會執行 render()，但 render 中的 this.products 還未給值
    super(renderHookId, false);
    // 把 this.products 拉出，解決 this.products 未給值的時候
    // this.products = [
    //   new Product(
    //     'A Pillow',
    //     'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg',
    //     'A soft pillow!',
    //     19.99
    //   ),
    //   new Product(
    //     'A Carpet',
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
    //     'A carpet which you might like - or not.',
    //     89.99
    //   )
    // ];

    this.render();
    this.fetchProducts();
  }

  fetchProducts() {
    this.#products = [
      new Product(
        'A Pillow',
        'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg',
        'A soft pillow!',
        19.99
      ),
      new Product(
        'A Carpet',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
        'A carpet which you might like - or not.',
        89.99
      )
    ];
    this.renderProducts();
  }

  renderProducts() {
    for (const prod of this.#products) {
      new ProductItem(prod, 'prod-list');
    }
  }

  render() {
    this.createRootElement('ul', 'product-list', [
      new ElementAttribute('id', 'prod-list')
    ]);

    // this.products 有資料才 render
    if (this.#products && this.#products.length > 0) {
      this.renderProducts();
    }
    // for (const prod of this.products) {
      // const productItem = new ProductItem(prod, 'prod-list');
      // new ProductItem(prod, 'prod-list');
      // productItem.render();
    // }
  }
}

// 利用一個 trigger
class Shop extends Component{
  constructor() {
    super();
  }

  render() {
    this.cart = new ShoppingCart('app');
    // this.cart.render();
    const list = new ProductList('app');
    // productList.render();
    console.log(list);
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    // shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();

class Person {
  name = 'Max';
}

const p = new Person();
console.log(typeof p);
console.log(p instanceof Person);

const btn = document.querySelector('button');
console.dir(btn);
console.log(btn instanceof HTMLButtonElement);
console.log(btn instanceof HTMLElement);

const person = {name: 'Max', greet() {console.log(this.name)}};
// 可查看 writable: true, configurable: true 等相關資訊
console.log(Object.getOwnPropertyDescriptors(person));

Object.defineProperty(person, 'name', {
  configurable: true, // false 為不可 delete person.name -> false
  enumerable: true, // false => for (const key in person) 則不會出現
  value: person.name,
  writable: false // 修改成不可修改
});