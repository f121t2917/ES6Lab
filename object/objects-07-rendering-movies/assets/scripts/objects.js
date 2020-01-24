const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

// 顯示電影
const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  // 如果沒有影片則隱藏
  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  // 搜尋過濾
  // includes() 方法會判斷陣列是否包含特定的元素，並以此來回傳 true 或 false
  // filteredMovies 為過濾後的電影
  const filteredMovies = !filter 
  ? movies 
  : movies.filter(movie => movie.info.title.includes(filter));

  // 產生元素
  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement('li');
    // 判斷是否有 info object
    // if (!('info' in movie)) { }
    // if (!(movie.info === undefined)) { }
    const { info, ...otherProps } = movie; // 分解object 解構 movie
    console.log(info);
    console.log(otherProps);
    // const { title: movieTitle } = info; // 解構 且 命名變數名稱

    // let text = info.title + ' - ';
    // let text = movie.info.title + ' - ';

    // 利用分解 object 取得 movie 的 getFormattedTitle()
    let { getFormattedTitle } = movie; // 分解後該常量包含一個指針，指向 movie.getFormattedTitle()

    // bind 是為未來執行準備了一個函數，會返回一個新的函數對象
    // call 則繼續執行並立即執行該函數
    // 如果 getFormattedTitle 是一個 interface，而不同的 class 實作的情況下
    // 使用 call 也會相當方便

    // call 和 apply 在傳遞參數不同的地方
    // getFormattedTitle.call(movie, , , ,); // call 傳入變數使用逗號隔開
    // getFormattedTitle.apply(movie, []); // apply 傳入變數使用陣列

    // getFormattedTitle = getFormattedTitle.bind(movie); // 解決 getFormattedTitle() 中 this 問題，(231)
    // let text = getFormattedTitle() + ' - '; // 分解後可直接使用 getFormattedTitle()

    // 使用 call
    let text = getFormattedTitle.call(movie) + ' - '; 

    for (const key in info) {
      if(key != 'title') {
        test = text + `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (
    title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    return;
  }

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue // 自訂名稱
    },
    id: Math.random().toString(), // .方法().方法() Method Chaining
    // getFormattedTitle: function() {
    getFormattedTitle() { // 可以刪除 function 關鍵字 
      // 如果使用 use strict 則出現 undefined，未使用則出現 this 是 Window
      // 因為不會自動 refer 到 object
      console.log(this); // Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
      return this.info.title.toUpperCase();
    }
  };

  movies.push(newMovie);
  console.log(movies);
  renderMovies();
};

// const searchMovieHandler = function() {
//   // 使用一般 function 的 this
//   console.log(this); // <button id="search-btn">Search</button>
//   const filterTerm = document.getElementById('filter-title').value;
//   renderMovies(filterTerm);
// };

const searchMovieHandler = () => {
  // 使用一般 arrow function 的 this 為 全堿的 window (234)
  console.log(this); // Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);

// arrow function
const members = { 
  teamName: 'Blue Rockets', 
  people: ['Max', 'Manuel'],
  getTeamMembers() {
    this.people.forEach(p => {
      console.log(this);
      console.log(p + ' - ' + this.teamName);
    });
  }
};

members.getTeamMembers();

const members1 = { 
  teamName: 'Blue Rockets', 
  people: ['Max', 'Manuel'],
  getTeamMembers() {
    this.people.forEach(function(p) { // 因為沒有進行任何綁定，所以只能將其綁定到全域對象 
      console.log(this); // Window {}
      console.log(p + ' - ' + this.teamName);
    });
  }
};
// 因為沒有使用 arrow function 時，this 會是 window
members1.getTeamMembers(); // Max - undefined