const div = document.querySelector("div");
const p = document.querySelector("p");

p.addEventListener('dragstart',function(e){
    e.dataTransfer.setData("Text", e.target.id);
});

div.addEventListener('dragover', function(e){
    e.preventDefault();
});

div.addEventListener('drop', function(e){
    let id = e.dataTransfer.getData("Text");
    div.appendChild(document.querySelector("#drag"));
    e.preventDefault();
});







