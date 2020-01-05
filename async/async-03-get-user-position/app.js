// javascript is single-threaded 
// but offloads longer-taking tasks (e.g. timers) to the browser (which uses multiple threads).
// The browser communicates with JS via the Event Loop 
// and the Message Queue to let it know once a longer-taking task finished.
const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    posData => {
      setTimeout(() => {
        console.log(posData);
      }, 2000);
    },
    error => {
      console.log(error);
    }
  );

  setTimeout(() => {
    console.log('Timer Done');
  }, 0);

  // 上面的 setTimeout 還是不會比下面的 log 先執行
  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);
