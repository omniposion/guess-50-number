'use strict';
/*
console.log(document.querySelector('.message').textContent); // show only the text of the element with .textContent

document.querySelector('.message').textContent = 'Correct number ✌'
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 20;
document.querySelector('.score').textContent = 15;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);


// .message select class 'message', # to select id
//DOM starts with the document object at the very top when html page is loaded
// First child of the DOM document is the <HTML> element node
// <HTML> usually has 2 child node elements: <head>, <body>. They are siblings
// <body> and <head> also have children which have children
// DOM is WEB API that javascipt can access

function makeUpperCase(str) {
  let upCase = str.toUpperCase();
  return upCase;
}

*/
//GAME LOGIC - Guess My Number?
// What happens when the gues is correct? equal to secret number 1-20
// What happens when the guess is too low?
// What happens when the guess is too high?

let number = Math.round(Math.random() * 50) + 1; 
let score = 20;
let highScore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

// Math.random() - generates a random decimal number between 0 and 1.
// We have to code it to generate an integer(whole) positive number between 1-20
// We multiply Math.random() * 20, then we Math.round(Math.random()*20)


document.querySelector('.check').addEventListener('click', function(){
    checkGuess();
});


const checkGuess = function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
//When there is no input
    if(!guess || guess > 50){ // if guess is falsy, 0 or null or undefined or no value
        //document.querySelector('.message').textContent = '⛔ Not a valid number!';
        displayMessage('⛔ Not a valid number!');

//when player wins
    } else if (guess === number) {
        displayMessage('🎉 Correct number!');
        // document.querySelector('.message').textContent = '🎉 Correct number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = number;
        if(score > highScore){  
        highScore = score;


        document.querySelector('.highscore').textContent = highScore;
    } 
        
// when the guess is wrong     
    } else if(guess !== number){
        if(score > 1){
            displayMessage(guess > number ? '📈 Too high!': '📉 Too low!');
           // document.querySelector('.message').textContent = guess > number ? '📈 Too high!': '📉 Too low!';
            score --;
            document.querySelector('.score').textContent = score;
            } else {
            displayMessage('☠ You lost!');   
            //document.querySelector('.message').textContent = '☠ You lost!';
            document.querySelector('.score').textContent = 0;
            } 
         
         
//when the guess is too high  
    } 
//     else if (guess > number) {
//         if(score > 1){
//         document.querySelector('.message').textContent = '📈 Too high!';
//         score --;
//         document.querySelector('.score').textContent = score;
//         } else {
//         document.querySelector('.message').textContent = '☠ You lost!';
//         document.querySelector('.score').textContent = 0;
//         } 

// //when the guess is too low       
//     } else if (guess < number){
//         if(score > 1 ){
//         document.querySelector('.message').textContent = '📉 Too low!';
//         score --;
//         document.querySelector('.score').textContent = score;
// //When player loses        
//     } else{ 
//         document.querySelector('.message').textContent = '☠ You lost!';
//         document.querySelector('.score').textContent = 0;
//     }
//   }
}

//addEventListener('name of the event to listen(click), function to perform once clicked(event handler))
// the functions gets called once the event has happened(click), so you don't need to call the function 
// function() inside event listener is called anonymous HANDLER function
// value of an input element is always a string
// An empty string ( '' ), the number 0 , null , NaN , a boolean false , and undefined variables are all “falsy”. Everything else is “truthy”.

document.querySelector('.again').addEventListener('click', function() {
    document.querySelector('.score').textContent = score = 20;
    number = Math.round(Math.random() * 50) + 1;
    //console.log(number);
    displayMessage('Start guessing...');
    //document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

 }
 )

 document.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        checkGuess();
    }

 })



 // when the user has won the game in the if else statements
 // assign the score to the highScore variable
 // add the highscore to DOM, to '(.highscore').textContent using template literal string
 // if highscore is greater than previuos highscore replace it