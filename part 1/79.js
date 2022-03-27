// improving previous code
// must see file 80 first bec some changes in this code are done like Object.create which 
// you'll understand after going through file 80.
//

const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    },
    sing: function(){
        return 'toon na na na la la ';
    }
}
function createUser(firstName, lastName, email, age, address){
    const user = Object.create(userMethods);// khali obj {} hi banega isse bhi but sath mai [[prototype]] userMethods set ho jayega
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

const user1 = createUser('rohit', 'gupta', 'rohitgupta9769@gmail.com', 21, "my address");
const user2 = createUser('harsh', 'shah', 'harsh@gmail.com', 19, "my address");
const user3 = createUser('mohit', 'mehta', 'mohit@gmail.com', 17, "my address");
console.log(user1);
console.log(user1.about());
// console.log(user3.sing());