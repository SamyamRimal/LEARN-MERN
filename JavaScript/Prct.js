// Generate a random number between 1 and 100.
// let num= Math.random()*100+1;
// let result = Math.floor(num)


//Guess the Random number

const max = prompt ("Enter the Max range of numbers.");

const random = Math.floor(Math.random()*max+1);

let guess = prompt ("Guess your Number");
while(true){
    if(guess == "quit"){
        console.log("You Quited");
        break;
    }
    if (guess == random){
        console.log("You guesses the correct number! which is", random);
        break;
    }
    else if(guess>random){
        guess = prompt("Number is Smaller. Please Try again!");
    }
    else if (guess<random){
        guess = prompt("Number is Larger. Please Try again!");
    }
    // else{
    //     guess = prompt("Incorrect Guess!, Try again");
    // }
}

