const fGame = () => {
    let pScore = 0;
    let cScore = 0;
    //========================================
    //============== Start Game ==============
    //========================================
    const fStartGame = () => {
        const StartScreen = document.querySelector("#gameStart");
        const PlayBtn = document.querySelector("#gameStart button");
        const PlayScreen = document.querySelector("#gamePlay");
        PlayBtn.addEventListener("click", () => {
            StartScreen.classList.add("fadeOut");
            PlayScreen.classList.add("fadeIn");
        });
    };
    //========================================
    //=============== Play Game ==============
    //========================================
    const fPlayGame = () => {
        const Options = document.querySelectorAll("#playOptions button");
        const imgPlayer = document.querySelector(".imgPlayer");
        const imgComputer = document.querySelector(".imgComputer");
        Options.forEach(option => {
            option.addEventListener("click", function() {
                // Get Option
                const pOption = this.textContent;
                const cOption = ["rock", "paper", "scissors"][Math.floor(Math.random() *3)];
                // Animation
                imgPlayer.style.animation = "shakePlayer 2s ease";
                imgComputer.style.animation = "shakeComputer 2s ease";
                // Timer
                setTimeout(() => {
                    // Change Img
                    imgPlayer.src = "./img/"+pOption+".png";
                    imgComputer.src = "./img/"+cOption+".png";
                    // Compare
                    const winner = document.querySelector("#playWinner");
                    if (pOption == cOption) {
                        winner.textContent = "Game is Tie!";
                    } else if (pOption == "rock" && cOption == "scissors") {
                        pScore += 1;
                        winner.textContent = "Player is Winner!";
                    } else if (pOption == "paper" && cOption == "rock") {
                        pScore += 1;
                        winner.textContent = "Player is Winner!";
                    } else if (pOption == "scissors" && cOption == "paper") {
                        pScore += 1;
                        winner.textContent = "Player is Winner!";
                    } else {
                        cScore += 1;
                        winner.textContent = "Computer is Winner!";
                    }
                    // Score
                    const scoreP = document.querySelector("#scorePlayer p");
                    const scoreC = document.querySelector("#scoreComputer p");
                    scoreP.textContent = pScore;
                    scoreC.textContent = cScore;
                    // Animation
                    imgPlayer.style.animation = "";
                    imgComputer.style.animation = "";
                }, 2000);
            });
        });
    };
    fStartGame();
    fPlayGame();
}
//========================================
//================== Run =================
//========================================
fGame();