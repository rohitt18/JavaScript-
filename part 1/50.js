// block scope vs function scope 

// let and const are block scope
// var is function scope 


// // just for better understanding we don't use such blocks 
// {
//     let firstName = "rohit";
// }
// console.log(firstName); // error - bec let and const ko ussi block ke andar access kar sakte hai
// {
//     var firstName = "rohit";
// }
// console.log(firstName);




if(true){
    var firstName = "rohit";
    console.log(firstName);
}
console.log(firstName); // can access outside the if block too bec of var


function myApp(){
    if(true){
        var firstName = "rohit";
        console.log(firstName);
    }

    if(true){
        console.log(firstName);
    }
    console.log(firstName);
}

myApp();