// foreach loop

// let number = [10,20,30,40,50];
// for(let i = 0; i < number.length; i++){
//    console.log(number[i]);
// }

////////////////////////////////////////////////////////
let numbers = [10,20,30,40,50];
numbers.forEach(myfunction);

function myfunction(mynumbers){
    console.log(mynumbers);
}

//////////////////////////////////////////////////////////

let mynum = [11,22,33,44,55,66,77,88,99];
let mystore = [];
mynum.forEach(myfun);

function myfun(store){
    mystore.push(store * store);
}
console.log(mystore);

////////////////////////////////////////////////////////////

let newarr = [10,20,30];
newarr.forEach(function(mainarr,mainarr_index,newarray){
    newarray[mainarr_index] = mainarr + 5;
})
console.log(newarr);
