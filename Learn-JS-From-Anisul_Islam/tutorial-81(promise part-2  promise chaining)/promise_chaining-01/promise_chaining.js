console.log("Hi");

    const taskOne = () => {
        return new Promise((resolve,reject) => {
            resolve("Task One is Complited");
        })
    }

    const taskTwo = () => {
        return new Promise((resolve,reject) => {
            resolve("Task Two is Complited");
        })
    }

    const taskThree = () => {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve("Task Three is Complited");
            },3000)
        })
    }

    const taskFour = () => {
        return new Promise((resolve,reject) => {
            reject(new Error("Task Four is not Complited"));
        })
    }

    const taskFive = () => {
        return new Promise((resolve,reject) => {
            resolve("Task Five is Complited");
        })
    }
    taskOne()
        .then((result) => console.log(result))
        .then(taskTwo)
        .then((result) => console.log(result))
        .then(taskThree)
        .then((result) => console.log(result))
        .then(taskFour)
        .then((result) => console.log(result))
        .then(taskFive)
        .then((result) => console.log(result))
        .catch((error) => console.log(error));
   
console.log("Bye");
