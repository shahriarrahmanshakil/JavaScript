// var Sum = 0;

// var x = 0;
// while(x <= 100){
//     Sum = Sum + x;
//     x = x + 2;
// }
// document.write(Sum);
var Sum = 0;
var a = 1;
while(a<=100){
    if(a%3 == 0 && a%5 == 0){
        document.write(a + "<br>");
        Sum = Sum + a;
    }
    a++
}
document.write("Total : " + Sum);