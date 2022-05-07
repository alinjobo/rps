//let playerchoice=prompt("Play your hand (rock/paper/scissors")
function computerplay(){
    const selection = ["rock","paper","scissors"]
    return( selection[Math.floor(Math.random()*selection.length)])
    
}
let playerscore=0;
let computerscore=0;

const result= document.querySelector(".result");
const pscore=document.querySelector(".score #pscore");
const cscore=document.querySelector(".score #cscore");
function round(e){
    
    const selection = ["rock","paper","scissors"]
    const computersel=( selection[Math.floor(Math.random()*selection.length)]);
   // console.log('a');
   
    //console.log(computersel);
    const playersel=e.target.id;

    //console.log(playersel);
    function cwin(){
        computerscore++;
        cscore.innerText=computerscore;
    };
    function pwin(){
        playerscore++;
        pscore.innerText=playerscore;
    };
    if(playersel==computersel)
        result.textContent= "draw";
    if(playersel=="rock" && computersel=="scissors"){
        pwin();
        result.textContent= "Rock beats scissors. You win"}
    if(playersel=="rock" && computersel=="paper"){
        cwin();
        result.textContent=  "Paper beats rock. You lose"}
    if(playersel=="paper" && computersel=="scissors"){
        cwin();
        result.textContent=  "scissors beat paper you lose"}
    if(playersel=="paper" && computersel=="rock"){
        pwin();
        result.textContent=  "paper beats rock. you win"}
    if(playersel=="scissors" && computersel=="paper"){
        pwin();
        result.textContent=  "scissors beat paper you win"}
    if(playersel=="scissors" && computersel=="rock"){
        cwin();
    result.textContent=  "rock beats scissors .you lose"}
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