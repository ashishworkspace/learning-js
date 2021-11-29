// class in JS
// Class are fake 

class UserInfo{
    constructor(firstName, lastName, age, address){
        this.firstName = firstName;
        this.lastName =  lastName;
        this.age = age;
        this.address = address;
    }
    about(){
        return `${this.firstName} ${this.lastName}`;
    }
    is18(){
        return this.age < 18 ? "Eligible to vote" : "Not Eligible to Vote";
    }
}

const user1 = new UserInfo("Ashish", "Kumar", 21, "zero mile");
const user2 = new UserInfo("Abhishek", "Raj", 20, "tilkamanjhi");
 
console.log(user1.about());
console.log(user2.about());