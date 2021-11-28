// call function other Example
function about(hobbies) {
    console.log(`${this.firstName} ${this.LastName}`);
    console.log(hobbies);
}

const person1 = {
    firstName: "Ashish",
    LastName: "Arya",
}
const person2 = {
    firstName: "Rahul",
    LastName: "Deo",
}

about.call(person1, "Singing");
about.call(person1, "Running");


// apply Function 

about.apply(person1, ['Watching Movies']) // Similar to call method but the argument is passed in the form of an array

// bind function
const func = about.bind(person2, "Hacking") // this function return a new function with the desired output
func()