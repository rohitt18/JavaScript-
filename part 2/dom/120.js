// intro to events (mouse, keyboard & input events are the most crucial )
// click 
// button press
// mouseover


// event add karne ke 3 tarike hai 
// Par yahi ek tarika hai jo use karenge hamesha

const btn = document.querySelector(".btn-headline"); // pehle voh button ko select karlo
btn.addEventListener("click", () => {                  // method --- addEventListener
    console.log("you clicked me!!!") 
});


// OR 

// btn.addEventListener("click", function(){
//     console.log("you clicked me !!!!");
// });

// basic eventListener tha yeh aage adv cheez padhenge