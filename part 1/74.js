
const user1 = { 
    firstName : "rohit",
    age: 8,
    about: function(){
        // console.log(this);
        console.log(this.firstName, this.age);
    }   
}

// don't do this mistake 

// user1.about();
// const myFunc = user1.about; // output- undefined undefined
const myFunc = user1.about.bind(user1); // correct way (this ki value user1 se bind karenge)
myFunc();



// // because

// const myFunc = function(){
//     console.log(this.firstName, this.age);
// }   
// myFunc(); // iss case mai this ki value toh window hi hogi na isliye yaha undefined undefined ayega

