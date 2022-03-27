class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

const animal1 = new Animal("tom", 1)
console.log(animal1);
console.log(animal1.eat())
console.log(animal1.isSuperCute())

class Dog extends Animal{
    // matlab Dog class ke pas voh sari properties hai jo Animal ke pas hongi
} 

const tommy = new Dog("tommy", 3);
// console.log(tommy);
console.log(tommy.eat());
console.log(tommy.isCute());
