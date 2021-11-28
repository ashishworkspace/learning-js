// call method

const user1 = {
  firstName: "Ashish",
  lastName: "Kumar",
  about: function () {
      console.log(`${this.firstName} ${this.lastName}`)
  },
};

const user2 = {
  firstName: "Amit",
  lastName: "Sharma",
};

// Suppose we need to use the about method of user1 into user2 
// Without defining the seperate method in user2 object


// we can use call() 
// call() take an argument to define context i.e. this 

user1.about.call(user2) // here this inside call function refer to user2

user1.about.call(user1) // here this inside call function refer to user1