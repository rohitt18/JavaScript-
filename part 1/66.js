// iterables 
// jispe hum for of loop laga sakein
// string , array are iterable but objects are not iterable.

//string
const firstName = "Rohit";
for(let char of firstName){
    console.log(char);
}
//array
const items = ['item1', 'item2', 'item3'];
for(let item of items){
    console.log(item);
}

// Objects are not iterable 
// objects pe hum direct for of loop nahi laga sakte
// for in loop laga sakte hai

// * array like object *
// jinke pas length property hoti hai 
// aur jinko hum index se access kar sakte hai
// example :- string 

const lastName = "rohit";
console.log(lastName.length);
console.log(lastName[2]);