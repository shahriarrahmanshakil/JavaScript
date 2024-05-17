console.clear();
// console.log(window);
// console.log(window.document);
// console.log(document);
// console.log(window.location);

//href 
console.log(location.href);

//protocol
console.log(location.protocol);

//hostname 
console.log(location.hostname);

//port
console.log(location.port);

//path name
console.log(location.pathname);

var mydiv = document.querySelector(".mydiv");
// console.log(mydiv);
var p1 = mydiv.children[0];
p1.textContent = location.href;

var p2 = mydiv.children[1];
p2.textContent = location.protocol;

var p3 = mydiv.children[2];
p3.textContent = location.hostname;

var p4 = mydiv.children[3];
p4.textContent = location.port;

var p5 = mydiv.children[4];
p5.textContent = location.pathname;

/////////////////////////////

const mybtn = document.getElementById("mybtn");
mybtn.addEventListener("click", function(){
    location.assign("https://www.studywithanis.com");
});
