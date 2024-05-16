var input = document.querySelector("input");
input.addEventListener("blur", function(e){
    // console.log("blur");
    // input.style.backgroundColor = "";
    // console.log(e.target.value);
    console.log(e.target.value);
    input.value = e.target.value.toUpperCase();
});

input.addEventListener("focus", function(){
    // console.log("focus");
    // input.style.backgroundColor = "green";
});

input.addEventListener("focusin", function(){
   console.log("focus in"); 
});

input.addEventListener("focusout", function(){
    console.log("focus out");
});