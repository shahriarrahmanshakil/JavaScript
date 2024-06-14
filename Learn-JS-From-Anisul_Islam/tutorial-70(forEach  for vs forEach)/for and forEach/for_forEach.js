//for and forEach method 

//for 

const numbers = [10,20,30,40,50,60,70,80,90,100];

for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}



//forEach 

const fruits = ['Apple','Orange','Mango','Jackfruit'];

// console.log(fruits.forEach((fruit) =>{console.log(fruit);}));    //Arrow function use 
    console.log(fruits.forEach(fruit));

    function fruit (currentValue,index,arr){
        console.log(currentValue);
    }


///////////////////////////////////////////////////////////////////////////////////////////

const Numbers = [5,6,7,8,9];
let squareNumbers = [];
Numbers.forEach(mynumbers);

function mynumbers(num){
    squareNumbers.push(num * num); 
}

console.log(squareNumbers);

////////////////////////////////////////////////////////////////////////////////////////////

const newNumbers = [9,8,7,6,75,55];
newNumbers.forEach(newfunction);
console.log(newNumbers);
function newfunction(num,index,arr){
    arr[index] = num + 10;
}