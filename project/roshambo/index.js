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

function getResult(userMove, computerMove){
    if(userMove === 'Stone')
        if(computerMove === 'Paper')    return 'Computer Won.';

        else if(computerMove === 'Scissors')    return 'You Won.';

        else return `It's a tie`;

    if(userMove === 'Paper')
        if(computerMove === 'Scissors')    return 'Computer Won.';

        else if(computerMove === 'Stone')    return 'You Won.';

        else return `It's a tie`;

    if(userMove === 'Scissors')
        if(computerMove === 'Stone')    return 'Computer Won.';

        else if(computerMove === 'Paper')    return 'You Won.';

        else return `It's a tie`;

}


function showResult(userMove, computerMove, result)
{
    alert(`You have chosen ${userMove}, Computer's choice is ${computerMove} and ${result}`);
}