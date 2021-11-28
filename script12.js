// Map

// const data = new Map();
// data.set('name', 'Ashish');
// data.set('ph', 9122350079);
// console.log(data.keys())

// console.log(data.get('ph'));

// for(let key of data.keys()){
//     console.log(key)
// }

const data2 = {
  name: "ASHISH",
  location: "INDIA",
};

const newMap = new Map();
newMap.set(data2, { hobbies: ["Playing Chess", "Coding"] });
console.log(newMap.get(data2))
