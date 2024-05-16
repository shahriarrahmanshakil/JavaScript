const textarea = document.querySelector("textarea");
textarea.addEventListener("keydown", function(){
    console.log("keydown");
});

textarea.addEventListener("keydown", function(e){
    if(e.repeat){
        alert("do not repeat");
    }
});

// textarea.addEventListener("keypress", function(){
//     console.log("keypress");
// });

// textarea.addEventListener("keyup", function(e){
//      console.log(e.key);
//      console.log(e.keyCode);
//      console.log(e.code);
//      console.log(e.shiftKey);
//     if(e.shiftKey){
//         console.log("Shift key press");
//     }

// });
