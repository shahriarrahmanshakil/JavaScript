const slideshowElements = document.querySelectorAll(".slideshow-Element");

let count = 1;
setInterval(()=>{
    count++;
    let currentelement = document.querySelector(".current");
    
    currentelement.classList.remove("current");
    
    if(count>slideshowElements.length){
        slideshowElements[0].classList.add('current');
        count =1;
    }else{
        currentelement.nextElementSibling.classList.add("current")
    }

},3000);