//let playerchoice=prompt("Play your hand (rock/paper/scissors")
function computerplay(){
    const selection = ["rock","paper","scissors"]
    return( selection[Math.floor(Math.random()*selection.length)])
    
}

function round(e){
   // console.log('a');
    const selection = ["rock","paper","scissors"]
    const computersel=( selection[Math.floor(Math.random()*selection.length)]);
//console.log(computersel);
const playersel=e.target.id;
const result= document.querySelector(".result");

//console.log(playersel);
if(playersel==computersel)
    result.textContent= "draw";
if(playersel=="rock" && computersel=="scissors")
result.textContent= "Rock beats scissors. You win"
if(playersel=="rock" && computersel=="paper")
result.textContent=  "Paper beats rock. You lose"
if(playersel=="paper" && computersel=="scissors")
result.textContent=  "scissors beat paper you lose"
if(playersel=="paper" && computersel=="rock")
result.textContent=  "paper beats rock. you win"
if(playersel=="scissors" && computersel=="paper")
result.textContent=  "scissors beat paper you win"
if(playersel=="scissors" && computersel=="rock")
result.textContent=  "rock beats scissors .you lose"
//result.textContent=  "Enter a valid option"
}



const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener('click',round);
paper.addEventListener('click',round);
scissors.addEventListener('click',round);





/*function game()
{
    for(let i=0;i<5;i++){
        let playerchoice=prompt("Play your hand (rock/paper/scissors")
        const player=playerchoice.toLowerCase()
        alert(round(player,computerplay()))
    }
}
game()*/