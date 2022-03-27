// new keyword 
// 1.) this = {}
// 2.) return {} 
//

// __proto__ 
// // official ecmascript document
// [[prototype]]



// function createUser(firstName, age){
//     this.firstName = firstName;
//     this.age = age; 
// }
// createUser.prototype.about = function(){
//     console.log(this.firstName, this.age);
// }
// const user1 = new createUser("rohit", 21);
// console.log(user1);
// user1.about();
// new keyword yaha par 3 kam karraha hai
// 1. empty object create karraha hai this = {}
// 2. return this ( {} ko vapas de deta hai values add karke )
// 3. jo hum pehle manually proto ki value iske prototype ke equal set kar 
//    rahe the ayse => const user = Object.create(createUser.prototype)
//    new keyword yeh pura kaam khudse kar deta hai isliye use new keyword  
//    i mean new keyword khud hi relation bana deta hai proto & prototype mai



// Ab file no. 82 ko improvise karte hai

// constructor function (object construct karraha hai humare liye)
// constructor function mai naam capital se chalu hota hai
function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
    // new keyword khudse return karta hai isliye return this; likhne ki zaroorat nhi hai
}
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function (){
    return this.age >= 18; 
}
CreateUser.prototype.sing = function (){
    return "la la la la ";
}

// new keyword use karrahe hai isliye function ka naam capital se chalu hora
const user1 = new CreateUser('rohit', 'gupta', 'rohitgupta9769@gmail.com', 21, "my address");
const user2 = new CreateUser('harsh', 'shah', 'harsh@gmail.com', 19, "my address");
const user3 = new CreateUser('mohit', 'mehta', 'mohit@gmail.com', 17, "my address");
console.log(user1);
console.log(user1.about());