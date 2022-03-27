// application of closure - aysi function banao jisko ek bar se zyada bar call nahi kar sakte


function func(){
    let counter = 0;
    return function(){
        if(counter < 1){
            console.log("Hi, You called Me !!");
            counter++
        } else{
            console.log("mai already ek bar call ho chuka hoon");
        }
    }
}
const myFunc = func(); 
myFunc();
myFunc();