const div = document.querySelector('div');
// console.log(div);
div.addEventListener("click",function(e){
    // console.log('click');
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.textContent);
    console.log(e.target.innerText);

})






// div.addEventListener("dblclick",function(){
//     console.log("double click");
// });

// div.addEventListener("mousedown",function(){
//     console.log("mouse down");
// });

// div.addEventListener("mouseup",function(){
//     console.log("mouse up");
// });

// div.addEventListener("mouseenter",function(){
//     console.log("mouse enter");
// });

// div.addEventListener("mouseleave",function(){
//     console.log("mouse leave");
// });

// div.addEventListener("mouseover",function(){
//     console.log("mouseover");
// });

// div.addEventListener("mousemove",function(e){
//     // console.log("mousemove");
//     // console.log("clientX = " + e.clientX + "clientY = " + e.clientY);
//     console.log("offsetX = " + e.offsetX + "offsetY = " + e.offsetY);
// });


var mybutton = document.querySelectorAll(".mybtn");
Array.from(mybutton).map((button) => {
    button.addEventListener("click", function(e){
        console.log(e.target.innerText);
    });
});