// console.log("XMLHttpRequest");
// console.log(window.XMLHttpRequest);

//event : onload(), onerror()
//property : response, responseText, responseType, responseURL, statusText, statusUrl
//function : open(), send(), setRequestHeder()

const makeRequest = (method, url, data) => {
    const xhr = new XMLHttpRequest(); 
    xhr.open(method, url);
    
    xhr.setRequestHeader('content-Type', 'application/json');

    xhr.onload = () => {
         let data = xhr.response;
         console.log(JSON.parse(data));

        xhr.onerror = () => {
         console.log('error is here')
        }
    };
    xhr.send(JSON.stringify(data));
}

const getData = () => {
    makeRequest('GET','https://jsonplaceholder.typicode.com/posts');
}

const sendData = () => {
    makeRequest('POST','https://jsonplaceholder.typicode.com/posts',{
        title: 'foo',
        body: 'bar',
        userId: 1,
    })
}

const updateData = () => {
    makeRequest('PUT','https://jsonplaceholder.typicode.com/posts/1',{
        id: 1,
        title: 'Rakibul Islam',
        body: 'WDPF',
        userId: 1,
    })
}
updateData();