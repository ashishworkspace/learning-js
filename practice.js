const person = {
  name: "Ashish",
  profession: [
    "Web Application Developer",
    "DevOps engineer",
    "Android Application Developer",
  ],
  location: "Zero mile, bhagalpur",
  product: [
      {_id: 1, product_name: "sticker", price: 324},
      {_id: 2, product_name: "laptop", price: 43700},
      {_id: 3, product_name: "mobile", price: 12000},
      {_id: 4, product_name: "bluetooth_speaker", price: 900},
      {_id: 5, product_name: "shirt", price: 1200},
  ]
};

// Reduce Function
const totalPrice = person.product.reduce((eachPrice, productItem)=>{
    return eachPrice + productItem.price; 
}, 0);
console.log(totalPrice);

// Printing User Information
// {name, profession, location, product} this is called object destructring.
const userInfo = ({name, profession, location, product}) =>{
    console.log(name, profession, location, product);
}
userInfo(person);

// If Every Item in the price list has 5% Discount than find the actual price
person.product.forEach((productList, index)=>{
    console.log(productList.price * 0.95);
});

// Create an new array with emi of rate 14% and duration of 6 month
const newPriceAfterEmi = person.product.map((productList, index)=>{
    let principal = productList.price;
    let rate = 14 / 1200;
    let duration = 6;
    return principal * rate * ((1+rate) ** duration /((1+rate) ** duration  -1))
});
console.log(newPriceAfterEmi)

//Filter an the price > than 1200
const costlyItems = person.product.filter((product) => product.price > 1200);
console.log(costlyItems.map((productList, index)=> productList.product_name))


// Sort the price from Low to High
const lowToHight = person.product.sort((a,b) => a.price - b.price)
console.log(lowToHight);
// Sort the price from High to Low
const HighToLow = person.product.sort((a,b) => b.price - a.price)
console.log(HighToLow);