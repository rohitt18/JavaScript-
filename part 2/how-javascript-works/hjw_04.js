// var ke badle ab let and const ka dekhte hai
// let and const ke case mai yeh rahenge uninitialised



console.log(firstName);
let firstName = "Rohit";
console.log(firstName);
// aysa error ayega =>
// Uncaught ReferenceError: 
// Cannot access 'firstName' before initialization
// yeh error tab aati hai jab aapke pas koi variable hai but apne initialise nahi kar rakha


console.log(firstName);
// Uncaught ReferenceError: 
// firstName is not defined
// aur yeh error tab ayegi jab apke pas koi variable hai hi nahi


// console.log(typeof firstName);

// let firstName = "harshit";