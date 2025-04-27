// Qs1. Print all even numbers from 0 to 100.
for(let i = 0;i <= 100;i++){
    if(i %2===0){
        console.log(i)
    }
}
 
//Qs2. Create a game where you start with any random game number.
//  Ask the user to keepguessing the game number until the user enters correct value.

const randomNum =56;
let userNum = prompt("Guess The Number ");

while( randomNum != userNum){
    userNum = prompt("You Entered The Wrong Number. Try Again")
}
console.log("Congratulation ! You Are The Winner!")
