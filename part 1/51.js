// default parameters 

// function addTwo(a,b){
//     ES2015 se pehle hum ayse karte the
//     if(typeof b ==="undefined"){
//         b = 0;
//     }
//     return a+b;
// }

//setting default value as 0 for parameter 'b'
function addTwo(a,b=0){
    return a+b; // if b is not set to 0 as default then error-NaN
}

const ans = addTwo(4);
console.log(ans);