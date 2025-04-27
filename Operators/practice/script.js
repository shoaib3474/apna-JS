// Practice Qs : 1

 const num =  prompt('Enter a Number : '  )

 if(num % 5 ===0){
    console.log( num," The Number is multiple of 5 ")
 } else{
    console.log( num," The Number is NOT multiple of 5 ")
 }

 // Practice Qs : 2 

  const mark = 9
  let grade

 if(mark <=100 && mark >=90){
    grade = "A"
 } else 
 if(mark <=89 && mark >=80){
    grade = "B"
 }else 
 if(mark <=79 && mark >=70){
    grade = "C"
 } else 
 if(mark <=69 && mark >=60){
    grade = "D"
 } else 
 if(mark <=59 && mark >=50){
    grade = "E"
 } else 
 if(mark <=49 && mark >=0){
    grade = "F"
 } else{
    console.log("Wrong Input")
 }

 console.log(grade)