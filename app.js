let userChoice=0;
let compChoice=0;
const choices=document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");
let userScore=0;
let compScore=0;

const generateComp=()=>{
    const options =["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}


const drawGame=()=>{
console.log("Game was draw");
msg.innerText="Game was a draw. Play again 😄";
msg.style.backgroundColor = "";

}

const showWinner=(userWin,userChoice,compChoice)=>{
if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    console.log("YOU WIN!");
    msg.innerText=`You Win. Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "Green"
     msg.style.color ="white"
     confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
});
}else{
    compScore++;
    compScorePara.innerText=compScore;
    console.log("YOU LOOSE!");
     msg.innerText=`You Lost, ${compChoice} beats your ${userChoice}`;
     msg.style.backgroundColor = "red"
     msg.style.color ="white"
}
}
const playGame=(userChoice)=>{
    console.log("User choice was",userChoice);
    //Generate Computer choice
    const compChoice = generateComp();
    console.log("Computer choice was",compChoice);
    if(userChoice===compChoice){
        //Draw game
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin = compChoice==="paper"?false : true;
        }
        else if(userChoice==="scissors"){
            userWin= compChoice==="rock"?false:true;

        }
        else{
            userWin= compChoice==="scissors"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);

    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{

        const userChoice=choice.getAttribute("id");
       
        playGame(userChoice);
    })
})
