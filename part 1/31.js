// use const for creating array


// const pi = 3.14;
// pi = 12; //we get a typeError when we assign a constant variable again
// console.log(pi);

const fruits = ["apple", "mango"];
fruits.push("banana"); //we can use const in arrays and perform push without any Error!
console.log(fruits);

// heap memory ["apple", "mango"] 0x11

// const fruits = ["apple", "mango"]; // 0x11(address)
// fruits = ["grapes", "watermelon"]; // definately error milega const mai aysa karenge toh. let mai aysa kar sakte hai!
// fruits.push("banana"); // by pushing any element the address does not change therefore we do not get any error using const in arrays
// console.log(fruits);


// YOU MUST ALWAYS USE 'const' TO ASSIGN AN ARRAY! (most-developers use)
// Koi bhi reference type ko 'const' se assign karneka.