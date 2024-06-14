//callback and higher order function
    function square(x){
        console.log(`Square of ${x} : ${x*x}`);
    }
    square(5);

    // const myfunction = square;

    function higheorderFunction(number, callback){
        console.log(callback(number));
    }
    higheorderFunction(7,square);