let gameSeq=[];
let userSeq=[];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

//press any key to start the game
document.addEventListener("keypress", function () {
    if(started == false){
        console.log("game is started");
        started = true;

        levelUp();

    }
});



//button flash function
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 250);
}




// for upgrading the level
function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    //choose random button and the flash
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);      // will take to that button

    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlash(randBtn);     // will flash when game pressed
}





//access for user input 
//will flash when user pressed
function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);

    //will give id to all html tag so can get color name by id also we can do this by type attribute but we already used that.
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);        //will only check for this array that it matches the game array or not 



    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click", btnPress);
}



//function for checking the userArray
function checkAns(idx){

    // let idx = level - 1;
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,500);
        }
        console.log("Same Value");
    }else{
        h2.innerHTML = `Game Over ! Your score was <b>${level}</b> <br>Press any key to play again.`;

        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "grey";
        }, 1000);

        reset();
    }
     
}


//function for reset 
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}