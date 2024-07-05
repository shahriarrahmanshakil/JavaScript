console.log("well-come");
    //How to Create Promise (Pending, Reslove, Reject)
    const mypromise1 = new Promise((resolve,reject) => {
        let complitedPromise = true;
        if(complitedPromise){
            resolve("Promise Successfully Complited - 01");
        }else{
            reject(new Error("Promise Unsuccessfull"));
        }
    });

    mypromise1.then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error.message)
    });

    //Create Another Promise
    const mypromise2 = new Promise((resolve,reject) => {
        resolve("Promise Successfully Complited -02");
    });
    mypromise2.then((result) => {
        console.log(result);
    })

    Promise.all([mypromise1,mypromise2]).then((result) => {
        console.log(result);
    });


console.log("End")

