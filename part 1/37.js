// difference between dot and bracket notaion


const key = "email";
const person = {
    name: "rohit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]
}

console.log(person["person hobbies"]); // if there is a space in key then bracket notation compulsory
// if you want the key in object from another variable then write it without inverted commas
person[key] = "rohitgupta9769@gmail.com"; // ***
console.log(person);