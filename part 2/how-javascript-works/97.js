// lexical environment, scope chain

const lastName = "Gupta";

const printName = function(){
    const firstName = "Rohit";
    function myFunction(){
        console.log(firstName); // myFunction mai nahi mila firstName toh uske bahar check karega(lexical)
        console.log(lastName);// myFunction mai nahi toh bahar, bahar nahi toh uske bhi bahar (double lexical)
    }
    myFunction()
    
}
printName();