let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reser-btn");
let newgameBtn = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; 

const WinPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];




boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        CheckWinner();
    });
});

const ShowWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
};


const CheckWinner = () => {
    for(let pattern of WinPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;/*pattern [0] means Winpatterns ka 1st term played*/ 
        let pos2Val = boxes[pattern[1]].innerText;/*pattern [0] means Winpatterns ka 1st term played*/ 
        let pos3Val = boxes[pattern[2]].innerText;/*pattern [0] means Winpatterns ka 1st term played*/ 
        
        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos1Val === pos3Val) {
                console.log("winner" , pos1Val);
                ShowWinner(pos1Val);
            }
        }
    }
};
