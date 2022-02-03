function sendHttpRequest(method, url, data) {
    const promise = new Promise(function(resolve, reject){
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);
    
        xhr.responseType = 'json';
    
        xhr.onload = function () {
            resolve(xhr.response);
            
        }
        xhr.send(JSON.stringify(data));
    });
    return promise; 
}


async function createPost(title, content) {
    const userId = Math.random();
    const post = {
        title: title,
        body: content,
        userId: userId
    };

    sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post)
}

createPost('dummy', 'a dummy post!!!');
