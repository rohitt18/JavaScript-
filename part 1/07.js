// trim() 
// toUpperCase()
// toLowerCase()
// slice()

let firstName = "   rohit   "; //length = 11 (with spaces)
console.log(firstName);

console.log(firstName.length);
firstName = firstName.trim(); // "rohit" //can also store it in a new variable 
console.log(firstName)
console.log(firstName.length);

 
firstName = firstName.toUpperCase();
// firstName = firstName.toLowerCase();
console.log(firstName);

// start index 
// end index
let newString = firstName.slice(0,4); // rohi
console.log(newString);