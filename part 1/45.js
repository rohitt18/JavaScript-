// function expression just like declaration with a slight change in syntax.
// mostly function expressions are used in development.
// function singHappyBirthday(){
//     console.log("happy birthday to you ......");
// }

const singHappyBirthday = function(){
    console.log("happy birthday to you ......");
}
singHappyBirthday();

const sumThreeNumbers = function(number1, number2, number3){
    return number1 + number2 + number3;
}
const ans = sumThreeNumbers(2,3,4);
console.log(ans);

//function declaration
// function isEven(number){
//     return number % 2 === 0;
// }
//function expression
const isEven = function(number){
    return number % 2 === 0;
}
console.log(isEven(2));

const firstChar = function(anyString){
    return anyString[0];
}
const str = firstChar("rohit");
console.log(str);

const findTarget = function(array, target){
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const answer = findTarget([1,2,3,4], 9);
console.log(answer);