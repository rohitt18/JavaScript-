// Map object (confuse mat hona map method alag tha)
// yeh map object hai 
// yeh key:value pair store karta hai object ki tarah
// map is an iterable
// store data in ordered fashion
// store key value pair (like object)
// duplicate keys are not allowed like objects
// the mai difference between objects & maps is you can use anything as key 


// difference between maps and objects
// objects can only have string or symbol
// as key 
// in maps you can use anything as key ***
// like array, number, string 

// object literal 
// key -> string 
// key -> symbol
// const person = {
//     firstName : "rohit",
//     age: 7,
//     1:"one" // but yaha key number dikh raha hai but typeof karke check karenge toh yeh bhi string mai hi hota hai
// }
// console.log(person.firstName);
// console.log(person["firstName"]);
// console.log(person[1]);
// for(let key in person){
//     console.log(typeof key);
// }

// map => key value pair store karega 
const person = new Map();
person.set('firstName', 'Rohit');
person.set('age', 7);
person.set(1,'one');
person.set([1,2,3],'onetwothree');
person.set({1: 'one'},'onetwothree');
console.log(person);
// console.log(person.firstName); // yeh property nahi use kar sakte undefined aa jata hai
// console.log(person["firstName"]); // maps mai ayse nahi access kar sakte
console.log(person.get("firstName")); // ayse karte hai using get method
console.log(person.get(1)); 
console.log(person.keys()); // for printing all the keys (map-iterator)
for(let key of person.keys()){
    console.log(key, typeof key); // idhar 1 ka typeof number ayega
}

for(let key of person){
    console.log(key); // yeh array dega isliye array destructuring use karke key value print kr sakte hai
}

// yeh method tab use karo jab direct for of loop lagana ho maps pe varna key of person.keys() wala method bhi chalta
for(let [key, value] of person){ //de-structure kiya hai array se agar nahi samjha toh upar wala forof loop dekho
    // console.log(Array.isArray(key));
    console.log(key, value)
}

// //OR ayse bhi kar sakte hai
// const person = new Map([['firstName', 'Rohit'], ['age', '7']]);
// console.log(person);



// Realistic Example
const person1 = {
    id: 1,
    firstName: "rohit"
}
const person2 = {
    id: 2,
    firstName: "rohii"
}

const extraInfo = new Map();;
extraInfo.set(person1, {age: 8, gender: 'male'}); // key person1 set kar diya aur value ek object set kardi obj => obj
// console.log(extraInfo);
console.log(person1.id); // id toh mil gayi but mujhe age & gender chaiye toh kaise karenge
console.log(extraInfo.get(person1).gender);
extraInfo.set(person2, {age: 7, gender: 'female'});
console.log(person2.id);
console.log(extraInfo.get(person2).gender);


// const extraInfo = new Map();
// extraInfo.set(person1, {age: 8, gender: "male"});
// extraInfo.set(person2, {age: 9, gender: "female"});
// // console.log(userInfo);
// console.log(person1.id);
// console.log(extraInfo.get(person1).gender);
// console.log(extraInfo.get(person2).gender);