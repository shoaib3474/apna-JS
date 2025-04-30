// // Qs. For a given array of numbers, print the square of each value using the forEach loop.

// const arr = [2, 3, 4, 5, 6]

// arr.forEach((val) => {
//     console.log(val * val)
// })

// //  Qs. We are given array of marks of students. Filter our of the marks of students that scored 90+.

// const marks = [90, 82, 43, 94, 93, 89, 97, 98]

// const topper = marks.filter((mark) => {

//     return mark >= 90
// })

// console.log(topper)


// Qs. Take a number n as input from user. Create an array of numbers from 1 to n.

const n = 7
let newArr = [];
for (let i = 1; i <= n; i++) {
    newArr[i - 1] = i
}

// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array.
const result = newArr.reduce((pres, curr) => {
    // return pres + curr // sum 
    return pres * curr // product
})

console.log(result)
