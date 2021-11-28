function userInfo(){
    return `${this.firstName} ${this.lastName} is ${this.age} year old`;
}

const person = {
    firstName: "Ashish",
    lastName: "Kumar", 
    age: 21,
    about: userInfo, // Here we are storing the reference of userInfo Function
}
const person2 = {
    firstName: "Abhishek",
    lastName: "Raj", 
    age: 20,
    about: userInfo,
}
const person3 = {
    firstName: "Yadav",
    lastName: "rahul", 
    age: 22,
    about: userInfo,
}


console.log(person.about())
console.log(person2.about())
console.log(person3.about())