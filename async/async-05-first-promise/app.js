// 如果產生了callback hell，層次太深的巢狀 callback，讓程式變得更複雜，難以預測和追蹤。
// 例如
// getCurrentPosition(() => {
//   setTimeout(() => {
//     doMoreAsyncStuff(() => {

//     })
//   }, 200);
// });

// 可以利用 Promises
// someAsyncTask()
//   .then(() => {
//     return anotherTask();
//   })
//   .then(() => {
//     return yetAnotherTask();
//   }
//   .then(...);


const button = document.querySelector('button');
const output = document.querySelector('p');

const setTimer = duration => {
  const promise = new Promise((resolve, reject) => {
    // 定義函數主體應該發生什麼事
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return promise;
};

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    posData => {
      // 使用 setTimer(Promise)
      setTimer(2000).then(data => {
        // 例子中的 data 是 resolve('Done!'); 中的 'Done!'
        console.log(data, posData);
      });
    },
    error => {
      console.log(error);
    }
  );
  setTimer(1000).then(() => {
    console.log('Timer done!');
  });
  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);
