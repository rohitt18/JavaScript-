// objects reference type  
// arrays are good but not sufficient 
// for real world data 
// objects store key value pairs 
// objects don't have index

// how to create objects 

// const person = {name:"rohit",age:22};
const person = {
    name: "rohit",
    age: 22,
    hobbies: ["guitar", "sleeping", "listening music"]
}
console.log(person);

// how to access data from objects** 
console.log(person["name"]); // or console.log(person.name);
// console.log(person["age"]);
// console.log(person.hobbies);

// how to add key value pair to objects
person["gender"] = "male"; //or person.gender = "male"; // ***
console.log(person);