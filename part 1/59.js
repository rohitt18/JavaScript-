// reduce (IMP)
const numbers = [1,2,3,4,5, 10];

// aim : sum of all the numbers in array 

const sum = numbers.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
}, 100); // 25+100=125 bec initial value pass kar diya tha 100

console.log(sum);
// accumulator , currentValue,  return 
// 1               2              3 
// 3               3              6
// 6               4              10
// 10              5              15
// 15              10             25

// REALISTIC EXAMPLE OF reduce()
const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 15000},
]

const totalAmount = userCart.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue.price;
}, 0) // we have to set the initial value as 0 compulsory bec the cart was first empty.

console.log(totalAmount);

// accumulator      currentValue     return 
// 0                {}                  12000
// 12000            22000                34000
// 34000            15000                49000