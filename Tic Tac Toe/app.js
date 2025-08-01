let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let winningMsg = document.querySelector("#winning-msg");

let turnO = true;// playerO  & playerX
let count =0; // To Track Draw

const winPatterns = [
    [0, 1 ,2],
    [3, 4, 5],
    [6, 7, 8],
    [0 ,3, 6],
    [0 ,4, 8],
    [1 ,4, 7],
    [2, 5, 8],
    [2, 4, 6],
]

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        //draw O on click
      if(turnO){ 
         box.innerText = "O"
         turnO = false;
        }
        // Draw X on Click
      else {
          box.innerText = "X"
          turnO = true
      }
      box.disabled = true;
      count++;
      
       let isWinner = checkWinner();
       if(count ===9  && !isWinner){
        drawGame()
       }      
    })
});

const drawGame = ()=>{
    winningMsg.innerText= "Game Draw Try Again";
    msgContainer.classList.remove('hide');
    disabledBoxes()

}

const disabledBoxes = ()=>{
    for(let box of boxes){
       box.disabled = true;

 }
};

const enabledBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = ""
 }
};

const showWinner = (winner)=>{
    winningMsg.innerText = `Congratulations Winner is ${winner}`;
    msgContainer.classList.remove('hide')
    disabledBoxes();
};

const checkWinner = ()=>{
  for(let pattern of winPatterns){
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    console.log(pos1Val)

    if(pos1Val != "" && pos2Val !="" && pos3Val!=""){
        if(pos1Val===pos2Val && pos2Val ===pos3Val){
            showWinner(pos1Val)
            return true
        }
    }
  }
  return false;
};



 
const resetGame = ()=>{
    turnO = true;
    count = 0;
    enabledBoxes()
    msgContainer.classList.add(
        "hide"
    )
}
resetBtn.addEventListener("click" , resetGame)
newGameBtn.addEventListener("click", resetGame)
