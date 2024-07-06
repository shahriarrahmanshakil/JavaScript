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

const makeRequest = async (url,config) => {
    const response = await fetch(url,config);
    if(!response.ok){
        const message = `Error : ${response.status}`;
        throw new Error(message)
    }
    const data = await response.json();
    return data;
}

const getData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts')
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
}

const sendData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
}

const updateData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1',{
        method: 'PUT',
        body: JSON.stringify({
            id : 1,
          title: 'Rafia Kabir',
          body: 'WDPF',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
}
updateData();
