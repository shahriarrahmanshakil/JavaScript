
const cars = ['walton','pegasus','runner','jamuna'];
document.getElementById('car').innerHTML = cars.length;
document.getElementById('car1').innerHTML = cars.toString();
document.getElementById('car2').innerHTML = cars.at(3); 
document.getElementById('car3').innerHTML = cars.join("---");

let pop = cars.pop();
console.log(pop);
console.log(cars);

let push = cars.push("Jamuna");
console.log(cars);
console.log(push);

let shift = cars.shift();
console.log(cars);
console.log(shift);

let unshift = cars.unshift('Honda');
console.log(cars);
console.log(unshift);
