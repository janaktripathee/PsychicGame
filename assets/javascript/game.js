//initializing variables
var letter=[ 'a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var userGuessedLetter= [];
var userLetterToGuess = null;
var totalGuessLeft=10;
var wins=0;
var losses =0;

var guessLetterLeft = function(){
    document.querySelector("#guess-left").innerHTML = totalGuessLeft;
}
guessLetterLeft()

var guessletter = function(){
    userLetterToGuess = letter[Math.floor(Math.random()*letter.length)];
    console.log(userLetterToGuess,'letterTOGEUSS'); 
}
guessletter();

var displayUserGuessesLetters= function(){
    document.querySelector('#guess-so-far').innerHTML = userGuessedLetter.join(", ");
    console.log('userGuessedLetter',userGuessedLetter);
}

document.onkeydown = function(event){
    totalGuessLeft--;
    var letters = String.fromCharCode(event.which).toLowerCase();
    console.log(letters,'ss');
    userGuessedLetter.push(letters);
    guessLetterLeft();
    displayUserGuessesLetters();
    console.log(letters,userLetterToGuess,"true or false");
    if(letters == userLetterToGuess){
        wins++;
        document.querySelector('#wins').innerHTML = wins;
        reset();
    }
    if(totalGuessLeft==0){
        losses++;
        document.querySelector('#losses').innerHTML = losses;
        reset();
    }
}

var reset =function(){
   totalGuessLeft=10;
   userGuessedLetter= [];
    guessLetterLeft();
    guessletter();
    displayUserGuessesLetters();
}
