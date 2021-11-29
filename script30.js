//getter and setter

class MyProfile{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //getter
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    //setter
    set fullName(params){
        const [firstName, lastName] = params.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new MyProfile("Ashish", "Kumar", 21)
console.log(person1)
console.log(person1.fullName)
person1.fullName = "Aman Ashish";
console.log(person1.firstName)