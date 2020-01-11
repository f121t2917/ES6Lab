// window.alert()
// console.dir(window.document);

// element vs node
// 可以使用 document.body.childNodes 觀察
// 發現很多 #text
// A Node is an interface from which a number of DOM types inherit, 
// and allows these various types to be treated (or tested) similarly.
// DOM中的Element，Text和Comment 都繼承於 Node
// 分別是 ELEMENT_NODE TEXT_NODE COMMENT_NODE
// 平常使用 HTML 上的元素的 ELEMENT 是 ELEMENT_NODE 的 Node

// Node 表示 DOM 樹的結構，而在 HTML 中，節點與節點之間插入的文字為 TEXT_NODE

/*
<body>
    we can put text here 1...
    <h1>China</h1>
    we can put text here 2...
    <!-- My comment ...  -->
    we can put text here 3...
    <p>China is a popular country with...</p>
    we can put text here 4...
    <div>
      <button>See details</button>
    </div>
    we can put text here 5 ...
</body>

body的直系元素（3）(h1 p div)＋ COMMENT_NODE(1)註解 + TEXT_NODE(5) = 9
*/

/*
NodeList vs HTMLCollection
我們用childNodes找到了NodeList，但我們操作DOM時往往不想操作Node(我只想操作元素Element)，那麼如何獲取ElementList呢？

其實我們經常使用的getElementsByXXX返回的就是一個ElementList，只不過它的真實名字是ElementCollection。

就像NodeList是Node的集合一樣，ElementCollection也是Element的集合。但需要特別注意的是：

NodeList和ElementCollcetion都不是真正的陣列

如果document.getElementsByTagName('a') instanceof Array，那麼必然是false。
*/

const h1 = document.getElementById('main-title');

h1.textContent = 'Some new title!';
h1.style.color = 'white';
h1.style.backgroundColor = 'black';

// first-of-type 取第一個，last-of-type 取最後一個
const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ' (Changed!)';

const body = document.body;
// querySelectorAll 取全部
// const listItemElements = document.querySelectorAll('li');
const listItemElements = document.getElementsByTagName('li');

for (const listItemEl of listItemElements) {
  console.dir(listItemEl);
}

const ul = document.querySelector('ul');
// querySelector 取第一個
console.dir(ul.querySelector('li'));

// 觀察 html 中 li 前面的空格也是 text
console.log(ul.childNodes);

const liFirst = document.querySelector('li');
// closest 找尋最近的一個祖先元素
console.log(liFirst.closest('body'));
// header 不是 li 的祖先元素
console.log(liFirst.closest('header'));

// header 不是 ul 的祖先元素，是在 ul 的前一個，可以使用 previousElementSibling
console.log('ul.previousElementSibling');
console.log(ul.previousElementSibling);

console.log('ul.previousSibling');
console.log(ul.previousSibling);

// ul 的下一個，可以使用 nextElementSibling
console.log('ul.nextElementSibling');
console.log(ul.nextElementSibling);

console.log('ul.nextSibling');
console.log(ul.nextSibling);

