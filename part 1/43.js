// nested destructuring ***
// humne pehle array aur object ke andar destructure karke dekh liya tha
// ab isme dekhte hai

const users = [
    {userId: 1,firstName: 'rohit', gender: 'male'},
    {userId: 2,firstName: 'mohit', gender: 'male'},
    {userId: 3,firstName: 'nitish', gender: 'male'},
]


//const [] = users; // array ke andar se destructure karna hai isliye []
const [user1, var2, user3] = users;
console.log(user1); // this will give an entire obj from user array in output
console.log(var2); // same 
const [{firstName: user1firstName, userId}, , {gender: user3gender}] = users;
console.log(user1firstName); // to destruct from obj and : user1firstName to change the variable name from firstname
console.log(userId);
console.log(user3gender);



// ayse karneka agar same cheez chaiye toh
// const [{userId}, {userId:var1}, {gender}] = users;
// console.log(userId, var1, gender);