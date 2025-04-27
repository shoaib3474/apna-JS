                                       // F O R  L O O P
console.log("F O R  L O O P ")                                       
for (let i = 0; i < 5; i++) {
    console.log("Pakistan :", i);
}

                                      // W  H I L E  L O O P 
console.log("W  H I L E  L O O P ")
let count = 0;
while (count < 5) {
    console.log("While loop iteration:", count);
    count++;
}

                                     // D O  W H I L E  L O O P
console.log("D O  W H I L E  L O O P")
let num = 0;
do {
    console.log("Do-while loop iteration:", num);
    num++;
} while (num < 5);


                                             // F O R  O F  L O O P 
console.log(" F O R  O F  L O O P ")
// is used on string and array 
const fullName  = "Babar Azam"
for(let val of fullName){
    console.log(val)
}

                                            // F O R  I N  L O O P
console.log("F O R  I N  L O O P")
const student = {fullName: "Saif Jamal", age: 20, gender: "Male",mark:90}
for(let key in student){
    console.log(`key of the obj = ${key} and the values of keys : ${student[key]}`)
}