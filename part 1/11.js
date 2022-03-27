// undefined 
// typeof null is object in JS

let firstName;
console.log(typeof undefined);
console.log(typeof firstName);
firstName = "Rohit";
console.log(typeof firstName, firstName);

// null

let myVariable = null;
console.log(myVariable); 
myVariable = "rohit";
console.log(myVariable, typeof myVariable);
console.log(typeof null); // object //which is actually a bug/error 

// BigInt
let myNumber = BigInt(12);
let sameMyNumber = 123n; // or BigInt(123)
console.log(myNumber);
console.log(sameMyNumber);
console.log(Number.MAX_SAFE_INTEGER);
console.log(myNumber+ sameMyNumber);