// method & this
// Function inside object is called method 
// this refer to current context

const person = {
    firstName: "Ashish",
    lastName: "Kumar", 
    age: 21,
    about: function(){
        console.log(`${this.firstName} ${this.lastName} is ${this.age} year old`)
    },
    printThis: function(){
        console.log(this)
    }
}
console.log(person.about())
// Here this refer to global context = Window object
console.log(this)

//Here this refer to the person object 
console.log(person.printThis())