/* 
=> 4 ways to call api (i) XMLHttpRequest (ii) fetch (iii) axios (iv) jQuery

=> fetch() has replaced XMLHttpRequest
=> fetch() --global method for making HTTP Request
=> 2 ways to call --then, async await
=> + fetch() is easy to use compare to XMLHttpRequest
=> + fetch() returns a promise
=> - returned promise can only handle network error
=> - does not support all the older browser
*/

const makeRequest = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
}

const getData = () => {
    makeRequest()
    .then((response) => console.log(response))
}
getData();