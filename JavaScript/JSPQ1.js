// 1. Print "Good" if the number is divisible by 10 and prin "Bad" if not.

let num = 15;
if(num%10 == 0){
    console.log("Good");
}
else{
    console.log("Bad");
}

// 2. Take the nuser name and age as input using prompts and display it using alert.
// let name = prompt("Enter Your Name:");
// let age = prompt("Enter Your Age:");

// alert(name+" is "+age+" years old");


// 3. Write a switch statement to print the months in a quarter.

let months = prompt("Enter Quarter Number(1-4):");

switch(months){
    case "1":{
        console.log("January, February, March");
        break;
    }
    case "2":{
        console.log("April, May, June");
        break;
    }
    case "2":{
        console.log("July, August, September");
        break;
    }
    case "4":{
        console.log("October, November, December");
        break;
    }
    default:{
        console.log("Enter a valid number.");
    }
}


// 4. Golden String
let ali="alisha";

if(ali[0]==='a' && ali.length>3){
    console.log("Its a Golden String.");
}
else{
    console.log("Its not a Golden string");
}

// 5. Write a program to find the larges tof 3 numbers.
let num1 =10;
let num2 = 9;
let num3 = 7;

if(num1>num2){
    if(num1>num3){
        console.log(num1+" is greater.");
    }
    else{
        console.log(num3+" is greater.")
    }
}
else if(num2>num1){
    if(num2>num3){
        console.log(num2+" is greater.");
    }
    else{
        console.log(num3+" is greater.")
    }
}

// 6. Write a program to check if 2 numbers have the same last digit.
let n1 = 3464;
let n2 = 5454;

let lastDigit1 = n1 % 10;
let lastDigit2 = n2 % 10;

if(lastDigit1 == lastDigit2){
    console.log("Both numbers have same last digit");
}
else{
    console.log("Both numbers does no thave same last digit");
}