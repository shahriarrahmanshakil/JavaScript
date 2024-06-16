// let $ = "###################################################";
// // let $$ = "Script-02";

// console.log(setTimeout(() => {console.log($)},5000))

const square = (x) => {
    console.log(`Square of ${x} : ${x * x}`);
}
square(7);
let mysquare = square;

    mysquare(9);

///////////////////////////////////////////////////////////////////////

const higherOrderFunction = (num,callback) => {
        callback(num);
}
higherOrderFunction(3,square);

////////////////////////////////////////////////////////////////////////

const higherOrderFunction2 = (num2,callback2) => {
    callback2(num2);
}
higherOrderFunction2(11,square);