for(let i = 0; i < 3; i++)
{
    document.querySelectorAll(".mybutton")[i].addEventListener("click",function()
    {
        var text = this.innerHTML;
        console.log(text);
        audio_play(text);
    })
}

    function audio_play(text)
    {
     switch(text)
        {
            case "Shahriar":
                var audio = new Audio("retro.mp3");
                audio.play();
                break;
            
            case "Rahman":
                var audio = new Audio("arcade.mp3");
                audio.play();
                break;
            
            case "Shakil":
                var audio = new Audio("retro.mp3");
                audio.play();
                break;
            
     
        }
    }
