// hoisting 
// function ko declare karne se pehle hi call kar do
//function declaration mai kar sakte hai but expression & arrow mai nahi
// iss behaviour ko bolte hai hoisting.

hello();

// // function declaration
function hello(){
    console.log("hello world");
}

//function expression
// const hello = function(){
//     console.log("hello world");
// }
// you will get an error - Cannot access 'hello' before initialization
 
//arrow function
// const hello = () => {
//     console.log("hello world");
// }
// you will get an error - Cannot access 'hello' before initialization



// console.log(hello);
// var hello = "hello world";
// // output - undefined

// console.log(hello);
// let hello = "hello world";
// // output - error(cannot access hello before initialization)

// console.log(hello);
// const hello = "hello world";
// // output - error