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

console.log(window);
fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method : 'PUT',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    body : JSON.stringify({
        id : 1,
        title: 'Shahriar Rahman Shakil',
        body: 'Dhaka,Bangladesh',
        userId: 1,
    }),
})
.then((response) =>{
    if(!response.ok){
        throw new Error("fetch Error")
    }
    return response.json();
})
.then((response) => console.log(response))
.catch((error) => console.log(error));

