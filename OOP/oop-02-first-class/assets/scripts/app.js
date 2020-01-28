/**
 * Product -- ProductItem -- ProductList -- App -- Shop -- ShopCart
 */
// 定義產品 class
class Product {
  // title = 'DEFAULT'; // Class Field
  // imageUrl;
  // description;
  // price;

  constructor(title, image, desc, price) {
    this.title = title; // Class Property
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

console.log(new Product());

// 處理產品項目，render產品畫面、加入購物車
class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    console.log('Adding product to cart...');
    console.log(this);
    console.log(this.product);
    // cart.addProduct();
    App.addProductToCart(this.product);
  }

  render() {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
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
      // 創建按鈕方法
      const addCartButton = prodEl.querySelector('button');
      // 使用這方式點擊後，按鈕方法中的 this.product 會 undefined
      // 因為 console.log(this) 為 <button>Add to Cart</button>，objects 07
      // addCartButton.addEventListener('click', this.addToCart);
      // 使用 bind 返回一個新的對象
      addCartButton.addEventListener('click', this.addToCart.bind(this)); // this 表示 innerHTML 中的整個對象
      return prodEl;
  }
}

class ShoppingCart {
  items = [];

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;
  }

  // 使用 getter 和 setter 解決取得總價
  get totalAmount() {
    // 使用 reduce 做加總
    const sum = this.items.reduce(
      (prevValue, curItem) => prevValue + curItem.price,
      0
    );
    return sum;
  }

  addProduct(product) {
    // 解構 items
    const updateItems = [...this.items];
    updateItems.push(product);
    this.cartItems = updateItems;
    // this.items.push(product);
    // this.render();
  }

  render() {
    const cartEl = document.createElement('section');
    console.log(`${0}`);
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `;
    cartEl.className = 'cart';
    this.totalOutput = cartEl.querySelector('h2');
    return cartEl;
  }
}

// 產品清單 使用 class
class ProductList {
  products = [
    new Product(
      'A Pillow',
      'https://www.maxpixels.net/static/photo/2x/Room-Relax-Sleep-Sheets-Teddy-Bear-Bed-Peace-Toy-2453293.jpg',
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

  constructor() {}

  render() {
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      // 重構
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();

      // const prodEl = document.createElement('li');
      // prodEl.className = 'product-item';
      // prodEl.innerHTML = `
      //   <div>
      //     <img src="${prod.imageUrl}" alt="${prod.title}" >
      //     <div class="product-item__content">
      //       <h2>${prod.title}</h2>
      //       <h3>\$${prod.price}</h3>
      //       <p>${prod.description}</p>
      //       <button>Add to Cart</button>
      //     </div>
      //   </div>
      // `;
      prodList.append(prodEl);
    }
    return prodList;

  }

}

// 產品清單
// const productList = {
//   products: [
//     new Product(
//       'A Pillow',
//       'https://www.maxpixels.net/static/photo/2x/Room-Relax-Sleep-Sheets-Teddy-Bear-Bed-Peace-Toy-2453293.jpg',
//       'A soft pillow!',
//       19.99
//     ),
//     new Product(
//       'A Carpet',
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
//       'A carpet which you might like - or not.',
//       89.99
//     )
//   ],
//   // render 畫面 在 app 
//   render() {
//     const renderHook = document.getElementById('app');
//     const prodList = document.createElement('ul');
//     prodList.className = 'product-list';
//     for (const prod of this.products) {
//       const prodEl = document.createElement('li');
//       prodEl.className = 'product-item';
//       prodEl.innerHTML = `
//         <div>
//           <img src="${prod.imageUrl}" alt="${prod.title}" >
//           <div class="product-item__content">
//             <h2>${prod.title}</h2>
//             <h3>\$${prod.price}</h3>
//             <p>${prod.description}</p>
//             <button>Add to Cart</button>
//           </div>
//         </div>
//       `;
//       prodList.append(prodEl);
//     }
//     renderHook.append(prodList);
//   }
// };

// productList.render();

class Shop {
  render() {
    const renderHook = document.getElementById('app');

    this.cart = new ShoppingCart();
    const cartEl = this.cart.render();
    const productList = new ProductList();
    const prodListEl = productList.render();

    renderHook.append(cartEl);
    renderHook.append(prodListEl);
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    // 必須先 rnder 再指定 this.cart 不然 this.cart.addProduct 會 undefined
    shop.render();
    this.cart = shop.cart;
  }
  
  // 加入購物車，將 product 加到 cart
  // 拆開目的在於降低 product 和 cart 的相依性
  // 一個 class 只負責相關的工作
  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();