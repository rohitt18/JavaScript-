// prototype

function hello(){
    console.log("hello world");
}

// In Javascript function is a combination of function & object

console.log(hello.name); // name property function ka naam batata hai

// you can add your own properties to a function.
// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);

// name property ---> tells function name;

// function provides more usefull properties 


// console.log(hello.prototype); // {}

// only functions provide prototype property

hello.prototype.abc = "abc"; // property add kiya .abc lagake jisme "abc" likha hoga
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){ //function bhi add kar sakte hai
    return "lalalla";
};
console.log(hello.prototype.sing());