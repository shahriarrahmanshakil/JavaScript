//ES-5

// var x = 10;
// if(true){
//     var x = 15;
// }
// console.log(x);


//ES-6
let x = 10;
if(true){
    let x = 15;
}
console.log(x);

//ES-6
let a = 11;
for(let a = 1; a <= 10; a++){
    console.log(a);
}
console.log("_______");
console.log(a);


// const num = 20;//constant variable are not changed
// if(true){
//     num = 20;//constant variable are not changed
// }
// console.log(num);//constant variable are not changed

//string concatination
//ES-5
// var ab = 10;
// var bc = 20;
// var cc = ab + bc;
// console.log("Sum is " + cc + ". The End");

//string concatination
//ES-6
// let ab = 10;
// let bc = 20;
// let cc = ab + bc ;

// console.log(`Sum is ${cc} The End`);

let name = "Shahriar Rahman Shakil";
// let message = "I am Shahriar Rahman Shakil. I am Learning JavaScript"; //ES-6

let  message = `I am ${name} . I am Learning JavaScript` 
console.log(message);


//ES-05 
//function Declear
// function myfunction(x,y){
//         var sum = x + y 
//         console.log(sum);
// }
// myfunction(20,30);


//ES - 06
//function Declear
const myfunction = (x,y) => {
    let sum = x + y ;
    console.log(sum);
}
myfunction(20,20);
