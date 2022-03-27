// innerHtML
// how to change innerHTMl 

const headline = document.querySelector(".headline");
console.log(headline.innerHTML);
headline.innerHTML = "<h1> Inner HTML changed</h1>";
headline.innerHTML += "<button class = \"btn\"> Learn More </button>"; // " " ke andar ek aur "" nahi use kar sakte 
// isliye \" use karte hai " ke badle
console.log(headline.innerHTML);

// const headline = document.querySelector(".headline");
// console.log(headline.innerHTML);
// headline.innerHTML = "<h1>Inner html changed </h1>";
// headline.innerHTML += "<button class= \"btn\"> Learn More </button>" 
// console.log(headline.innerHTML);
