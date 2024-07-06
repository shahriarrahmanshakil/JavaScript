// console.log(window);

// axios.get("https://jsonplaceholder.typicode.com/posts/1")
// .then((response) => console.log(response))
// .catch((error) => console.log(error))


// axios.post("https://jsonplaceholder.typicode.com/posts",{
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     })
// })
// .then((response) => console.log(response.data))

// axios.put("https://jsonplaceholder.typicode.com/posts/1",{
//     method: 'PUT',
//     body: JSON.stringify({
//         id  : 1,
//       title : 'Raihan Raju',
//       body  : 'bar',
//       userId: 1,
//     })
// })
// .then((response) => console.log(response))

const makeRequest = async (config) => {
    return await axios(config); 
}

// const getData = () => {
//     makeRequest("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => console.log(response))
//     .catch((error) => console.log(error))
// }
// getData();

// const sendData = () => {
//     makeRequest('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => console.log(response))
//     .catch((error) => console.log(error))
// }
// sendData();

const createData = () => {
    makeRequest({
    url:"https://jsonplaceholder.typicode.com/posts",
    method: 'POST',
    body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,}),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
}
createData();


