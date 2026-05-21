// Create a function that prints a poem

function poem(){
    console.log("In the shadow of the mountains, ancient and grand,The morning mist settles on Tarakeshwar land.A gentle breeze whispers through the pine trees,And prayer flags dance in the crisp, highland breeze.");
}

poem();

// Creat a function to roll a dice and always display the value of the dice (1 to 6).

function dice(){
    let num = Math.floor(Math.random()*6+1);
    console.log(num);
}


// Create a function that gives us the average of 3 numbers.

function average(a,b,c){
    let ans = (a+b+c)/3;
    console.log("The average of "+a+" , "+b+" and "+c+" is: "+ans);
}
average(5,10,30);


// Create a function that prints the multipliction table of a number.
function multiply(){
    let number = prompt("Enter the Number for Multiplication Table:");
    for(let i=1; i<=10; i++){
        let result = number*i;
        console.log(number+" x "+i+" = "+result);
    }
}