var country = ["Bangladesh", "Nepal","Vhutan"];
for(let i = 0; i < 3; i++){
    document.write(country[i]);
}

document.write("<br>");


function highestscore(hscore){
    let max = hscore[0];
    for (let i = 1; i < hscore.length; i++){
        if(max < hscore[i]){
            max = hscore[i];
        }
    }
    return max;
}
var hscore = [2,5,6,7,8,9];
var maxScore = highestscore(hscore);

document.write(maxScore);
