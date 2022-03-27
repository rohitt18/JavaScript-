// Promise jisko pehle future value ke naam se jana jata tha
// (yeh bhi async hai matlab browser ka function hai bas isme yeh difference hai ki yeh callback queue ke badle microtask queue mai add hota hai)
// Priority wise: microtask queue > callback queue
// abhi toh filhal .then & .catch use karke consume karrre hai promise ko
// aage padhenge hum ki kaise async and await se consume karte hai apne promises ko
// status: pending     => status: fulfilled
// value: null    => value: friedRice


 
console.log("script start");
const bucket = ['coffee', 'chips','vegetables','salt','rice'];



const friedRicePromise = new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
        resolve({value:"friedrice"});
    }else{
        reject("could not do it");
    }
})

// yeh toh humne Promise ko PRODUCE kiya



// Ab humein Promise ko CONSUME karna hai 
// how to CONSUME 

friedRicePromise.then( 
    // jab promise resolve hoga 
    (myfriedRice)=>{
    console.log("lets eat ", myfriedRice);
    }
    ).catch(
    (error)=>{
        console.log(error)
    })


setTimeout(()=>{
    console.log("hello from setTimeout");
},0);

for(let i = 0; i <=50; i++){
    console.log(Math.random(), i);
}

console.log("script end!!!!")