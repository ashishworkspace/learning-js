const personInfo = {
    firstName: "Ashish",
    lastName: "Kumar",
    age: 21,
    about: function(){
        return `${this.firstName} ${this.lastName}  is ${this.age} old.`;
    },
    is18: function(){
        return this.age > 18 ? "Elegible to Vote": "Not Elegible to Vote";
    } 
}

console.log(personInfo.about()); 