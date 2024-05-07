for(let i = 0; i < 3; i++){ 
    document.querySelectorAll(".mybtn")[i].addEventListener("click", function(){
        var text = this.innerHTML;
        // console.log(text);
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
    }) }
