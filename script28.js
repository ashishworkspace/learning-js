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
const animal1 = new Animal("tom", 2);
console.log(animal1.isCute());