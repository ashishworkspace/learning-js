//Object Cloning
const obj = {
    firstName: "Ashish",
    lastName: "Kumar",
    gender: "Male",
    age: 21
}

// const objClone = {...obj}
// console.log(objClone)

const objClone2 = Object.assign({}, obj);
console.log(objClone2)