console.log("hi");

    const task1 = () =>{
        return new Promise((reslove,reject) => {
            reslove("Task One is Complited");
        });
    }

    const task2 = () =>{
        return new Promise((reslove,reject) => {
            setTimeout(()=>{
                reslove("Task Two is Complited");
            },3000);
        });
    }

    const task3 = () =>{
        return new Promise((reslove,reject) => {
            reslove("Task Three is Complited");
        });
    }

    const task4 = () =>{
        return new Promise((reslove,reject) => {
            reject("Task Four is not Complited");
        });
    }

    const task5 = () =>{
        return new Promise((reslove,reject) => {
            reslove("Task Five is Complited");
        });
    }

    const alltask = async() => {
        try{
            let t1 = await task1();
            console.log(t1);

            let t2 = await task2();
            console.log(t2);

            let t3 = await task3();
            console.log(t3);

            let t4 = await task4();
            console.log(t4);
            
            let t5 = await task5();
            console.log(t5);

        }catch(error){
             console.log(error);
        }
    }
    alltask();

console.log("bye");