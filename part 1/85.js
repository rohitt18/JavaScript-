// more about prototype

let numbers = [1,2,3]; // actually piche ayse run hota hai => let numbers = new Array(1,2,3);

// // console.log(Object.getPrototypeOf(numbers));
console.log(Array.prototype);
console.log(numbers);

function hello(){
    console.log("hello");
}
// prototype
console.log(hello.prototype);