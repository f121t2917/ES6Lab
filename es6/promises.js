// Promises and Fetch
// 執行javascript時，代碼是逐行執行，沒有暫停與任何中斷(正常時)
// 例如ajax時，需要一些時間才會返回

let promise = new Promise((resolve, reject) => {
  setTimeout(() => { // 測試3秒後執行
    resolve();
  }, 3000);
});

promise
  .then(() => console.log('finally finished!'))
  .then(() => console.log('i was also ran!!!'))
  .catch(() => console.log('uh oh!!'));

// =====
promise = new Promise((resolve, reject) => {
  var request = new XHTMLRequest();
  // make request
  request.onload = () => {
    resolve();
  }
});

// fetch
url = 'https://jsonplaceholder.typicode.com/posts123';
fetch(url)
	.then(response => response.json())
	// 例如net::ERR_NAME_NOT_RESOLVED才會catch到
	// 像https://jsonplaceholder.typicode.com/posts123/ 就catch不到
	.catch(error => console.log('BAD', error))
	.then(data => console.log(data));



