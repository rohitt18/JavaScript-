// event object (very important)

// const firstButton = document.querySelector("#one");

// firstButton.addEventListener("click", function(event){
//     console.log(event);
// })

// jab bhi mai kisi bhi element pe event listener add hoga 
// js Engine --- line by line execute karta hai 
// browser ---- js Engine + extra features 
// browser ----- js Engine + WebApi

// jab browser ko pata chala ki user ne event perform kia 
// jo hum listen kar rahe hai 
// browser ----- 2 kaam karega
// 1.) callback function hai vo js Engine ko degi ...... 
// 2.)  callback function ke sath browser jo event hua hai uski information bhi dega
// ye info hamein ek object ke form mai milegi 


const allButtons = document.querySelectorAll(".my-buttons button");


for(let button of allButtons){
    button.addEventListener("click",(e)=>{
        console.log(e.currentTarget);  // target and currentTarget ke bich difference jab event bubbling padhenge tab pata chaljayega!
    })
}


// upar ka nahi samjha toh yeh hai explaination =>

function hello(a){      // yaha a likhu ya abc likhu output(object) toh same hi aayega na vaise hi e likhte hai
    console.log(a); 
}
hello({firstKey: "value1", secondKey: "value2"})