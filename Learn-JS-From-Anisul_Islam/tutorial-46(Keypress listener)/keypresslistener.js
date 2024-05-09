document.addEventListener("keypress", function(event){
    var text = event.key;
    document.querySelector("p").innerHTML =  "You have pressed " + text;
});

var count = 0;
document.querySelector("textarea").addEventListener("keypress", function(event){
    count++
    var text = event.key;
    document.querySelector("h1").innerHTML =  "You have pressed " + count;
});