q// param(parameter) destructuring 

// object 
// react mai bohot use karte hai

const person = {
    firstName: "rohit",
    gender: "male",
    age: 21
}

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }
// OR parameter destructuring
function printDetails({firstName, gender, age}){ 
    console.log(firstName);
    console.log(gender);
    console.log(age);
}

printDetails(person);