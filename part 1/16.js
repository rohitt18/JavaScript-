// and  or operator 
// &&   ||
// && => jab dono condition true hongi tabhi true hoga
// || => jab koi bhi ek condition true hogi toh true hoga

let firstName = "Mohit";
let age = 22;

if(firstName[0] === "R"){
    console.log("your name starts with R")
}

if(age > 18){
    console.log("you are above 18");
}

// && operator :-
if(firstName[0] === "R" && age>18){ 
    console.log("Name starts with R and above 18");
}else{
    console.log("inside else");
}

// let firstName = "Rohit";
// let age = 16;

// || operator :-
if(firstName[0] === "R" || age>18){
    console.log("inside if");
}else{
    console.log("inside else");
}