const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

function sendHttpRequest(method, url) {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        // get url
        xhr.open(method, url);

        xhr.responseType = 'json';

        // 確定有資料回傳，可使用onload來取得回傳的值
        xhr.onload = function() {
            resolve(xhr.response);
     
        };
        // 發送
        xhr.send();;

    });

    return promise;

}

function fetchPosts() {
    sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts').then(
        responseData => {
            // const listOfPosts = JSON.parse(xhr.response);
            const listOfPosts = responseData;
            console.log(listOfPosts);
            for (const post of listOfPosts) {
                const postEl = document.importNode(postTemplate.content, true);
                postEl.querySelector('h2').textContent = post.title.toUpperCase();
                postEl.querySelector('p').textContent = post.body;
                listElement.append(postEl);
            }
        }
    )
}
 
// 使用 async await
// async function fetchPosts() {
//     const responseData = await sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts');

//     const listOfPosts = responseData;
//     console.log(listOfPosts);
//     for (const post of listOfPosts) {
//         const postEl = document.importNode(postTemplate.content, true);
//         postEl.querySelector('h2').textContent = post.title.toUpperCase();
//         postEl.querySelector('p').textContent = post.body;
//         listElement.append(postEl);
//     }
// }

fetchPosts();



