//Synchronous Programming 
const task01 = () => {
    console.log("task-01");
}

const Dataloading = () => {
    console.log("task-02 Data is Loading");
}

const task02 = () => {
    setTimeout(Dataloading, 3000);
}

const task03 = () => {
    console.log("task-03");
}

const task04 = () => {
    console.log("task-04");
}

const task05 = () => {
    console.log("task-05");
}

task01();
task02();
task03();
task04();
task05();