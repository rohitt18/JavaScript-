// every method (returns boolean value)
// use case eg-check karne ke liye ki iss array jitne bhi element hai voh sare ke sare even hai 

const numbers = [2,4,6,8,10];


const answer = numbers.every((number)=>{
    return number%2===0;
});
console.log(answer);



// REALISTIC EXAMPLE
const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 20000},
    {productId: 3, productName: "tv", price: 30000},
]

// check every product ka price < 30,000
// userCart.every((cartItem)=>{
//     return cartItem.price < 30000;
// });


const ans = userCart.every((cartItem)=>{
    return cartItem.price < 30000;
});
console.log(ans);