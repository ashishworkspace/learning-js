// Map in Array

const numbers = [13, 14, 16, 17, 18, 19];


const newArray = numbers.map(
    (number, index)=>{
        return number * number;
    })

console.log(newArray)

// Real UseCase

const users = [
    {name: "Ashish Kumar", email: "get.mail.ashish@gmail.com", location: "zero mile"},
    {name: "Abhishek Raj", email: "abhishek.raj@gmail.com", location: "tilkamanjhi"},
    {name: "Rahul Yadav", email: "yadavji@gmail.com", location: "tilkamanjhi"},
]


console.log(users.map((user, index)=>{
    return user.name
})
)

