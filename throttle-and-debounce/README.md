#### 防抖(debounce)
停止操作延遲多久執行回調函數

##### 使用情境
輸入框打字即時搜索，這樣就不會頻繁的調用接口與下拉資料一直更新，所以就會造成抖動。使用防抖(debounce)延遲執行來解決這個問題。
如果距離使用者敲擊鍵0.5秒之後輸入框不再變化，則認為使用者打字完畢，如果使用者一直在打字，就會一直重置這個時間。






#### 節流(throttle)
節流函數的核心就是多久執行一次

##### 使用情境
例如虛擬滾動，可以利用節流方式觸發mousewheel，來節流offset的頻率


#### 差異
假設節流時間是1s,意思就是不管用戶是否還在打字，一開始開始會調用搜eioa 接口，過了一秒又會調用一次搜尋接口，明顯不符合應用場景。
throttle 像是按鈕的冷卻時間，防止用戶瘋狂點擊按鈕提交表單不斷的調用接口，我們限制2 秒才發一次請求，不管你點擊多少次
debounce 像是搜索框的查詢，等待用戶完成操作再執行，避免打字期間就不斷的查詢。