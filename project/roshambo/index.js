//Object to tell score of the user
let scoreStr = localStorage.getItem('Score');
let score;
resetScore(scoreStr);
function resetScore(scoreStr){
    score =scoreStr ? JSON.parse(scoreStr) : {
        win: 0,
        loss: 0,
        tie: 0,
    };

score.displayScore = function(){
    return `Won: ${this.win}, Lost: ${this.loss}, Tie: ${this.tie}`;
}
}


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
        if(computerMove === 'Paper')  {
            score.loss++;
            return 'Computer Won.';
        }

        else if(computerMove === 'Scissors'){
            score.win++;
            return 'You Won.';
        }

        else {
            score.tie++;
            return `It's a tie`;
        }

    if(userMove === 'Paper')
        if(computerMove === 'Scissors'){
            score.loss++;
            return 'Computer Won.';
        }
        else if(computerMove === 'Stone'){
            score.win++;
            return 'You Won.';
        }
        else{
            score.tie++;
            return `It's a tie`;
        }

    if(userMove === 'Scissors')
        if(computerMove === 'Stone'){
            score.loss++;
            return 'Computer Won.';
        }
        else if(computerMove === 'Paper'){
            score.win++;
            return 'You Won.';
        }
        else{
            score.tie++;
            return `It's a tie`;
        }
}

function showResult(userMove, computerMove, result)
{
    localStorage.setItem('Score', JSON.stringify(score));
    alert(`You have chosen ${userMove}, Computer's choice is ${computerMove} 
    
    ${result}
    
    ${score.displayScore()}
    `);
}