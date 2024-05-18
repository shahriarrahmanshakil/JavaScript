

document.getElementById("checkbtn").addEventListener('click',function(){
    
    let value = document.getElementById("textField").value;
    // console.log(value);
    
    
    try{
        if(value < 5){
            throw "Input is Low";
        }else if(value > 10){
            throw "Input is too Large";
        }

    }catch(error){
        console.log(error);
    }

});