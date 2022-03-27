// how to create functions to create multiple objects

// const user = {
//     firstName: "rohit",
//     lastName: "gupta",
//     email: "rohitgupta9769@gmail.com",
//     age: 21,
//     address: "House Number, Colony, pincode, state",
//     about: function(){
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18: function(){
//         return this.age >= 18;
//     }
// }
// const aboutUser = user.about(); // function agar kuch return karra hoga toh usko pehle kisi variable mai store karte hai fir console.log karte hai
// console.log(aboutUser);


// Agar ayse hi mujhe lakho users chaiye toh
// banate toh nahi bethenge na kitna tidious kam ho jayega
// isliye humein kuch better approach dhundni padegi
//isliye hum ek function banayenge jo as an input lega firstName,lastName,email,age,address
// create function - 1.) jo object create karega 
// 2.) add key value pair 
// 3.) aur fir voh object ko return krega 

function createUser(firstName, lastName, email, age, address){
    const user = {} // bec yeh function pehle ek obj create karega jo initially empty obj hoga
    // step2 : add key value pair
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old`;
    }
    user.is18 = function(){
        return this.age >= 18;
    }
    return user;
}
const user1 = createUser("rohit", "gupta", "rohitgupta9769@gmail.com",21, "House Number, Colony, pincode, state");
console.log(user1);
const is18 = user1.is18();
console.log(is18);
const about = user1.about();
console.log(about);

// But isme bohot kamiya hai