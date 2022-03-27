// closures (must watch video for better understanding)
// closure : 30-40%
// analyse : 70-80%
// real example : 100%
// closure eg-1

// function can return functions =>
function outerFunction(){
    function innerFunction(){
        console.log("hello world")
    }
    return innerFunction;
}

const answer = outerFunction();
// console.log(answer);
answer();


// closure eg-1

function printFullName(firstName, lastName){
    function printName(){
        console.log(firstName, lastName);
    } 
    return printName; // yeh printName() return toh ho raha hai  
    // but apne sath firstName & lastName variables ko sath mai lekar return hua hai
    // this is called closures- jab function kisi aur function se return
    // hota hai toh voh apne sath jo uske local memory ke variables hai 
    // unko sath lekar return hota hai bec usko pata hota hai ki unki zaroorat padegi
}

const ans = printFullName("rohit", "gupta");
// console.log(ans);
ans();
