// fill method (use nahi hota itna)
// yeh jo fill hai voh original array ko change karega 
// value , start , end 

// ek Array jiska length 10 hai fill karna ho -1 se 
const myArray = new Array(10).fill(0); // constructor ka use kiya hai
console.log(myArray);

// aur jab already ek array hai usme fill karna hai toh
const myArray1 = [1,2,3,4,5,6,7,8];
myArray1.fill(0, 2,5); // 0 - jisse fill karna hai, 2,5 - starting & ending index
console.log(myArray1);