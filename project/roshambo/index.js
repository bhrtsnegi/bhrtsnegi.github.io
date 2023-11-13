let computerChoice = '';

function generateComputerChoice(){
    let randomNumber = Math.random()*3;
    if(randomNumber  > 0 && randomNumber<=1){
        computerChoice = 'Stone';
    }
    else if(randomNumber  > 1 && randomNumber<=2){
        computerChoice = 'Paper';
    }
    else{
        computerChoice = 'Scissors';
    }

}