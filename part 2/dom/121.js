// this keyword


// arrow function mai this ka value window hoga 
// const btn = document.querySelector(".btn-headline");

// btn.addEventListener("click", ()=>{
//     console.log("you clicked me!");
//     console.log("value of this");
//     console.log(this);
// })

// normal function use karenge toh this ka value voh button khud rahegi
const btn = document.querySelector(".btn-headline");

btn.addEventListener("click",function(){
    console.log("you clicked me !!!!");
    console.log("value of this")
    console.log(this);
});