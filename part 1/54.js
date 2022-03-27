// callback functions 
// actual use jo hota hai projects mai voh async functions mai ayega aage...


// FUNCTION KE ANDAR KUCH BHI PASS KAR SAKTE HAI
// yaha pe a kuch bhi ho sakta hai array/string/number as well as function
// function myFunc(a){
//     console.log(a); // output mai array [1,2,3] ayega
//     console.log("hello world");
// }
// myFunc([1,2,3]);

// function myFunc(a){
//     console.log(a); // output mai string abc ayega
//     console.log("hello world");
// }
// myFunc("abc");


// function myFunc(a){
//     console.log(a); // output mai object {name: "rohit"} ayega
//     console.log("hello world");
// }
// myFunc({name: "rohit"});

//number bhi ho sakta hai vaise hi


// FUNCTION bhi ho sakta hai vaise  ()
// function myFunc2(){
//     console.log("inside my func 2");
// }
// function myFunc(a){
//     // console.log(a); // yeh a jo mila usko call kar duga 
//     a(); // callback
// }
// myFunc(myFunc2);

function myFunc2(name){
    console.log("inside my func 2")
    console.log(`your name is ${name}`); 
}

function myFunc(callback){  // idhar (a) ko callback likhte hai
    console.log("hello there I am a func and I can..")
    callback("rohit"); // myFunc2("rohit")
}
myFunc(myFunc2); // matlab callback ki jagah myFunc2 ko pass kar diya

// aage chal ke padhenge kaise callback functions projects mai use karte hai
// aur async programming padhenge usme bhi callback functions ayega

