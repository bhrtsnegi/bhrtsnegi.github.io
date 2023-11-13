function generateComputerChoice(){
    let randomNumber = Math.random()*3;
    if(randomNumber  > 0 && randomNumber<=1){
        return 'Stone';
    }
    else if(randomNumber  > 1 && randomNumber<=2){
        return 'Paper';
    }
    else{
        return 'Scissors';
    }
}