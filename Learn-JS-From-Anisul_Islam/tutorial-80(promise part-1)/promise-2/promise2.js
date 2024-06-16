//How to Create promise 
const promise1 = new Promise((resolve,reject)=>{
        let complitePromise = true;

        if(complitePromise){
            resolve("Successfully Complited");
        }else{
            reject(new Error("Not Complited"));
        }
});
promise1.then((res) =>{
    console.log(res);
}).catch((err) => {
    console.log(err.message)
});

///////////////////////////////////////////////////////

const promise2 = new Promise((resolve,reject) =>{
    resolve("Complited promise-02");
});
promise2.then((res2) =>{
    console.log(res2);
});

///////////////////////////////////////////////////////////
Promise.all([promise1,promise2]).then(([res1,res2]) => {
    console.log(res1,res2);
})
