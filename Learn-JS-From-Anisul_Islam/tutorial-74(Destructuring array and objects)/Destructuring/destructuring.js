//Array Destructuring
const numbers = [10,20,30,40,50];
let [num1,num2,num3,num4,num5] = numbers;
console.log(num1);
console.log(num2);

const names = ['Shahriar','Rakib','Raju','Shakil'];
let [n1,n2,...n3] = names;
console.log(n1);
console.log(n2);
console.log(...n3); //provides 2 values as string
console.log(n3);  //provides values as Array 

//swap variables
let name = "Shahriar Rahman Shakil";
let number = 1997;

[name,number]=[number,name];
console.log(number);//provide name variable value
console.log(name); //provide number variable value 

let a = 100;
let b = 99;
[a,b] = [b,a];
console.log(a); //shows variable b value
console.log(b); //shows variable a value