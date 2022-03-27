// some method 

const numbers = [3,6,11,9];

// kya ek bhi number esa hai jo even hai 
// true 

const ans = numbers.some((number)=>number%2===0);
console.log(ans);

// REALISTIC EXAMPLE
const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
    {productId: 3, productName: "macbook", price: 25000},
]

const answer = userCart.some((cartItem)=>cartItem.price > 100000); // 1lakh se upar kisi ka bhi bhav hai?
console.log(answer);