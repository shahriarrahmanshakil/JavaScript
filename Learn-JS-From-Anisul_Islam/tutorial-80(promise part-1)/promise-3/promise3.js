console.log("well-come");
    //How to Create Promise (Pending, Reslove, Reject)
    const mypromise = new Promise((resolve,reject) => {
        let complitedPromise = false;
        if(complitedPromise){
            resolve("Promise Successfully Complited");
        }else{
            reject("Promise Unsuccessfull");
        }
    });

    mypromise.then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error)
    });


console.log("End")

