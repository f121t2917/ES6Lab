// 延遲多久執行一次
function debounce(fn, interval) {
    let timer = null;
    let prevTime = null; // 記錄上一次運行的時間

    return function() {
        const now = Date.now();
        let args = arguments;
        if (now - prevTime > interval && prevTime) { // 如距離上次運行時間 超過 interval 且 不是第一次執行，則直接執行
            clearTimeout(timer);
            fn.apply(this, args);
            prevTime = null;
        } else { // 第一次運行且未超過 interval，則延遲 interval 秒執行
            clearTimeout(timer);
            prevTime = now;
            timer = setTimeout(() => {
                fn.apply(this, args);
                prevTime = Date.now();
            }, interval);
        }
    };
}

window.onclick = debounce(function() {
  console.log('3秒之內再點擊重新計時');
}, 3000);