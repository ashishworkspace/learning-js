// function to return a user object 
// but this function has one limitation i.e.
// Every time we call the userInfo function about and is18 function is created inside the memory
// We will fix that in next script i.e. script23.js


function userInfo(firstName, lastName, age, address){
    user = {};
    user.firstName = firstName;
    user.lastName =  lastName;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} ${this.lastName}`;
    }
    user.is18 = function(){
        return this.age < 18 ? "Eligible to vote" : "Not Eligible to Vote";
    }
    return user;
}





const user1 = userInfo("Ashish", "Kumar", 21, "zero mile");
const user2 = userInfo("Abhishek", "Raj", 20, "tilkamanjhi");
 
console.log(user1.about())
