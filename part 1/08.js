// typeof operator 
// number to string (IMPORTANT) age = age + "";
// string to number (IMPORTANT) str = +str;

// data types (primitive data types)
// string "rohit"
// number 2, 4, 5.6 
// booleans 
// undefined
// null 
// BigInt
// Symbol

let age = 22; 
let firstName = "rohit";

console.log(typeof age); // number
console.log(typeof firstName); // string

// IMPORTANT
// 22 -> "22"
// convert number to string. 
age = age + "";
console.log(typeof age); // string "22"


// convert string to number.
let myStr = "23";
myStr = +myStr;
console.log(typeof myStr);

// another method to convert number to string
age = 18;
age = String(age);
console.log(typeof age);

// another method to convert string to number
age = "18";
age = Number(age);
console.log(typeof age);