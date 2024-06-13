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


//Object Destruturing 
const studentInformation = {
    nam : "Shahriar Rahman Shakil",
    department : "Management",
    college : "Dhaka College"
}
let {nam,department,college} = studentInformation;   //object destructuring
let info1 = nam;
let info2 = department;
let info3 = college;
console.log(info1);
console.log(info2);
console.log(info3);
console.log("-------------------------------------------");


//Nested Object Destruturing 
const Info = {
    fullName : "Raihan Molla Raju",
    Address : "Lalbag,Dhaka",
    language : {
        native : "Bangla",
        beginer : "English",
    }
}
let {fullName,Address,language} = Info;
console.log(fullName);
console.log(Address);
console.log(language.native);
console.log(language.beginer);
console.log("-------------------------------------------");


//Function Destructuring
const Einfo = ({id,name}) =>{
    console.log(` ID:${id} \n Name:${name}`);
}

const employinfo = {
    id : 120001,
    name : "Jakir Hossain"
    }
Einfo(employinfo);