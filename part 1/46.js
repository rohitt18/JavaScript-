// arrow functions

//function expression
// const singHappyBirthday = function(){
//     console.log("happy birthday to you ......");
// }

//arrow function
const singHappyBirthday = () => {
    console.log("happy birthday to you ......");
}
singHappyBirthday();

const sumThreeNumbers = (number1, number2, number3) => {
    return number1 + number2 + number3;
}
const ans = sumThreeNumbers(2,3,4);
console.log(ans);

//function expression
// const isEven = function(number){
//     return number % 2 === 0;
// }

//arrow function
const isEven = (number) => { 
    return number % 2 === 0;
}
//or directly 
// const isEven = number => number % 2 === 0; // agar ek hi parameter ho toh () mat likho
console.log(isEven(4));

const firstChar = (anyString) => {
    return anyString[0];
}
//or directly
// const firstChar = anyString => anyString[0];
console.log(firstChar("rohit"));


const findTarget = (array, target) => {
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const myArray = [1,5,9,27,6];
console.log(findTarget(myArray, 9));
//or directly console.log(findTarget(myArray, 9));