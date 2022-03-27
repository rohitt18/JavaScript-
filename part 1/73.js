// call, apply, bind.
// bind is useful
// function hello(){
//     console.log("hello world!");
// }
// hello.call();  // kisi bhi function ko .call karke bhi call kar sakte hai

// call
function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {
    firstName: "rohit",
    age: 8,
    
}
const user2 = {
    firstName: "mohit",
    age: 9,
    
}
about.call(user2, "guitar", "edsheran"); // same as file 71 bas function ko call karne ke liye .call method use kiya hai


// apply use karenge toh bas alag alag pass karne ki jagah apko ek array mai pass kardena hai vahi extra arguments 
about.apply(user2, ["guitar", "edsheran"]);

// bind ***
// about.bind(user1, "guitar", "edsheran"); // kuch nahi print hoga bec bind function return karta hai
const func = about.bind(user2, "guitar", "edsheran"); // isliye pehle value ek function mai store karna padta hai fir call karte hai
func();