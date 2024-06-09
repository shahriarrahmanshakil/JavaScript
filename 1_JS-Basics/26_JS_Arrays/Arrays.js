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

//Using the JavaScript Keyword new
const books = new Array('Bangla','English','Math');     //Create Array with new keyword
console.log(books);
document.getElementsByClassName('books')[0].innerHTML = books;
