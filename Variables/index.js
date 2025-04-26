                                                                      // var 📝
var fullName = "John Don"; 
// can be re-declared 🔄 &
var fullName = "Baber Azam"; 
// updated ✏️
fullName = "John Cena"; 
// A global scope variable 🌐
{
   var motorCycle = "Honda CD 70"
}
console.log(motorCycle)                        
                                                                      //let
// let ✏️
let lastName = "Khan"; 
// cannot be re-declared 🚫
// let lastName = "Sing"; ❌ (This would cause an error)
// but can be updated 🔄
lastName = "Sing"; 
// A block scope variable 📦
{
  let city = "Sahiwal"
  console.log(city)   //  ✅ Output: New York (inside the block)
}

//   console.log(city);    ❌ (This would cause an error)

                                                                   // const
const PI  =3.14 
//cannot be re-declared 

// const PI = 4.23;  ❌ (This would cause an error)

// or updated.
PI = 3.14159

// A block scope variable 📦
{
    const  city = "Sahiwal"
    console.log(city)   //  ✅ Output: New York (inside the block)
  }
  
  //   console.log(city);    ❌ (This would cause an error)
  