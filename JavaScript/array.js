let name = ["Sam", "Yam", "Rimal"];

console.log(name[0]);

console.log(name.push("Alisha")); // Add from end

console.log(name.pop());  // Remove from end
 
console.log(name.unshift("Alisha"));  // Add from start (Use shift to remove from start)


let months = ["January", "July", "March", "August"];

// months.shift(0);
// months.shift(0);

// months.unshift("July","June");

months.splice(0,2,"July","June");

console.log(months.concat(name));

console.log(name.reverse());

console.log(name.sort());


let lang = ["c", "c++", "html", "JavaScript", "Python", "Java", "c#", "sql"];

console.log(lang.reverse().indexOf("JavaScript"));


//Array Reference

let arr = ['a', 'b'];
let arrCopy = arr;

arrCopy.push('c'); // Changes in arrCopy will also change arr


//Nested Arrays
let nums = [ [1,2], [3,4], [5,6] ];

// Create a nested array to show the following tic-toacpt0e game state.

let game = [ ['X',null,'O'], [null, 'X', null], ['O', null, 'X']];