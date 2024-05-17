const myclock = document.querySelector('.myclock');
const message = document.querySelector('.message');

myclock.addEventListener('click', startClock);


function startClock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    minutes = formatetime(minutes);
    seconds = formatetime(seconds);
    
    let time = hours + ":" + minutes + ":" + seconds;
    
    message.textContent = time;

    setInterval(startClock,1000);

    function formatetime(value){
        if(value < 10){
            value = "0"+value;
        }
        return value;
    }
}