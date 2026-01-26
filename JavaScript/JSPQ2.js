// JS Practise Question (Part 3)

// Q1. Write a JS program to get the firs n elements of an array. [n can be any positive number].

let arr = [7, 9, 0, -2];
let n = 3;

let ans = arr.slice(0,n);
console.log(ans);

// Q2. Write a JS program to get the last n elements of an array. [n can be any positive number].
let arr1 = [7, 9, 0, -2];
let n1 = 3;

let ans1 = arr1.slice(-n1);
console.log(ans1);

// Q3. Write a JS origtan ti check whether a string is blank or no.

// let str = prompt("Enter Your Name");

if(str == 0){
    alert("Empty");
}
else{

    alert("Hi" +str);
}

// Q4. Write a JS program to tes whether the chatacter at the given index is lower case.

let str = "Samyam";
let idx = 0;

if(str[idx] == str[idx].toLowerCase()){
    console.log("Lower Case");
}
else{
    console.log("Upper Case");
}