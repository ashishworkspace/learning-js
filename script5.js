const obj1 = {
    key1: "value1",
    key2: "value2",
}


const obj2 = {
    key3: "value3",
    key4: "value5",
}

const obj = {...obj1, ...obj2, key6: "value6"};
console.log(obj)

const obj3 = {
    ..."ashish"
}
console.log(obj3)

const obj4 = {
    ...["item1", "item2"]
}
console.log(obj4)