// select element using query selector
// hum querySelector se kuch bhi select kar sakte hai

// getElementById =>
// const mainHeading = document.getElementById("main-heading");

// querySelector =>
const mainHeading = document.querySelector("#main-heading");
console.log(mainHeading);

const header = document.querySelector(".header");
console.log(header);


// ek sath agar saare classes select karne hai toh querySelectorAll use kar sakte hai
const navItem = document.querySelectorAll(".nav-item")
console.log(navItem);