// how to iterate object 
// Object.keys() method (keys ka array return karega jispe for of loop laga ka iterate kar sakte hai)

 
const person = {
    name: "rohit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]
}

// for in loop 
// Object.keys 


// for(let key in person){
//     console.log(key, person[key]);
// }

// best way
for(let key in person){
    // console.log(`${key} : ${person[key]}`);
    console.log(key," : " ,person[key]);
}

// Object.keys() method (ek array dega jisme keys honge objects ke)
console.log(typeof (Object.keys(person)));
const val = Array.isArray((Object.keys(person)));
console.log(val);


// toh ab array mil gaya toh for of loop laga sakta hun
for(let key of Object.keys(person)){
    console.log(person[key]);
}