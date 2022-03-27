// array push pop 

// array shift unshift 

// push and pop are fast as compared to shift and unshift.

let fruits = ["apple", "mango", "grapes"];
console.log(fruits);

// push 
fruits.push("banana"); // push method doesn't return therefore we do not store it in a variable
console.log(fruits);

// pop 
// console.log(fruits.pop());
// console.log(fruits);
// above method WRONG
let poppedFruit = fruits.pop(); // pop methods always returns something therefore we store it into a variable.
console.log(fruits);
console.log("popped fruit is", poppedFruit);

// unshift //starting mai element add kar dega.
fruits.unshift("watermelon"); // unshift method does not return value
fruits.unshift("orange");
console.log(fruits); // orange & watermelon add kar dega 

// shift //starting se element ko remove karega.
// fruits.shift();
// console.log(fruits);
// above method WRONG
let removedFruit = fruits.shift(); // shift method always return value.
console.log(fruits); // orange nikal dega
console.log("removed fruits is ", removedFruit);