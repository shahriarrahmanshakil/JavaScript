let myAge = 25 ;

if (myAge > 30){
    document.write("You are young Man");
}else if(myAge >= 25){
    document.write( "you are mature <br> <br>");
}


// week Name
let day = 7 ;

if (day < 1){
    document.write("Saturday");
}else if(day < 2){
    document.write( "Sunday");
}else if(day < 3){
    document.write("Monday")
}else if(day < 4){
    document.write( "Sunday");
}else if(day < 5){
    document.write("Monday")
}else if(day < 6){
    document.write( "Sunday");
}else{
    document.write("Friday <br><br>")
}

// Nessting Statement
let WDPF = 58;
if (WDPF < 100){
    if(WDPF >=150){
        document.write("Web Application")
    } else if (WDPF === 100){
        document.write("Wordpress")
    }else{
        document.write("Web Application Development With PHP");
    }
}