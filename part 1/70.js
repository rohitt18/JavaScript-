// optional chaining (users?.address?.)
// means
// console.log(user?.address?.houseNumber);

const user  = {
    firstName: "rohit",
    // address: {houseNumber: '1234'}
}
console.log(user.firstName);
console.log(user.address);
// console.log(user.address.houseNumber);

// address hoga hi nahi toh undefined ayega but agar undefined ke andar access karne ka try karenge 
// toh error aa jayega and pura system crash ho jayega isliye
// yeh problem se bachne ke liye hum ?. ka use karte hai

console.log(user?.firstName);
console.log(user?.address?.houseNumber);

// bec kitni baar humein nahi pata hota ki humare object mai yeh address abhi tak hai ya nahi hai
// ho sakta hai ki agle second mai mere object mai yeh address property aa jaye but abhi na ho
// aysa hota hai jab hum react vagerah pe kaam karte hai
// jab state manage karte hai