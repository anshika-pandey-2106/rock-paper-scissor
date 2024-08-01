//console.log("hello");

let humanScore=0, computerScore=0;

function getComputerChoice(){
    let random=Math.floor(Math.random()*3);
    let computerChoice;
    switch(random){
    case 0: computerChoice="rock";
            break;
    case 1: computerChoice="paper";
             break;
    case 2: computerChoice="scissors";
    break;}
    return computerChoice;

}

function getHumanChoice(){
    let humanChoice=prompt("rock, paper or scissors?");
    return humanChoice.toLowerCase();
}


function playRound(humanChoice, computerChoice)
 {
    if(humanChoice==computerChoice)
    {
        console.log("it's a tie!");
    }
    else if(humanChoice=="rock" && computerChoice=="scissors" ){
        console.log("Rock beats Scissors! You Win!");
        humanScore+=1;
    }
    else if(humanChoice=="paper" && computerChoice=="rock"){
        console.log("Paper beats Rock! You Win!");
        humanScore+=1;

    }
    else if(humanChoice=="scissors" && computerChoice=="paper" ){
        console.log("Scissors beat Paper! You Win!");
        humanScore+=1;
    }
    else if(humanChoice=="paper" && computerChoice=="scissors" ){
        console.log("Scissors beat Paper! You Lose!");
        computerScore+=1;
        
    }
    else if(humanChoice=="scissors" && computerChoice=="rock" ){
        console.log("Rock beats Scissors! You lose!");
        computerScore+=1;
    }
    else if(humanChoice=="rock" && computerChoice=="paper"){
        console.log("Paper beats Rock! You Lose!");
        computerScore+=1;

    }

 }

 function playGame(){
    // let i=1;
     for (let i=1;i<=5;i++)
         {
         let humanSelection=getHumanChoice();
         let computerSelection=getComputerChoice();
         playRound(humanSelection,computerSelection);
         console.log(`Human score:${humanScore}, Computer score:${computerScore}`);
     }
     if(humanScore>computerScore) 
     {
        console.log("Humans wins!");

     }
     else if(humanScore<computerScore)
     {
        console.log("Computer Wins!");
     }
     else{
        console.log("It's a tie!");
     }
 }
 
 playGame();
