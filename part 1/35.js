// array destructuring **
const myArray = ["value1", "value2", "value3","value4"];
// to store the element of the array into variables
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);

// better way to store elements of array into variables using array destructuring.
let [myvar1, myvar2, ...myNewArray] = myArray;
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);
console.log(myNewArray);