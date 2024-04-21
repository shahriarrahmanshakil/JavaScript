// var num1 = prompt("Enter you num1");
// var num2 =prompt("Enter you'r num2");
// var num3 = prompt("Enter you'r num3");

// num1 = parseInt(num1,10);
// num2 = parseInt(num2,10);
// num3 = parseInt(num3,10);



// var sum,sub,expon;

// sum = num1 + num2 + num3;
// document.write("total number : " + sum + "<br/>");

// sub = (num1 + num2) - num3 // 147-54 > 93
// document.write("sub number : " + sub);

// var firstNumber = 20;
// var SecondNumber = 10;

// var sum, sub, into, divided, modu;

// sum = firstNumber + SecondNumber;
// document.write(sum + "<br/>");

// sub = firstNumber - SecondNumber;
// document.write(sub + "<br/>");

// into = firstNumber * SecondNumber;
// document.write(into + "<br/>");

// divided = firstNumber / SecondNumber;
// document.write(divided + "<br/>");

// modu = firstNumber % SecondNumber;
// document.write(modu);

var num1 = prompt("Enter you'r first number");
var num2 = prompt("Enter you'r Second number");

num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);

var sum, sub, into, divided, modu;

sum = num1 + num2;
document.write(num1 + "+" + num2 + "=" + sum + "<br/>");

sub = num1 - num2;
document.write(num1 + "-" + num2 + "=" + sub + "<br/>");

into = num1 * num2;
document.write(num1 + "*" + num2 + "=" + into + "<br/>");

divided = num1 / num2;
document.write(num1 + "/" + num2 + "=" + divided + "<br/>");

modu = num1 % num2;
document.write(num1 + "%" + num2 + "=" + modu);
