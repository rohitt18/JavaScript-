// click event on multiple buttons 

const allButtons = document.querySelectorAll(".my-buttons button");

console.log(allButtons);
for(let button of allButtons){
    button.addEventListener("click", function(){
        console.log(this.textContent);
    })
}

// OR

// for(let i =0; i < allButtons.length; i++){
//     allButtons[i].addEventListener("click", function(){
//         console.log(this.textContent);
//     })
// }

// OR

// allButtons.forEach(function(button){
//     button.addEventListener("click", function(){
//         console.log(this.textContent);
//     })
// });

