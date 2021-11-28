// Reduce method in an array

const numbers = [1, 4, 2, 55 , 2, 7]

const sum = numbers.reduce(
    (accumulator, currentValue)=>{
        return accumulator + currentValue; 
    }
)
console.log(sum);

// Real useCase
// Suppose we buy a product from Flipkart
const flipkart = [
    {_id: 1, product_name: "mobile", price: 12000},
    {_id: 2, product_name: "tv", price: 44000},
    {_id: 3, product_name: "fan", price: 2000}
]

const initialPrice = 0
const totalAmount = flipkart.reduce(
    (totalPrice, currentProduct)=>{
        return totalPrice + currentProduct.price;
    }, initialPrice
)

console.log(totalAmount)


