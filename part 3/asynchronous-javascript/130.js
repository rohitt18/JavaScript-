// synchronous programming vs asynchronous programming
// setTimeout() (yeh return mai ek id deta hai)
// synchronous programming means jab tak ek kaam khatam nahi ho jata tab tak dusra kaam start nahi hoga
// JS is a sync programming language(single threaded) but it behaves async as well


console.log("script start");
for(let i =1; i<10000; i++){
  console.log("inside for loop")
}
// upar wala code jisko bohot time lag raha hai voh aage ke code ko block karra hai bec of sync programming
console.log("script end");

// setTimeout (eg of async programming)
console.log("script start");

const id = setTimeout(() => { // bec yeh id return karta hai
  console.log("inside setTimeout");
}, 0);

for (let i = 1; i < 100; i++) {
  console.log("....");
}
console.log("setTimeout id is", id)
console.log("clearing timeout");
clearTimeout(id); // iske vajah se setTimeout function run nahi hua bec callback Queue se nikal jayega
console.log("script end");


// agar nahi samjha toh niche explaination dekho=>

// setTimeout (function lega as an input & sath mai yeh lega time in milliseconds ki apko yeh function kitni der baad run karna hai)
// isse hum minimum delay create kar sakte hai
// console.log("script start");
// function hello(){
//   console.log("Hello World");
// }
// setTimeout(hello, 1000);
// console.log("script end");

// humne padha tha sync programming mai ki ek ke baad but yaha par toh code direct jump mara 
// vahi toh karta hai setTimeout 
// yaha pe alag se function banane ke badle direct arrow func bhi pas kar sakte hai

// console.log("script start");
// setTimeout(() => {
//   console.log("inside setTimeout");
// }, 1000);
// console.log("script end");
