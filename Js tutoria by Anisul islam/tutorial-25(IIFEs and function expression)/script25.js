// function display(){
//     document.write("Hello World");
// }
// display();

// IIFE(Imidiatly Invokedable function Expression)
// (function display(massage){
//     document.write(massage);
// })("Hello Bangladesh");


// (function total(a,b){
//     document.write(a+b);
// }(6,9))

function display2(a,b,c){
    result = a * b * c ;
    return result;
}
var result = display2(3,4,5);
document.write(result);