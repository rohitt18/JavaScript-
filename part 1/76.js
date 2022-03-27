// short syntax for functions inside objects

// const user1 = {
//     firstName : "rohit",
//     age: 8,
//     about: function(){
//         console.log(this.firstName, this.age);
//     }   
// }


// upar wale cheez ko short mai ayse likhte hai =>
const user1 = {
    firstName : "rohit",
    age: 8,
    about(){
        console.log(this.firstName, this.age);
    }   
}

// both of them are equivalent 

user1.about();