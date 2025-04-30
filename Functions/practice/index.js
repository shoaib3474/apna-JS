// Qs. Create a function using the “function” keyword that takes a String
//  as an argument &returns the number of vowels in the string.


function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU"

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count
}
const result = countVowels("Hello Pakistan")
console.log("The Number of Vowels in This Word ", result)

// Qs. Create an arrow function to perform the same task.


const vowels = (str) => {
    let count = 0;
    const vowels = "aeiouAEIOU"

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count
}

const output = vowels("Try To Solve Question")

console.log("The Number of Vowels in This Word ", output)