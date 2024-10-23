let userScore = 0;
let compScore = 0;

/*Accessing all the divs that have class choice in it. */
const body = document.querySelector("body");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const uScore = document.querySelector("#user-score");
const cScore = document.querySelector("#comp-score");


const genCompChoice = () =>{
    const options = ["rock","paper","scissor"];
    /*As we cannot generate random strings but always generate
    numbers between (0-1), thats why array was used. But 0-1 is not
    whole number. To Get whole number we can multiply by 3. As there are
    only 3 elements, the index will go upto 2. that's why we multiply by 3
    if index range is n then multiply random with n+1. but still it gives
    decimal points. So to solve that we used floor outputs a whole number.*/
    const compChoice = Math.floor(Math.random()*3);
    return options[compChoice];
}

//Draw game function
const drawGame = () =>{
    console.log("Game was Draw");
    msg.innerText = "Game Was Drawn, Play Again";
    body.style.backgroundColor = "#A9A9A9";

}

const showWinner = (userWin, userChoice, compChoice) =>{
    //User Win
    if(userWin){
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        body.style.backgroundColor = "green";
        uScore.innerText = ++userScore;
    }
    //User Lose
    else{
        msg.innerText = `You Lost! Computer ${compChoice} beats your ${userChoice}`;
        body.style.backgroundColor = "red";
        cScore.innerText = ++compScore;
    }
}

const playGame = (userChoice) => {
    console.log("User Choice =", userChoice);
    //Generate Computer Choice
    const compChoice = genCompChoice();
    console.log("Computer Choice =", compChoice);

    //Draw game
    if(userChoice == compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        
        if(userChoice == "rock"){
            //computer chooses scissor or paper
            userWin = compChoice == "paper" ? false : true;
        }
        else if(userChoice == "paper"){
            //computer chooses rock or scissor
            userWin = compChoice == "scissor" ? false : true;
        }
        else{
            // user chooses scissor
            //computer chooses rock or paper
            userWin = compChoice == "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

/*Using forEach method we are getting each choice and  */
choices.forEach((choice)=> {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        console.log(userChoice,"was clicked");
        //Game Starts Here
        playGame(userChoice);
    })
});