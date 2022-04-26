let playerchoice=prompt("Play your hand (rock/paper/scissors")


function round(playersel,computersel){
if(playersel==computersel)
    return "draw"
if(playersel=="rock" && computersel=="scissors")
    return "Rock beats scissors. You win"
if(playersel=="rock" && computersel=="paper")
    return "Paper beats rock. You lose"
if(playersel="paper" && computersel=="scissors")
   return "scissors beat paper you lose"
if(playersel="paper" && computersel=="rock")
    return "paper beats rock. you win"
if(playersel="scissors" && computersel="paper")
return "scissors beat paper you win"
if(playersel="scissors" && computersel=="rock")
return "rock beats scissors .you lose"
}

function computerplay(){
    let selec
}