class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    isCute(){
        return true;
    }
    eat(){
        return "eating";
    }
}

class Dog extends Animal{
    constructor(name, age, character){
        super(name, age);
        this.character = character;
    }
    printCharacter(){
        return `${this.character}`;
    }
}
const jerman = new Dog("hunter", 2, "Nice Dog");
console.log(jerman.isCute());
console.log(jerman.printCharacter())
console.log(Object.getPrototypeOf(jerman))