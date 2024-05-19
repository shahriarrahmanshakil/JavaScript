//default and rest parameter
"use strict"
// function message(){
//     console.log("Hello");
// }
// message();

// function message(text = 'Hello this is default parameter'){
//     console.log(`${text}`);
// }
// message();
// message("I love Javascript");
///////////////////////////////////////////////////////

// function sum(x,y){
//     console.log(`${x},${y}`);
// }
// sum(10,20);

// rest parameter
function myfun(x,y, ...z){
    console.log(`x = ${x}, y = ${y}, z = ${z}`);
}
myfun(10,20,30,40,50);