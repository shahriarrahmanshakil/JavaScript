//Error Handling -> try, catch, finally, throw
//

// alert("Hello World");
// alert(x);
// alert("I Love My Country");

    try{
        //code test
        alert("Hello Bangladesh");
        alert(x);
        alert("I Love My Country");
    }catch(err){
        //handle error
        alert("I am catch block");
        console.log(err);
        console.log(err.name);
        console.log(err.message);
    }finally{
        alert("I Love My Country");
    }