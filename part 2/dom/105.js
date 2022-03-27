// change text 


// textContent and innerText (innerText hide ki hui cheez ko nahi batata console mai eg.Hello nahi bata raha)

const mainHeading = document.getElementById("main-heading");
console.log(mainHeading.innerText);
mainHeading.textContent = "This is something else";
console.log(mainHeading.textContent);

