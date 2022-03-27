// functions inside function 
// arrow function use karo ya declaration output same ayega!

// arrow function
const app = () => {
    const myFunc = () => {
        console.log("hello from myFunc")
        // return "helo from myFunc";
    }

    const addTwoNum = (num1, num2) => {
        return num1 + num2;
    }

    const mulTwo = (num1, num2) => num1 * num2;

    console.log("inside app");
    myFunc(); // function ko call 
    console.log(addTwoNum(5,5)); // function ko call
    console.log(mulTwo(5,5)); // function ko call
}
app();


// kuch bhi use karke function bana sakte hai (arrow or declaration) farak nahi padta

// function declaration 
// function app(){
//     const myFunc = () =>{
//         console.log("hello from myFunc")
//     }
    
//     const addTwo = (num1, num2) =>{
//         return num1 + num2;
//     }

//     const mul = (num1, num2) => num1* num2;

//     console.log("inside app");
//     myFunc();
//     console.log(addTwo(2,3));
//     console.log(mul(2,3));
// }
// app();