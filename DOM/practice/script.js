// Qs. Create a H2 heading element with text - “Hello JavaScript”.
//  Append “from Apna Collegestudents” to this text using JS.

let myTxt = document.getElementsByTagName("h2")[0]

let newTxt = myTxt.innerText + " From Appna College"

console.log(newTxt)


// Qs. Create 3 divs with common class name - “box”. Access them & add some unique text to each of them 

let boxes = document.querySelectorAll(".box");

for (let i = 0; i < boxes.length; i++) { // Corrected loop condition
    boxes[i].innerText = `New Value ${i + 1}`; // Access each element and update its text
    console.log(boxes[i].innerText); // Log the updated text
}