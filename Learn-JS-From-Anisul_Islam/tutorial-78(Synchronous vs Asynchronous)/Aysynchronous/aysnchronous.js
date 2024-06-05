const taskone = () =>{
    console.log("task1");
}

const dataloading = () =>{
    console.log('task2 Data is Loading');
}

const tasktwo = () =>{
    setTimeout(dataloading,2000)
}

const taskthree = () =>{
    console.log("task3");
}

const taskfour = () =>{
    console.log("task4");
} 

const taskfive = () =>{
    console.log("task5");
}

taskone();
tasktwo();
taskthree();
taskfour();
taskfive();
