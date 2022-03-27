// window object 

// console.log(this); // window object milega


// console.log(window);
"use strict"; // strict mode nahi use karenge toh window object ayega and use karenge toh undefined ayega
function myFunc(){
    console.log(this);
}
myFunc();