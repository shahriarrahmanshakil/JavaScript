// An array is a special variable, which can hold more than one value:
//Syntax : const array_name = [item1, item2, ...];

const cars = ["Honda","Suzuki","Yamaha"];
console.log(cars);
document.getElementById('cars').innerHTML = cars;

const bikes = [
    'Hero Honda',
    'Bajaj',
    'Pulser',
    'walton',
    'pegasus'
];


// ES2023 added the Array with() method as a safe way to update elements in an array without altering the original array.
const mybikes = bikes.with(0, 'Hero'); 
console.log(mybikes);
let x = document.getElementsByClassName('bikes')[0];
    x.innerHTML = mybikes;
// console.log(x);
let arraylength = bikes.length;
console.log(arraylength);

//Using the JavaScript Keyword new
const books = new Array('Bangla','English','Math');     //Create Array with new keyword
console.log(books);
document.getElementsByClassName('books')[0].innerHTML = books;

//Accessing Array Elements
let car = cars[0];
console.log('This is my new ' + car);

// Changing an Array Element
carRename = cars[2] = 'BMW';
console.log(carRename);

//Converting an Array to a String
const fruits = ['Banana','Orange','Apple','Mango'];
console.log(fruits.toString());
document.write(fruits.toString());
document.getElementsByClassName('fruits')[0].innerHTML = fruits.toString();
console.log(typeof(fruits));
/////////////////////////////////////////////////////////////////////////////////////

// Accessing the Last Array Element
const myfruits = ["Banana", "Orange", "Apple", "Mango"];
let myfruit = myfruits.length;
console.log(fruits[myfruit - 1]);

// Looping Array Elements
const Fruits = ["Banana", "Orange", "Apple", "Mango"];
let Flen = Fruits.length;

let text = "<ul>"
for(let i = 0; i < Flen; i++){
    text += "<li>" + Fruits[i] + "</li>"
}
text += "</ul>"
// console.log(text);
document.getElementsByClassName('text')[0].innerHTML = text;
