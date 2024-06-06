const test1 = (callback) => {
    console.log("test1");
    callback();
}

const test2 = (callback2) => {
    setTimeout(() =>{
        console.log("test-2 is loading")
        callback2();
    },2000)
}

const test3 = (callback3) => {
    console.log("test3");
    callback3();
}

const test4 = (callback4) => {
    console.log("test4");
    callback4()
}

const test5 = () => {
    console.log("test5");
}

test1(function f1(){
    test2(function f2(){
        test3(function f3(){
            test4(function f4(){
                test5()
            });
        });
    });
});

//use arrow function
// test1(()=>{test2(()=>{test3(()=>{test4(()=>{test5()});});});});
