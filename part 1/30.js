// for loop in array 

let fruits = ["apple", "mango", "grapes", "banana"];
        //       0        1         2         3

// for(let i=0; i<=9;i++){
//     console.log(i);
// }

console.log(fruits.length); // output 4
//to print elements of array
console.log(fruits[fruits.length-1]);

//print a new array just like fruits[] using for loop in UPPERCASE
let fruits2 = [];
for(let i=0; i < fruits.length; i++){
    fruits2.push(fruits[i].toUpperCase());
}

console.log(fruits2);

// WE CAN ALSO USE 'const' FOR CREATING ARRAYS.