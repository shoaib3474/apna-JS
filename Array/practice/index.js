// Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
// Find the average marks of the entire class.

let marks =  [85, 97, 44, 37, 76, 60]

let sum= 0;
 for(let mark of marks){
    sum = sum + mark;
 }
 
  const avgMarks = sum /marks.length

  console.log("The Avaege Marks of The Student : ",avgMarks)

  //Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
  //All items have an offer of 10% OFF on them. Change the array to store final price after
  // applying offer.

  let items = [250, 645, 300, 900, 50]
  
  for(let item of items){
     let offer = item/10
    const finalPrice = item - offer
    console.log(
        "The Price Of Items After The 10% Offer is :", finalPrice
    )
  }



// Qs. Create an array to store companies -> “Bloomberg”, “Microsoft”, “Uber”, “Google”, “IBM”, “Netflix”

const companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]

// a. Remove the first company from the array
console.log(companies)
companies.shift()
console.log(companies)

// b. Remove Uber & Add Ola in its place
console.log(companies)
companies.splice(2,1,"Ola")
console.log(companies)

// c. Add Amazon at the end

companies.push("Amazon")
console.log(companies)