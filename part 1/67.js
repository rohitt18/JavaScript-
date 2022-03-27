// ek naya iterable (Set)
// Sets (it is iterable) //syntax- const numbers = new Set();
// thoda thoda array ki tarah hai but differences hai
// set ko tab use karna chaiye jab apke pas unique values hai aur apko pata hai ek value ek bar se zyada nahi aa sakti
// store data  
// sets also have its own methods
// * No index-based access *
// * Order is not guaranteed *
// * unique items only (no duplicates allowed) *

const items = ['item1', 'item2', 'item3'];

const num = new Set([1,2,3]);
console.log(num);

const numbers = new Set(); // paranthesis mai aap koi bhi iterable likh sakte hai
numbers.add(1);
numbers.add(2);
numbers.add(items)
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6);
console.log(numbers);
// numbers.add(items);

// Set mai agar aapko check karna hai koi element hai ya nahi hai
// uske liye ek method hai .has()
// if(numbers.has(1)){
//     console.log("1 is present")
// }else{
//     console.log("1 is not present")
// }
for(let number of numbers){
    console.log(number);
}
const myArray = [1,2,4,4,5,6,5,6];
const uniqueElements = new Set(myArray);
console.log(uniqueElements); // repeated numbers print nahi honge ab
// uniqueElements pe .length property nahi laga sakte isliye
// agar yeh set ka length nikalna hoga toh => for of() lagake karsakte hai
let length = 0;
for(let element of uniqueElements){
    length++;
}
console.log(length);
// console.log(uniqueElements);
// console.log(myArray);