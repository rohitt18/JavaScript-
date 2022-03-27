// function returning function 

// basic function - 
// function myFunc(){
//     return [1,2,3]; //kuch bhi return kar sakta hai string,array,obj,number
//     //but function kya koi dusra function return kar sakta hai kya?
// } 
// const ans = myFunc();
// console.log(ans);

// func returning func - 
function myFunc(){
    function hello(){
        return "hello world"
    }
    return hello; 
}

const ans = myFunc(); // ans will become a function bec myFunc will return a function. 
console.log(ans());