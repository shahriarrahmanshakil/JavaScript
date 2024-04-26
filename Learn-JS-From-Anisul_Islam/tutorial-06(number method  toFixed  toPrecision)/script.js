var num = 67;
num=toString(num);
console.log(typeof(num));

var string = "809";
string=parseInt(string)   //convert to decimal number
console.log(typeof(string));

var Num = "78.90556";
Num=parseFloat(Num);
console.log(typeof(Num));

var xumber = 7.4387587;
// console.log(typeof(xumber));
console.log(xumber.toFixed(2)); //show after (.)character
// console.log(xumber.toPrecision(4)); //show total character with (.)


// convert string to number
console.log(typeof(Number("56")));
console.log(typeof(Number("56.7")));
console.log(Number("56.7"));
console.log(Number(true));
console.log(Number(false));