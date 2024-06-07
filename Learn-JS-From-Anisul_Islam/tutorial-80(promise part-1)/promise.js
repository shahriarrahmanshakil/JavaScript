
const promise1 = new Promise((resolve,reject)=>{
    let completedPromise = false;
    if(completedPromise){
        resolve('resolve');
    }else{
        reject('reject');
    }
});

// promise1.then((res) =>{
//     console.log(res);
// });
// promise1.catch((err)=>{
//     console.log(err);
// });
Promise.all(promise1);

///////////////////////////////////////////////////////////////

//race 

