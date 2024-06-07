//forEach() Method
const fruits = ['apple','Watermelon','Orange','Mango'];
let newFruits = [];
fruits.forEach(fruitsFunction);
document.getElementById("fruits").innerHTML = newFruits;

function fruitsFunction(cvalue,index,arr){
    // newFruits.push(arr);
    newFruits.push(cvalue);
    // newFruits += index +  ":" + cvalue;
}
console.log(newFruits);

////////////////////////////////////////////////////////////////////
//map() 
const cars = ['BMW','Honda','Suzuki','Yamaha'];
let newCars = cars.map((car)=>{
    return car;
});
console.log(newCars);

////////////////////////////////////////////////

//filter
const numbers = [10,-5,23,45,2,3,4,67];
const newNumbers = numbers.filter((v)=>{
    return 10 < v; 
});
console.log(newNumbers);















