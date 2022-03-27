// clone using Object.assign 
// syntax - const obj2 = Object.assign({}, obj);

// clone ka yeh fayda hai ki agar mai obj mai key add karuga toh voh obj2 mai nahi add hogi
// bec address alag alag ho jate hai clone karne par
// memory mai

const obj = {
    key1: "value1",
    key2: "value2"
}

// const obj2 = {...obj}; // clone
const obj2 = Object.assign({}, obj); // clone
obj.key3 = "value3";
console.log(obj);
console.log(obj2);

// spread operator naya hai & Object.assign purana hai
// toh agar aysa code dikhe kahin toh darna mat
