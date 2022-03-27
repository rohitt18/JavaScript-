// map method (VERY IMP)
// ek array dega return karke
// You MUST always return when map function is used.(and not console.log)

const numbers = [3,4,6,1,8];



{
function square(number){
    return number * number;
}

// map method mai hamesha ek dusre variable mai store karke hi console.log karna padta hai
// yeh forEach ke jaisa nahi hai ki direct numbers.forEach() and as an input callback function pass kar de
// isme itna karne ke baad ek dusre variable mai store bhi karna padta hai bec map ek dusra array banata hai
// numbers.map(square);

const squareNumbers = numbers.map(square); 
console.log(squareNumbers);
}


//OR

// agar return ke badle console.log kiya toh numbers ke square print toh ho jayenge but dusra array mai store nai honge
// undefined ayega agar kuch return nay karega toh

// function square(number){
//     console.log(number*number); // agar kuch return na kare toh bydefault return hota hai undefined.
// }
// const squareNumbers = numbers.map(square);
// console.log(squareNumbers);
// output mai undefined ka array ban jayega bec agar kuch return nahi karte toh bydefault undefined return hota hai



// OR shortest way using arrow function and direct as an input callback function pass kar deneka

{
const squareNumbers = numbers.map((number) => {
    return number * number;
}); 
console.log(squareNumbers);
}


// Now Let's see a realistic example of this map method.

const users = [
    {firstName: "rohit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},  
]

// aapko iss users ke firstName chaiye => ek array banake in users ke firstNames store karne hai

const userNames = users.map((user) => {
    return user.firstName; // cannot use console.log in map
});
console.log(userNames);







// same cheez likhi hui hai bas short mai isliye upar wala refer kare


// // const numbers = [3,4,6,1,8];

// // const square = function(number){
// //     return number*number;
// // }

// // const squareNumber = numbers.map((number, index)=>{
// //     return index;
// // });
// // console.log(squareNumber);

// const users = [
//     {firstName: "harshit", age: 23},
//     {firstName: "mohit", age: 21},
//     {firstName: "nitish", age: 22},
//     {firstName: "garima", age: 20},
// ]

// const userNames = users.map((user)=>{
//     return user.firstName;
// });

// console.log(userNames);