//JavaScript By Default Synchronous Programmig Language
//Synchronous Programming 

console.log("Task-01");
console.log("Task-02");
console.log("Task-03");
console.log("Task-04");
console.log("Task-05");
console.log("Task-06");

console.log("-------------------------------------------");

const Dataloading = () => {
    console.log("This is Task Four and \nData is Loading");
}

const taskOne = () => {
    console.log("This is Task One");
}

const taskTwo = () => {
    console.log("This is Task Two");
}

const taskThree = () => {
    console.log("This is Task Three");
}

const taskFour = () => {
    setTimeout(Dataloading,2000)
}

const taskFive = () => {
    console.log("This is Task Five");
}

const taskSix = () => {
    console.log("This is Task Six");
}

taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();
taskSix();

