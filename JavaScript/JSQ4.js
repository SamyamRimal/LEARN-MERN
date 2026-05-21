// Q.1) Write a JS program to delete all occurrences of element ‘num’ in a given array.Example:if arr=[1,2,3,4,5,6,2,3]&num=2 Result should be arr=[1,3,4,5,6,3]

let arr=[1,2,3,4,5,6,2,3];
let num = 2;
// Iterate backwards to avoid skipping elements when splicing
for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === num) {
        arr.splice(i, 1);
    }
}
console.log(arr); // Output: [1, 3, 4, 5, 6, 3]


//Q.2) Write a JS program to find the no. of digits in a number. Example if num=253687 Result should be 6 

let numbe = 9741871741;
let res = numbe.toString();
let result = res.length;
console.log(result);


//Q.3) Write a JS program to find the sum of digits in a number.

let number = 9741891841;
let sum = 0;
let str = number.toString(); //Changing the number to String to get it individually
for (let i = 0; i < str.length; i++) {
    sum += parseInt(str[i]); //Changing the String back to Integer
}
console.log(sum); 


//Q.4) Print the factorial of number n.

let n = 7;
let fact =1;
for(let i=n; i>=1; i--){
    fact = fact * i; 
}
console.log(fact);


//Q.5) Find the largest number in an array with only positive numbers.

let arra = [3,5,2,15,6,1,9,10,14];
let currLar = arra[0];
for (let i=1; i<arra.length; i++){
    if(currLar<arra[i]){
        currLar = arra[i];
    }
}
console.log(currLar);

