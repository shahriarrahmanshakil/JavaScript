//Call Back and Higher Order Function 
function test(a) {
    console.log(`square of ${a} : ${a * a}`);
}
test(9);


function higherOrderFunction(number, callback){
    callback(number);
}
higherOrderFunction(10,test);
