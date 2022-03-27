// lexical scope

// const myVar = "value1";
function myApp() {
  const myVar = "value1";
  function myFunc() {
    const myVar = "value59";
    console.log("inside myFunc", myVar); // output value59 but upar wale line ko comment karde toh output will be value1
  }
  // JavaScript pehle myVar ko myFunc mai check karegi agar nahi hai toh
  // lexical environment(yeh function jaha pe bana rakha hai i.e,myApp ke andar) mai check karegi
  // agar nahi hai toh myApp ke lexical environment mai check karegi (i.e,global environment mai)
  console.log(myVar);
  myFunc();
}
myApp();


// just for better understanding of lexical scope lets declare myFunc2 inside myFunc
// const myVar = "value1";

// function myApp(){

//     function myFunc(){
//         // const myVar = "value59";
//         const myFunc2 = () =>{
//             console.log("inside myFunc", myVar);
//                 // JS pehle myFunc2() mai check karega myVar fir myFunc() fir myApp() fir global.
//         }
//         myFunc2();
//     }

//     console.log(myVar);
//     myFunc();
// }

// myApp();
