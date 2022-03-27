// find method 

const myArray = ["Hello", "catt", "dog", "lion"];

// pehle callback function bahar bana lete hai fir direct usko as an input pass kar denge find() mai
// function isLength3(string){
//     return string.length === 3;
// }

const ans = myArray.find((string)=>{
    return string.length===3
}); //callback ki madat se find karne ki koshish karega uss string ko array mai se jiski length hai 3.
console.log(ans); //sirf first occurance hi deta hai output mai

// REALISTIC EXAMPLE - 
const users = [
    {userId : 1, userName: "rohit"},
    {userId : 2, userName: "harsh"},
    {userId : 3, userName: "nitish"},
    {userId : 4, userName: "mohit"},
    {userId : 5, userName: "aaditya"},
];

const myUser = users.find((user)=>{
    return user.userId===3;
});
console.log(myUser);