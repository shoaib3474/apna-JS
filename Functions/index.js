// simple function 
function sayHello(name) {
    return console.log("Hello", name)
}
// calling 
sayHello("Shoaib")

const sayHi = (name) => console.log("Hi", name)

sayHi("Shoaib")


// Callback function (ForEach)

const arr = ["apple", "mango", "graps", "orange"]

arr.forEach((val) => {
    console.log(val)
})

// Map functio 

const fruits = arr.map((val) => {
    return arr
})

console.log(fruits)


// filter 

const findApple = arr.filter((val) => {
    return val === "apple"
})

console.log(findApple)


// reduce method

const arr1 = [1, 2, 3, 4]

const sum = arr1.reduce((pres, curr) => {
    return pres + curr
})

console.log(sum)