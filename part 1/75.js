// arrow functions 
// arrow functions ka behaviour thoda different hai dusre functions se
// arrow function ke andar jo 'this' hota hai voh this apne surrounding se leta hai

const user1 = {
    firstName : "rohit",
    age: 8,
    about: ()=>{
        console.log(this.firstName, this.age); // user1 iska this nahi hoga, iska this hoga ek level up matlab window
    }   
}

user1.about();
user1.about.call(user1); // arrow function ke this ko change bhi nahi kar sakte
// arrow function this hamesha apne ek level upar se lega

// agar simple function hota iss case mai toh this user1 hota
// ab arrow function hai toh ek level up chale jao
// matlab this window object hoga