function throttle(fn, interval) {
    let firstTime = true;
    let timer;
    return function() {
        let args = arguments;
        if (firstTime) { // 第一次執行
            fn.apply(this, args);
            // firstTime = false;
            // return;
            return (firstTime = false);
        }

        if (timer) { // 如 timer 非 null 則返回
            return;
        }

        timer = setTimeout(() => {
            console.log('setTimeout');
            clearTimeout(timer); // 取消由 setTimeout() 方法設定的 timeout
            timer = null;
            fn.apply(this, args);
        }, interval);
    };
}

window.onclick = throttle(function(args) {
    console.log('500ms觸發一次');
}, 500);