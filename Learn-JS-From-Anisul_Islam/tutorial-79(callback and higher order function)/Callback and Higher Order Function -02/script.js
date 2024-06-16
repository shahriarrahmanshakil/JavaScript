const first = (callback) =>{
    console.log("First");
    callback()
}

// const Dataloading = () =>{
//     console.log("second __Data is Loading");
// }

const second = (callback2) =>{
    setTimeout(()=>{
        console.log("second ....Dataloading")
        callback2()
    },3000);
   
}

const third = (callback3) =>{
    console.log("third");
    callback3()
}

const four = (callback4) =>{
    console.log("four");
    callback4();
}

const five = (callback5) =>{
    console.log("five");
    callback5();
}

const six = () =>{
    console.log("six");
}

first(()=>{
    second(()=>{
        third(()=>{
            four(()=>{
                five(()=>{
                    six()
                })
            })
        })
    })
});
