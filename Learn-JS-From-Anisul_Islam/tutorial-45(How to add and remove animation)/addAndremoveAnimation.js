for(let i = 0; i < 3; i++)
    {
        document.querySelectorAll(".mybtn")[i].addEventListener("click", function(){
            var text = this.innerHTML;
            console.log(text);
            audioPlay(text);
            adanimation(text);
        });
    }

   

    function audioPlay(text)
    {
        switch(text){
            case"a":
                var audio = new Audio("arcade.mp3");
                audio.play();
                break;

            case"b":
                var audio = new Audio("retro.mp3");
                audio.play();
                break;

            case"c":
                var audio = new Audio("game-level.mp3");
                audio.play();
                break;
        }
    }

    function adanimation(text)
    {
        var dotbtn = document.querySelector("." + text);
        dotbtn.classList.add("addAnimation");

        setTimeout(function(){
            dotbtn.classList.remove("addAnimation");
        },1000);
    }
   
