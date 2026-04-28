//let n=prompt("Enter a number");

// for(let i=1;i<=n;i++){
//     console.log("Samyam Rimal"+i);
// }


// //Print even numbers from (1 to 15)
// console.log("Even")
// for(let i=1; i<=15; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }
// console.log("Odd");
// //Print odd numbers from (1 to 15)
// for(let i=1; i<=15; i++){
//     if(i%2!=0){
//         console.log(i);
//     }
// }

//Multiplication of 5
// console.log("Multiplication of 5");

// for(let i=1; i<=10; i++){
//     let m=5*i;
//     console.log("5 x "+i+" = " +m);
// }

// //Multiplication of User Choice
// let n = prompt("Enter a number");
// console.log("Multiplication of "+n)
// for (let i=1; i<=10; i++){
//     let m=n*i;
//     console.log(n+" x "+i+" = "+m);
// }



// Nested Loop
// for(let i=1; i<=3; i++){
//     console.log("Outer Loop "+i);
//     for(let j=1; j<=3; j++){
//         console.log(j);
//     }
// }

//While Loop

// let i = 1;
// while(i<=5){
//     console.log(i);
//     i++;
// }


//Guess my Favourite Car

const fav = "BMW";
let guess = prompt("Guess my fav car:");
while (guess==fav){
    console.log("Correct!");
    break;
}
while((guess!=fav) && (guess!="quit")){
    console.log("Wrong");
    guess=prompt("Please try again:")
}