const Task1 = (callback) => {
    console.log("This is Task One");
    callback();
}

const Task2 = (callback) => {
    setTimeout(() =>{
        console.log("This is Task Two and \nData is Loading");
        callback();
    }, 3000);

}

const Task3 = (callback) => {
    console.log("This is Task Three");
    callback()
}

const Task4 = (callback) => {
    console.log("This is Task Four");
    callback()
}

const Task5 = (callback) => {
    console.log("This is Task Five");
    callback()
}

const Task6 = (callback) => {
    console.log("This is Task Six");
   
}

Task1(() => Task2(() => Task3(() => Task4(() => Task5(() => Task6() )))));

document.querySelector("button").addEventListener("click", () => console.log("Clicked"));
