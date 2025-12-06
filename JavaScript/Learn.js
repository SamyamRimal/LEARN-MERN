console.log("Samyam Rimal");
document.write("Samyam");

let a = 10;
let b = 25;
console.log("Sum of " +a+ " and " +b+ " is:"+(a+b)); //This is like java way
console.log(`Sum of ${a} and ${b} is: ${a+b}`); // This is JavaScript way

//Arthematic Operators
console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a*b);
console.log(a**b);

//Uinary Operators
console.log(++a); // first Increases
console.log(a++); // first prints value then increases

//Assignment Operators
a+=5; // This means a=a+5; in shoet form. We can use (+,*,-,/,%).

// Comparison Operator 
a<b;
a>b;
a<=b;
a>=b;
a==b; // It only compairs value
a!=b;
a===b; // It compairs both value and type

//Conditional Statements
//if-else
    if(b>=18){
        console.log("You can Vote");
    }
    else{
    console.log("You cant vote");
    }

// Practise Question (Traffice Light)

let color = "green";
if(color=="red"){
    console.log("Stop");
}
if(color=="yellow"){
    console.log("Be Ready");
}
if(color=="green"){
    console.log("Go");
}


// Practice Question
//Price of popcorn according to its size

let size="S";
if(size=="XL"){
    console.log("Price is Rs.250")
}
else if(size=="L"){
    console.log("Price is Rs.200")
}
else if(size=="M"){
    console.log("Price is Rs.100")
}
else if(size=="S"){
    console.log("Price is Rs.50")
}
else{
    console.log("Choose the Size.")
}

//Nested If-else
let marks = 89;
if(marks>=33){
    console.log("Pass!");
    if(marks>=80){
        console.log("Grade: A+");
    }
    else if (marks>=60){
        console.log("Grade: A");
    }
    else{
        console.log("Grade: B+");
    }
}
else{
    console.log("Better Luck Next Time!")
}



