// let userScore = 0 ;
// let compScore = 0 ;

// // accessing "div(img)" , selecting choices 
// const choices  = document.querySelectorAll(".choice") ;
// const msg = document.querySelector("#msg") ;
// choices.forEach((choice) => {
//     choice.addEventListener("click",() => {
//         const userChoice = choice.getAttribute("id") ;
//         // console.log("Choice is made! " , userChoice) ;
//         playGame(userChoice) ;
//     })
// })


// const playGame = (userChoice) => {
// console.log("user choice = ", userChoice) ;
// // generate computer Choice
// const compChoice = genCompChoice() ;
// console.log("computer choice = ",compChoice) ;
// if(userChoice === compChoice){
// drawGame() ;
// }else{
//     let userWin = true ;
//     if(userChoice === "rock"){
//         userWin = (compChoice === "scissors") ? true : false ;
//     }else if (userChoice === "paper"){
//     userWin = (compChoice === "rock") ? true : false ;
//     }
//     else if(userChoice === "scissor"){
//         userWin = (compChoice === "paper") ? true : false ;
//     }
//     showWinner(userWin);
// }
// }



// const genCompChoice = () => {
//     const options = ["rock","paper","scissors"] ;
//     const index = Math.floor(Math.random()*3) ;
//     return options[index] ;
// }

// const drawGame = () => {
//     console.log("game was draw") ;
//     msg.innerText = "Game was Draw . Play again ! " ;
//     msg.style.backgroundcolor = blue ;
// }



// const showWinner = (userWin) =>{
//     if(userWin){
//         console.log("you Win ! ") ;
//         msg.innerText = "You Win!" ;
//         msg.style.backgroundcolor = "yellow ";
//     }
//     else{
//         console.log("you lose! ") ;
//         msg.innerText = "You Lose ! " ;
//         msg.style.backgroundcolor = "red" ;
//     }
// }



let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //Generate computer choice 
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});