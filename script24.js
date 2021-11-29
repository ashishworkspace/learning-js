
function userInfo(firstName, lastName, age, address){
    const user = Object.create(userInfo.prototype);
    user.firstName = firstName;
    user.lastName =  lastName;
    user.age = age;
    user.address = address;
    return user;
}

userInfo.prototype.about = function(){
    return `${this.firstName} ${this.lastName}`;
};
userInfo.prototype.is18 = function(){
    return this.age < 18 ? "Eligible to vote" : "Not Eligible to Vote";
};


const user1 = userInfo("Ashish", "Kumar", 21, "zero mile");
const user2 = userInfo("Abhishek", "Raj", 20, "tilkamanjhi");
 
console.log(user1.about())
console.log(user2.about())
