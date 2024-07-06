// console.log(window);

// axios.get("https://jsonplaceholder.typicode.com/posts/1")
// .then((response) => console.log(response))
// .catch((error) => console.log(error))


axios.post("https://jsonplaceholder.typicode.com/posts",{
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    })
})
.then((response) => console.log(response.data))
