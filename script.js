let array1 = ["item1", "item2", "item3"];

let array2 = array1.slice(0).concat(["item4", "item5"])


let array3 = [...array1, "item0"]

console.log(array1)
console.log(array2)
console.log(array3)

 

const [var1, var2, ...newSubArray] = array1;

console.log(var1, var2, newSubArray)