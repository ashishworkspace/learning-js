// Callback Function



// const myFunc2 = (msg) => {
//     console.log(`Function 2 is being Called and Message is ${msg}`);
// }

// const myFunc = (callback) =>{
//     callback("Hello");
// }

// myFunc(myFunc2)


const person = {
    name: "Ashsih Kumar🧔",
    email: "get.mail.ashish@gmail.com📧",
    location: "zero mile near📍",
    hobbies: ["playing card", "fast learner", "good grabber", "game changer"]
}


function userInfo({name, email, location}){
    console.log(name, email, location);
}

userInfo(person)