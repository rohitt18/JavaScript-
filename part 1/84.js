function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
    // new keyword khudse return karta hai isliye return this; likhne ki zaroorat nhi hai
}
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function (){
    return this.age >= 18; 
}
CreateUser.prototype.sing = function (){
    return "la la la la ";
}

// new keyword use karrahe hai isliye function ka naam capital se chalu hora
const user1 = new CreateUser('rohit', 'gupta', 'rohitgupta9769@gmail.com', 21, "my address");
const user2 = new CreateUser('harsh', 'shah', 'harsh@gmail.com', 19, "my address");
const user3 = new CreateUser('mohit', 'mehta', 'mohit@gmail.com', 17, "my address");


for(let key in user1){
    // console.log(key);
    if(user1.hasOwnProperty(key)){ // agar aap prototype wali key read nahi karna chahte toh ayse hoga
        // jaise firstName iski khudki property hai toh true dega & about,is18 jo iski khudki property nahi hai toh false dega
        console.log(key);
    }

}