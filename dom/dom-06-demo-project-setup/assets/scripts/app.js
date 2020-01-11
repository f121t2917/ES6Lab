/**
 * 程式架構
 * 元件功能折成 元件監聽 -> 處理程序 handler
 * handler 執行相關動作
 */

// 取得 add-modal 方式
const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.body.children[1];

// 取得 button 方式
const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;

const backdrop = document.getElementById('backdrop');

// 取消 button
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
// const userInputs = addMovieModal.getElementsByTagName('input');

const entryTextSection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');

const movies = [];

// 更新 entry-text display
const updateUI = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }
};

// 刪除功能
const deleteMovie = movieId => {
    let movieIndex = 0;
    for (const movie of movies) {
        if (movie.id === movieId) {
            break;
        }
        movieIndex++;
    }
    
    // splice 差異
    // splice 可以一次刪除多個，delete 只能一個
    // ex
    // var array=[ 'a', 'b', 'c', 'd' ];
    // array.splice(2, 1, 'e'); // 刪除 'c'，新增 'e'
    // console.log(array);     // [ 'a', 'b', 'e' , 'd' ]
    // ex
    // var array=[ 'a', 'b', 'c', 'd' ];
    // array.splice(2, 1);      // 刪除 'c'
    // console.log(array.length);     // 3
    // console.log(array);      // [ 'a', 'b', 'd' ]
    // ex
    // var array=[ 'a', 'b', 'c', 'd' ];
    // delete array[2];    // 刪除 'c'
    // console.log(array.length);     // 4 刪除後位置還在
    // console.log(array[2]);         // 'undefined' 
    movies.splice(movieIndex, 1); // 刪除 movies list 中資料

    // 移除畫面中資料
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove();
    // listRoot.removeChild(listRoot.children[movieIndex]); 適用舊版瀏覽器
    closeMovieDeletionModal();
    updateUI();
};

// 取消 DeletionModal
const closeMovieDeletionModal = () => {
    toggleBackdrop();
    deleteMovieModal.classList.remove('visible');
  };

// 刪除動作處理
const startDeleteMovieHander = movieId => {
    deleteMovieModal.classList.add('visible');
    toggleBackdrop(); // 開關背景
    const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive');
    let confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

    // ERROR 如果沒執行移除監聽的情況下
    // 一直點取消，會一直把confirmDeletionButton 的 listener 加入監聽
    // 當真正執行時刪除確認時，會把之後點擊過取消的，全部刪除
    // 所以要加入 刪除其他監聽

    // confirmDeletionButton.removeEventListener('click', deleteMovieHandler); // 無法解決 按多次取消時的監聽
    // 使用取代方式
    // cloneNode 不會 clone EventListener
    confirmDeletionButton.replaceWith(confirmDeletionButton,cloneNode(true));
    confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

    cancelDeletionButton.removeEventListener('click', closeMovieDeletionModal);

    cancelDeletionButton.addEventListener('click', closeMovieDeletionModal);
    // 點擊刪除確認
    confirmDeletionButton.addEventListener(
        'click',
        deleteMovie.bind(null, movieId)
    );
};

// 增加 Movie Element
const renderNewMovieElement = (id, title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
        <div class="movie-element__image">
            <img src="${imageUrl}" alt="${title}">
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5 stars</p>
        </div>
    `;

    // 因為要知道是哪一個點擊，所以使用 bind，代入 id
    newMovieElement.addEventListener('click', startDeleteMovieHander.bind(null, id));
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);
};

/**
 * 頁面DOM裡的每個節點上都有一個classList物件
 * 可以使用裡面的方法新增、刪除、修改節點上的CSS class
 * 還可以用它來判斷某個節點是否被賦予了某個CSS class
 * 
 * 新增 class
 * .classList.add("mystyle");
 * .classList.add("mystyle", "anotherClass", "thirdClass");
 * 
 * 移除 class
 * .classList.remove("mystyle");
 * .classList.remove("mystyle", "anotherClass", "thirdClass");
 * 
 * 切換 class
 * 如果 class 存在則移除，如果不在則增加
 * .toggle('myCssClass');
 * 
 * 是否存在 class
 * .classList.contains("mystyle");
 * 
 * class 數量
 * .classList.length;
 * 
 * item
 * .classList.item(0); // 第一個 class
 */
// 背景鎖定畫面
const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

// 因為刪除加入 confirm 所以把原因為 toggleMovieModal 折成開跟關
// const toggleMovieModal = () => {
    // addMovieModal.classList.toggle('visible');
// };
const closeMovieModal = () => {
    addMovieModal.classList.remove('visible');
}

const showMovieModal = () => {
    // if visible is set remove it, otherwise add it
    addMovieModal.classList.add('visible');
    toggleBackdrop();
};

// 清除 input
const clearMovieInput = () => {
    for (const userInput of userInputs) {
        userInput.value = '';
    }
};

// 取消鈕動作
const cancelAddMovieHandler = () => {
    closeMovieModal();
    toggleBackdrop();
    clearMovieInput();
};

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    // +ratingValue 把空值轉成 0
    if (
        titleValue.trim()  === '' ||
        imageUrlValue.trim() === '' ||
        ratingValue.trim() === '' ||
        +ratingValue < 1 ||
        +ratingValue > 5
    ) {
        alert('Please enter valid values (rating between 1 and 5).$a;')
    }

    const newMovie = {
        id: Math.random().toString(),
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue,
    };

    movies.push(newMovie); // 將新電影 push 到 movies list
    console.log(movies);
    closeMovieModal(); // 關閉 Movie Modal
    toggleBackdrop(); // 切換 backdrop 狀態
    clearMovieInput(); // 清除 input
    // render 新增的電影 Element
    renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
    updateUI();
};

// 背景鎖定控制
const backdropClickHandler = () => {
    closeMovieModal();
    closeMovieDeletionModal();
};


// 點擊 add button
startAddMovieButton.addEventListener('click', showMovieModal);
// 點擊 backdrop 背景
backdrop.addEventListener('click', backdropClickHandler);

cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);