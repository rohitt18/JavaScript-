// Promise.resolve
// Promise chaining

const myPromise = Promise.resolve(5);
myPromise.then((value)=>{   // promise resolve hoti hai toh kuch value milti hai 
  console.log(value);      // simply promise mai jo resolve hota hai voh then ke andar call karenge value as input dalke
})


// then()
// then method hamesha promise return karta hai

// promise chaining
function myPromise(){
  return new Promise((resolve, reject)=>{
    resolve("foo");
  })
}

myPromise()
  .then((value)=>{
    console.log(value);
    value += "bar";
    return value
  })
  .then((value) =>{
    console.log(value);
    value += "baaz";
    return value;
  })
  .then(value=>{
    console.log(value);
  })


