// body 第一個元素的下一個元素
const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;

console.log(firstLi);

const section = document.querySelector('section');
const button = document.querySelector('button');

// section.style.backgroundColor = 'blue';
section.className = 'red-bg';

button.addEventListener('click', () => {
  // if (section.className === 'red-bg visible') {
  //   section.className = 'red-bg invisible';
  // } else {
  //   section.className = 'red-bg visible';
  // }

  // section.classList.toggle('visible');
  section.classList.toggle('invisible');
});

// 修改文字內容
// section.textContent = 'New content!';

// 修改 HTML
// section.innerHTML = '<h2>A new title!<?h2>';

// 利用 innerHTML 加入一個 li
const list = document.querySelector('ul');
list.innerHTML = list.innerHTML + '<li>Item 4</li>';

const p = document.querySelector('p');
// 在 element 之前
p.insertAdjacentHTML('beforebegin', '<h5>beforebegin</h5>')
// 在 element 裡面，第一個子元素之前
p.insertAdjacentHTML('afterbegin', '<h5>afterbegin</h5>')
// 在 element 裡面，最後一個子元素之後
p.insertAdjacentHTML('beforeend', '<h5>beforeend</h5>')
// 在 element 之後
p.insertAdjacentHTML('afterend', '<h5>afterend</h5>')


// 使用 createElement 建立新元素 
const newLi = document.createElement('li');
// 加到 list 中
list.appendChild(newLi);
// 加入也可修改 newLi 
newLi.textContent = 'Item 4';
newLi.style.backgroundColor = 'blue';

// 加到 list 後面，IE 不支援
// list.append(newLi);
// append 多個
// list.append(newLi1, newLi2)

// 加到 list 最前面，IE 不支援
// IE 可用 element.insertBefore()
list.prepend(newLi);

// IE、Safanri 不支援
// 在 list 最後的 child，的前面加入一個 newLi
list.lastElementChild.before(newLi);

// 在 list 最後的 child，的後面加入一個 newLi
list.lastElementChild.after(newLi);

// 在 list 的第一個 child，取代為 newLi
list.firstElementChild.replaceWith(newLi);

// clone，true 為深層 clone
const newLi2 = newLi.cloneNode(true);




// 返回 NodeList
const listItems = list.querySelectorAll('li');

// 返回 HTMLCollection
const listItems2 = list.getElementsByTagName('li');

// 加入一個 li
const newLi3 = document.createElement('li');
newLi3.textContent = 'Item 5';
list.append(newLi3);

// 觀察 listItems，一樣只有三個
console.log($listItems)

// 觀宗 listItems2，會有新加入的 newLi3
console.log(listItems2);


// 刪除元素 remove IE 不支援
listItems.remove();

// IE 支援的刪除方式
list.parentElement.removeChild(list);