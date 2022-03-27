// objects ke method. 
// this keyword.
// function inside object are called methods



const person = {
    firstName : "rohit",
    age : 21,
    about : function(){
        console.log(`person name is ${this.firstName} and age is ${this.age}`);
        // console.log(this);
    }
}
// console.log(person.firstName); // yeh apko already pata hai
// but yaha pe mujhe ek function banana hai iske andar jiska key mai kuch bhi set kar sakta hu
person.about(); // yaha pe bohot badi problem hai bec agar mene firstName change bhi kar diya fir bhi rohit hi print ho raha hai
// isliye this.firstName and this.age likhenge template string ke andar
// this.firstName ke badle sirf firstName nahi likh sakte error ayega

// ***iss function mai this voh object hai jo object iss function ko call karra hai*** 
// matlab iss method ke andar jo this hai voh yeh person hai
// agar nahi samjha toh yeh print karke dekho
// console.log(this); upar wale function mai



// REALISTIC EXAMPLE
function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName : "harsh",
    age: 8,
    about: personInfo
}
const person2 = {
    firstName : "mohit",
    age: 18,
    about: personInfo
}
const person3 = {
    firstName : "nitish",
    age: 17,
    about: personInfo
}

person1.about();
person2.about();
person3.about();
