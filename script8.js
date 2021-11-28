// forEach in Array

numbers = [13, 14, 16, 17, 18, 19]


// const squareGenerator = (number, index) =>{
//     console.log(`${numbers[index]} square is ${number*number}` );
// }
// numbers.forEach(squareGenerator);


numbers.forEach((number, index)=>{
    console.log(`${numbers[index]} square is ${number*number}`);
})


// Real useCase


const users = [
    {name: "Ashish Kumar", email: "get.mail.ashish@gmail.com", location: "zero mile"},
    {name: "Abhishek Raj", email: "abhishek.raj@gmail.com", location: "tilkamanjhi"},
    {name: "Rahul Yadav", email: "yadavji@gmail.com", location: "tilkamanjhi"},
]

users.forEach((user)=>{
    console.log(user.email);
})