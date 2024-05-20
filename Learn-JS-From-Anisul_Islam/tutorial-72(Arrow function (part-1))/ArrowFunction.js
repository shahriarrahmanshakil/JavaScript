    //Normal function
    function display(){console.log("I am display function");}
    display();

    //arrow function
    const display1 = () => {console.log("I am display1 arrow function");}
    display1();

    //arrow function 
    const display2 = () => console.log("Another Arrow Function");
    display2();


    //Normal function
    function message1(){
        return "Hello World";
    }
    console.log(message1());

    //arrow function
    const message2 = () =>{       
         return "Hello World(arrow function)";
    }
    console.log(message2());

    //arrow function more flexible
    const message3 = () => 'hello message3';
    console.log(message3());


    //Normal function
    function myvalu(a,b){
        return a + b;
    }
    console.log(myvalu(90,110));

    //arrow function
    const myvaluarrow = (x,y) => x + y ;
    console.log(myvaluarrow(10,20));

