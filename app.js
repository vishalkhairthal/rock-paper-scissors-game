let userScore=0;
let compScore=0;
const choices= document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const genCompChoice=()=>{
    const options=["stone", "paper", "scisor"];
    const randidx=Math.floor(Math.random()*3)
    return options[randidx];
}

const drawGame=()=>{
    msg.innerText="Match is draw";
    msg.style.backgroundColor="#669bbc";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerHTML=`You Win!, Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        msg.style.color="white";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerHTML=`Computer Win, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        msg.style.color="white";
    }
}
const playGame=(userChoice)=>{
    console.log("user choice",userChoice);

    //gen computer choice
const compChoice=genCompChoice();
console.log("computer choice",compChoice);

if(userChoice===compChoice){
    drawGame();
}else{
    let userWin=true;

    if(userChoice==="stone"){
        if(compChoice==="paper"){
            userWin=false;
        }else{
            userWin=true;
        }
        }else if(userChoice==="paper"){
            if(compChoice==="scisor"){
                userWin=false;
            }else{
                  userWin=true;
            }
        }else if(userChoice==="scisor"){
            if(compChoice==="stone"){
                userWin=false;
            }else{
                userWin=true;
            }
        }
showWinner(userWin,userChoice,compChoice);
        }
     

    }

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
    playGame(userChoice);
    })
});