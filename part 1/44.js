// Functions

// function declaration
function singHappyBirthday(){
    console.log("happy birthday to you ......");
}
// function call
singHappyBirthday();

// basic re-usable function where number1,number2,..etc are function parameters.
function sumThreeNumbers(number1, number2, number3){
    return number1 + number2 + number3;
}
const ans = sumThreeNumbers(1,2,3); // here 1,2,3 are called arguments not parameters
console.log(ans);
// or directly console.log(sumThreeNumbers(1,2,3));

// isEven
// input : 1 number
// output : true, false 
function isEven(number){
    if(number % 2 === 0){
        return true;
    }   
    return false;
}
console.log(isEven(5));

// OR (short code always better)

function isEven(number){
    return number % 2 === 0;
}
console.log(isEven(4));

// function which returns the firstChar of any string
// input : string
// output : firstCharacter
function firstChar(anyString){
    return anyString[0]; 
}
console.log(firstChar("rohit"));
console.log(firstChar("zbc"));

// function 
// input : array, target(means koi bhi ek number)
// output : index of target if target present in array.
// input: [1,5,9,27,6] ,   9
//           array        target
//output: target(which is 9) found at 2nd index 
// and if not found in array then print -1

function findTarget(array, target){
    for(let i = 0; i < array.length; i++){
        if(array[i] = target){
            return i;
        } 
    } 
    return -1;
}
const myArray = [1,5,9,27,6];
console.log(findTarget(myArray, 9));
//or directly console.log(findTarget([1,5,9,27,6], 9));


// function declaration
function singHappyBirthday(){
    console.log("happpy birthday");
}
// function expression
const singHappyBirthday = function(){
    console.log("happy birthday");
}
// arrow function
const singHappyBirthday = () => {
    console.log("happy birthday");
}