
function test(x) {
    console.log(`Square of ${x} : ${x * x}`);
}
test(9);

function higherOrderFunction(number, callback){
    callback(number);
}
higherOrderFunction(7,test);