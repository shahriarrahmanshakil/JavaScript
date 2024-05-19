// function addnumbers(x,y,z){
//     return x + y + z ;
// }
// let numbers = [1,2,3];

// console.log(addnumbers(numbers[0],numbers[1],numbers[2]));



// spread operator 
function addnumbers(x,y,z){
    return x + y + z ;
}
let numbers = [1,2,3];

console.log(addnumbers(...numbers)); //calling function by spread operator

let numbers1 = [5,6,7, ...numbers]//push array by spread operator (use any where)
console.log(numbers1);

//////////////////////////////////////////////////////////////////////

let num10 = [10,20,30];
let num20 = [40,50,60];
let num30 = [...num10, ...num20]; //concatination with spread operator
// let num30 = num10.concat(num20);
// console.log(num30);
console.log(num30);


///////////////////////////////////////////////////////////////////////

let obj1 = {
    name : 'Shahriar Rahman Shakil',
    age  : 25
}
let obj2 = {
    nationality : "Bangladesh",
    occupation : "Student"
}
let objs = {...obj1 , ...obj2} //concatination objects with spread operator
console.log(objs);
