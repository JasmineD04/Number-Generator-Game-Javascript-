const submitGuess=document.querySelector('.guessSubmit')
const guessField=document.querySelector('.guessField')
const lastGuesses=document.querySelector('.guesses')
const displayMessage=document.querySelector('.lastResult')
const lowOrHi =document.querySelector('.lowOrHi')
const resultParas=document.querySelectorAll('.resultParas p')
let randomNo

function randomNumber(){
    return Math.floor(Math.random()*101) + 1;
}
//randomNo is the number to be checked
randomNo=randomNumber();
let guessCount = 1;
console.log(randomNo)
submitGuess.addEventListener('click',()=>{
    console.log(guessField.value)
    const inputValue=guessField.value
    if(guessCount === 1){
        lastGuesses.textContent='Your last guesses:';
    }
    lastGuesses.textContent +=' '+guessField.value;
    
    if(randomNo == inputValue){
        displayMessage.textContent="Congratulations";
        displayMessage.style.backgroundColor = 'green'
        gameOver()
    }
    else if(guessCount==10){
        gameOver()
    }
    else{
        if(randomNo > inputValue){
            displayMessage.textContent="Wrong";
            displayMessage.style.backgroundColor = 'red'
            lowOrHi.textContent="Too Low";
        }
        else{
            displayMessage.textContent="Wrong";
            displayMessage.style.backgroundColor = 'red'
            lowOrHi.textContent="Too High";
        }
    }
    guessField.value='';
    guessField.focus();
    // focus is used to set the cursor again on the text field
    guessCount+=1;
})

function resetGame(){
    console.log('hi');
    for(para of resultParas){
        para.textContent='';
        para.style.backgroundColor='white';
    }
    guessField.disabled=false;
    submitGuess.disabled=false;

    const resetBtn=document.querySelector('.reset-button')
    document.body.removeChild(resetBtn);
    //regenerate new random number
    randomNo=randomNumber();
    guessCount = 1;
    guessField.focus();
}

function gameOver(){
    guessField.disabled=true;
    submitGuess.disabled=true;

    const resetButton=document.createElement('button')
    resetButton.classList.add('reset-button');
    resetButton.textContent="Start new game";
    document.body.append(resetButton);
    resetButton.addEventListener('click',resetGame);
}