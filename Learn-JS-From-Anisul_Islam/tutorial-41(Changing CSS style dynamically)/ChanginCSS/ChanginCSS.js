
var ChangingCSS = document.querySelector('#changingCSS');

function addstyle(){
    // ChangingCSS.style.color = "red";
    ChangingCSS.classList.add("changingCSS");
}

function removestyle(){
    // ChangingCSS.style.color = "";
    ChangingCSS.classList.remove("changingCSS");
}