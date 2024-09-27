let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");
let newgame=document.querySelector(".newgame-btn");
let newgame2=document.querySelector(".newgame-btn2");
let draw=document.querySelector(".draw-msg");
let drawcontainer=document.querySelector(".draw-msg-container");


let count =0;
let turnX=true;

let winpatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];



boxes.forEach((box)=>{
    box.onclick = function () {
        count++;
    };
    box.addEventListener("click",()=>{
        
        if(turnX===true){
            box.innerText="X";
            turnX=false;
            
        }
        else{
            box.innerText="O";
            turnX=true;
        }
        box.disabled=true;

        checkwinner();
    });
});


const resetgame =()=>{
    count=0;
    turnX=true;
    enableboxes();
    msgcontainer.classList.add("hide");
    drawcontainer.classList.add("hide");
};


const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};





const winnermsg=(winner)=>{
    msg.innerText=`Congratulations,WINNER is ${winner}`;
    msgcontainer.classList.remove("hide");
    newgame.classList.remove("hide");
    disabledboxes();
};

const drawmsg=()=>{
    draw.innerText="DRAW";
    
     drawcontainer.classList.remove("hide");

    
};


const checkwinner=()=>{
    for(let pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" &&pos2val!=""&&pos3val!=""){
            if(pos1val===pos2val&&pos2val===pos3val){
                console.log("winner",pos1val)
                winnermsg(pos1val);
            }
            else if(count===9){
                drawmsg();
            }
        }
    }
};
newgame.addEventListener("click",resetgame);
newgame2.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);