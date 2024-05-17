const input = document.querySelector('input');
const p = document.querySelector('p');

input.addEventListener("copy", function(){
    console.log("copy");
    p.innerText = "copy";
});

input.addEventListener("cut", function(){
    console.log("cut");
    p.innerText = "cut";
});

input.addEventListener("paste", function(){
    console.log("paste");
    p.innerText = "paste";
});
