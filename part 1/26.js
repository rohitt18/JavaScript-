// intro to arrays 
// reference type 
// how to create arrays

// Array:-ordered collection of items 

// let fruits = ["apple", "mango", "grapes"];
let numbers = [1,2,3,4];
let mixed = [1,2,2.3, "string", null, undefined];
console.log(mixed);
console.log(numbers);
// console.log(fruits[2]);
let fruits = ["apple", "mango", "grapes"];
// let obj = {}; // object literal
console.log(fruits);
fruits[1] = "banana";
console.log(fruits);
console.log(typeof fruits); // output is object
// console.log(typeof obj); // output is object
console.log(Array.isArray(fruits)); // to check if its 100% array or not
// console.log(Array.isArray(obj)); // dekha yeh array nahi hai bhale hi iska typeof object tha 


// array indexing 