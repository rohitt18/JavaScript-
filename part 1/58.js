// filter method (IMP)
// jo filter ka callback function hoga voh hamesha return karna chaiye boolean values(true or false)

const numbers = [1,3,2,6,4,8];

// mujhe na sare even number filter karne hai toh kaise kare?
// use filter method =>
// direct callback function as an input pass kiya hai filter mai
const evenNumbers = numbers.filter((number) => { 
    return number % 2 === 0;
});
console.log(evenNumbers);

// // AGAR YEH NAHI SAMJHA TOH YEH DEKHO
// // briefly explained

// const numbers = [1,3,2,6,4,8];

// const isEven = function(number){
//     return number%2 === 0;
// }
// const evenNumbers = numbers.filter(isEven);
// console.log(evenNumbers);