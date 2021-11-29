const detail = {
    about: function(){
        return `${this.firstName} ${this.lastName}`;
    },
    is18: function(){
        return this.age < 18 ? "Eligible to vote" : "Not Eligible to Vote";
    }
}

function userInfo(firstName, lastName, age, address){
    const user = Object.create(detail);
    user.firstName = firstName;
    user.lastName =  lastName;
    user.age = age;
    user.address = address;
    return user;
}


const user1 = userInfo("Ashish", "Kumar", 21, "zero mile");
const user2 = userInfo("Abhishek", "Raj", 20, "tilkamanjhi");
 
console.log(user1.about())
console.log(user2.about())
