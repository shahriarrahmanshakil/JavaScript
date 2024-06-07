//forEach, map and filter function 
let numbers = [5,6,7,8,9];
let newnumbers = [];
numbers.forEach(newfun);

function newfun(x){
    newnumbers.push(x*x);
}
console.log(newnumbers);

//////////////////////////////////////////////////////

let mnumbers = [90,80,70,60,50];
let nmnumbers = mnumbers.map(nmnumbersfun);

function nmnumbersfun(a){
    return a + 10;
}
console.log(nmnumbers);

/////////////////////////////////////////////////////////

let filnumber = [55,44,33,22,11];
let newfilnumber = filnumber.filter(filterfun);

function filterfun(a){
    return a > 25
}
console.log(newfilnumber);