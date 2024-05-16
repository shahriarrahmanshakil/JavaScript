const div = document.querySelector('div');
// console.log(div);
div.addEventListener("click",function(){
    console.log('click');
})

div.addEventListener("dblclick",function(){
    console.log("double click");
});

div.addEventListener("mousedown",function(){
    console.log("mouse down");
});

div.addEventListener("mouseup",function(){
    console.log("mouse up");
});

div.addEventListener("mouseenter",function(){
    console.log("mouse enter");
});

div.addEventListener("mouseleave",function(){
    console.log("mouse leave");
});

div.addEventListener("mouseover",function(){
    console.log("mouseover");
});

div.addEventListener("mousemove",function(){
    console.log("mousemove");
});
