// for of loop in array
const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];

for(let fruit of fruits){
    fruits2.push(fruit.toUpperCase());
}
console.log(fruits2);

// normal for loop
// for(let i = 0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }

// these 2 are most commonly used in development when we have to iterate an array.