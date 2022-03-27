// closure eg-2

function hello(x){
    const a  = "varA";
    const b = "varB";
    // function() hello(x) ke andar present hai isliye yeh function apne 
    // surroundings ke jo variables hai unko sath lekar return hoga
    // kyuki yeh function samajdar hai isko pata hai ki a,b,x use hoga badmai
    return function(){
        console.log(a,b,x);
    }
}

const ans = hello("arg");
ans(); // function call karte hai toh function execution context(FEC) create hota hai