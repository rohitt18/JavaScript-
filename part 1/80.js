// Object.create 

const obj1 = {
    key1: "value1",
    key2: "value2"
}

// const obj2 = {
//     key3: "value3"
// }
// but write it as shown below (dono same hai bas dusre wale mai empty obj banake add kiya key:value)
// const obj2 = {};     // there is another way to create empty objects(niche pata chalega)
// obj2.key3 = "value3";

// console.log(obj2.key1); // undefined ayega yeh toh pata hai but

// mai chahta hu ki agar javascript ko obj2 mai key1 na mile toh voh khud jaye obj1 ke pas 
// aur agar vaha pe hai toh print karde usko 
// toh hum kaise karenge iss kaam ko?

// there is another way to create empty objects
const obj2 = Object.create(obj1) // output - {}
obj2.key3 = "value3";
obj2.key2 = "unique";
console.log(obj2.key1); // this is happening
// ab mera kaam ho gaya jaisa mai chahta tha vaisa hi
console.log(obj2); // output mai prototype object bhi dikhega


// ----x------x-------x----------x---------x----------x---------x---------
// __proto__

// offical ecmascript documentation 

// [[prototype]]

// __proto__ or [[prototype]] (one & the same)



// prototype    (yeh kuch alag hi hai __proto__/[[prototype]] se)

// const obj2 = Object.create(obj1); // {}
// // there is one more way to create empty object
// obj2.key3 = "value3";
// // obj2.key2 = "unique";
// console.log(obj2);

// console.log(obj2.__proto__);
