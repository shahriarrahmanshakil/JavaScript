//How to Create promise 
const promise1 = new Promise((resolve,reject)=>{
        let complitePromise = false;

        if(complitePromise){
            resolve("Successfully Complited");
        }else{
            reject("Unsuccessfull");
        }
});
promise1.then((res) =>{
    console.log(res);
}).catch((err) => {
    console.log(err)
});