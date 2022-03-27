// closure eg-3


function myFunction(power){
    return function(number){
        return number ** power
    }
}
const square = myFunction(2); // FEC create hoga
// square() ke pas yeh function(number){return number**power} aur power variable aa jayega
const ans = square(3); // FEC create hoga
// square mai power ka value 2 hoga aur 9 print ho jayega isliye
console.log(ans);


const cube = myFunction(3);
const ans2 = cube(3);
console.log(ans2);




// // iss code ko ayse chota bhi kar sakte hai using => function  

// const myFunction = (power) => (number) => number ** power // adv js developers use this
// const square = myFunction(2); 
// const ans = square(3); 
// console.log(ans);


// const cube = myFunction(3);
// const ans2 = cube(3);
// console.log(ans2);