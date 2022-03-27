// getter and setters 

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){  // by using get we can use method fullName() as a property now by '.'
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
        // array destructuring & fullName.split(" ") string ki list banake dega
        // jahape space hoga vaha se todega string ko   
        const [firstName, lastName] = fullName.split(" "); 
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


const person1 = new Person("rohit", "sharma", 5);
// console.log(person1.fullName());
console.log(person1.fullName); // get ke vajah se fullName ke baad () dalne ki zaroorat nahi thi
person1.fullName = "mohit mehta";
console.log(person1);