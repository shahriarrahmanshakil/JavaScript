const numbers = [10,20,30,40,50];
let [num1,num2,...num3] = numbers;  //array Destrucring
// console.log(num1);

// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);


///////////////////////////////////////////////////////

//swap variables
let a = 30, b = 70;
[a,b] = [b,a];

// console.log(a);//a = 30 but shows a = 70
// console.log(b);

//////////////////////////////////////////////////////////

//object destructring
const studentInfo = 
{
    id : 101,
    name : "Shahriar Rahman Shakil",
    department : "Management",
    institute : "Dhaka College",
    //Nested Object
    language : {
        Native : "Bangla",
        Beginner : "English"
    }
}
//object destructuring process

// const {department,institute} = studentInfo;
// console.log(department);
// console.log(institute);

//Nested Object Destructuring

// const {name, language} = studentInfo;
// console.log(language.Native);

// console.log(studentInfo.id);
// console.log(studentInfo.name);
// console.log(studentInfo.department);
// console.log(studentInfo.institute);

///////////////////////////////////////////////////////////////////////////////

//destructuring function parameter
// function myinfos({id,name}){
//     console.log(`${id}, ${name}`);
// }


//ES-6 function
const myinfo = ({id,name}) => console.log(`${id}, ${name}`);



//creating object
const mystudent = {
    id : 202,
    name : "Shakil Shahriar"
}
myinfo(mystudent);