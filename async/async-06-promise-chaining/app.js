const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = opts => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      success => {
        resolve(success);
      },
      error => {
        reject(error);
      },
      opts
    );
  });
  return promise;
};

const setTimer = duration => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return promise;
};

// Promise Chaining 核心思想可以一步一步進行操作
// 一旦完成此步驟，第二步將僅在該步驟立時執行。
// 我們進入這一步驟，然後一旦返回，則包裝成另一個承諾。
// 如果加了 async 會返回一個 Promise
function trackUserHandler() {
  let positionData;
  getPosition()
    .then(posData => { // posData 為 getPosition 中的 success
      positionData = posData;
      return setTimer(2000); // 返回 setTimer 另一個 Promise
    })//, err => { 使用 .catch()
     // console.log(err);
    //})
    .catch(err => { // 上面的 promise 只要有error 都會 catch
      console.log(err);
      return 'on we go...';
    })
    .then(data => { // 執行 setTimer Promise
      console.log(data, positionData); // data 為 setTimer 的 Done!
    })
    .finally(() => {
      console.log('finally');
      // the promise is settled now - finally() will NOT return a new promise!
      // you can do final cleanup work here
    });
  setTimer(1000).then(() => {
    console.log('Timer done!');
  });
  console.log('Getting position...');
}

// 如果加了 async 會返回一個 Promise
// 但使用 async await 無法在內部同時運行任務
// 依需求判斷用哪一種方式
async function trackUserAsyncHandler() {
  let posData;
  let timerData;
  try { // async await 使用 try catch 處理例外
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch (error) {
    console.log(error);
  }
  console.log(posData, timerData);
 
  // 必須等 await 結束才會執行
  setTimer(1000).then(() => {
    console.log('Timer done!');
  });
  console.log('Getting position...');

}

// 另一種方式
// (async function() {
//   await setTimer(1000);
// })();
// 相當於 
// setTimer(1000).then();

// button.addEventListener('click', trackUserHandler);
button.addEventListener('click', trackUserAsyncHandler);

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);
