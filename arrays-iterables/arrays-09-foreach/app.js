const prices = [10.99, 11.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];

// ps. 例子中會有數字不精確的問題
// for (const price of prices) {
//   taxAdjustedPrices.push(price * (1 + tax));
// }

prices.forEach((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  taxAdjustedPrices.push(priceObj);
});

console.log(taxAdjustedPrices);

// map 可以歷遍每個元素後返回一個新元素
const taxAdjustedPrices1 = prices.map((price, idx, prices) => {
  const priceObj = {idex: idx, taxAdjPrice: price * (1 + tax) };
  return priceObj;
});

console.log(taxAdjustedPrices1);

// 排序，但是預設排序是利用字串，不是數值 ex. "10" < "3"
const sortedPrice = prices.sort(); 
console.log(sortedPrice); // (5) [10.99, 11.99, 3.99, 5.99, 6.59]

// 利用歷遍轉成數值
const sortedPrice1 = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
}); 

console.log(sortedPrice1);
console.log(sortedPrice1.reverse());

// filter
const filteredArray = prices.filter((price, index, prices) => {
  return price > 6;
});
console.log(filteredArray);

// 箭頭函數 Arrow Function
const filteredArray1 = prices.filter(p => p > 6);

// reduce
// 例如想做加總
let sum = 0;
prices.forEach((price) => {
  sum += price
});

// 執行過程
// 第一次 prveValue = 0, curValue = 10.99
// 第一次 prveValue = 10.99, curValue = 11.99
sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
  return prevValue + curValue;
}, 0); // 0 為初始值

// 改成 arrow function
sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);
console.log(sum);