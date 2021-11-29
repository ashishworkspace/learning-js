//static property and function 

//getter and setter

class MyProfile{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    static classInfo(){
        return `hello`;
    }
    static mg = "hello world";
}

const person1 = new MyProfile("Ashish", "Kumar", 21)
console.log(MyProfile.classInfo());
console.log(MyProfile.mg)