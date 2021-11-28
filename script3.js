listOfItems = ["mango", "grapes", "banana"]

console.log("in keyword")
for(const index in listOfItems){
    console.log(listOfItems[index]);
}
// console.log("\nof keyword")
// for(const fruit of listOfItems){
//     console.log(fruit);
// }




// const obj = {
//   name: "Ashish",
//   lastName: "Kumar",
//   "hobbies name": [
//     "Playing with code",
//     "Mastering the Computer fundamentls",
//     "Painting",
//     "Sleeping",
//   ],
// };

// // console.log(obj["hobbies name"])


// // Add a key with the name by Variable

// // const key = "email";
// // obj[key] = "get.mail.ashish@gmail.com"

// // console.log(obj)

// // // Printing the key of Object
// // for(const key in obj){
// //     console.log(key);
// // }
// // // Printing the value of Object
// // for(const key in obj){
// //     console.log(obj[key]);
// // }

// // Iterate through an Array

// console.log(Object.keys(obj))
// for(const item of Object.keys(obj)){
//     console.log(obj[item])    
// }
