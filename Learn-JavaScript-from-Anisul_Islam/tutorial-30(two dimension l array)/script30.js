

function highestRunscore(playerInfo){
        // document.write(playerInfo);
        // console.log(playerInfo);
        let highestscorer = playerInfo[0][0];
        let highestscore = playerInfo[0][1];

        for(let i = 1; i < playerInfo.length; i++){
            if(highestscore < playerInfo[i][1]){
            
                highestscore = playerInfo[i][1];
                highestscorer = playerInfo[i][0];
            }
        }
        return highestscorer;
}

var playerInfo = [
    ["A", 10],
    ["B", 20],
    ["C", 30],
    ["D", 40],
    ["E", 50],
];

var Name = highestRunscore(playerInfo);
document.write(Name);