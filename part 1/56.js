// important array methods***
// forEach method(optional) // for of se bhi kaam chal jata hai
// map(very imp)
// filter(also useful)
// reduce(imp)
// sort(useful)


//forEach

// const numbers = [4,2,5,8];

// function multiplyBy2(number, index){
//     console.log("index is", index);
//     console.log(`${number}*2 = ${number*2}`);
// }
// for(let i = 0; i<numbers.length; i++){
//     multiplyBy2(numbers[i], i);
// }   

// issi ko forEach loop se kare toh - 
// numbers.forEach(multiplyBy2); // dekho kitna simple bana deta hai forEach

// OR


const numbers = [4,2,5,8];

// function myFunc(number, index){
//     console.log(`index is ${index} number is ${number}`);
// }
// for(let i = 0; i<numbers.length; i++){
//     myFunc(numbers[i], i);
// }   

// numbers.forEach(myFunc);

// OR directly forEach ke andar hi anonymous function define krke apna kam kar sakte hai
// aysa syntax hota hai
//  numbers.forEach(function(){

//  });

// ==>

numbers.forEach(function(number,index){
    console.log(`index is ${index} number is ${number}`);
});

// using forEach print each number multiplying by 2
numbers.forEach(function(number){
    console.log(number*2);
});

//using forEach print each number multiplying by 3
numbers.forEach(function(number, index){
    console.log(number*3, index);
})

// Now Let's see a realistic example of forEach loop 
const users = [
    {firstName: "rohit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
]


// using forEach apko har user ka firstName print karna hai
users.forEach(function(user){ 
    console.log(user.firstName);
});

// yahi same cheez forEach mai arrow function laga ke bhi kar sakte
// most IMP
users.forEach((user, index)=>{
    console.log(user.firstName, index);
})

// for of() loop se bhi kar sakte hai
for(let user of users){
    console.log(user.firstName);
}



