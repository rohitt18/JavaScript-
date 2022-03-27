// how to clone array 

// how to concatenate two arrays

let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"]; // if array of 100 elements then not feasible therefore never used.

// 1st way to CLONE array
// let array2 = array1.slice(0); //1st way to clone an array
let array2 = array1.slice(0).concat(["item3","item4"]);

// 2nd way to clone array
// let array2 = [].concat(array1); //2nd way to clone an array
// let array2 = [].concat(array1,["item3","item4"]); 

// 3rd way (new and eligent) best way to CLONE ARRAY
// spread operator
// let array2 = [...array1]; //best way
// console.log(array2);
// let oneMoreArray = ["item3", "item4"]
// //let array2 = [...array1, ...oneMoreArray]; // destructuring(spread operator)

array1.push("item3", "item4");

console.log(array1 === array2);
console.log(array1)
console.log(array2)

// slice method is fastest but most used one is spread i.e,[...array1]