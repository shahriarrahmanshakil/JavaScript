
document.querySelector("#btn1").addEventListener("click", myfunction);

function myfunction(){
    document.write("Hello Bangladesh ");
}

// create anonymous function
document.querySelector("#btn2").addEventListener("click", function myfunction1(){
   document.write("Thsi is anonymous function");
})

myvar = document.querySelector("h1");
myvar.addEventListener("mouseover",function(){
    myvar.classList.add("mystyle");
});

myvar = document.querySelector("h1");
myvar.addEventListener("mouseout",function(){
    myvar.classList.remove("mystyle");
});


