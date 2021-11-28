const numbers = [13, 14, 16, 11, 16, 142, 123, 111, 1123]
const isEven = numbers.filter((number)=>{
    return number % 2 === 0
})

console.log(isEven);