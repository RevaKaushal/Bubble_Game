var hitrn=0;
var score=0;
var timerint;
// var initialTimer = 8;



function makeBubble() {
    var clutter = "";
    for (var i = 1; i <= 70; i++) {
        clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
    }
    document.querySelector("#panelbt").innerHTML = clutter;

}
makeBubble();


function runtimer(){
    let timer=6;
    if(timerint) clearInterval(timerint);
    timerint =  setInterval(function () {
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(timerint); //timer finish
            gameOver();
            // document.querySelector("#panelbt").innerHTML=`<h1>Game Over</h1>`;
        }        
    }, 1000);
}

function gameOver(){
    document.querySelector("#panelbt").innerHTML=`
    <h1 style="color:red">GAME OVER</h1>
    <p>Your Score: ${score}</p>
    <p>Reload to Restart</p>
    <p> or press "Enter"`;


}
function getnewhit(){
    hitrn= Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent= hitrn;
}

function setScore(){
    score=0;
    document.querySelector("#score").textContent=score;
}
function incScore(){
    score+=10;
    document.querySelector("#score").textContent=score;
}
function decScore(){
    if(score>0){
        score-=10;
        document.querySelector("#score").textContent=score;
    }
    else {
        clearInterval(timerint);
        gameOver();
    }
    
}

document.querySelector("#panelbt").addEventListener("click", function (dets){ //details- details
    var clickednum= Number(dets.target.textContent); //dets can be anything ,dets.target gives us that one particular div of bubble clicked
    if(clickednum===hitrn){
        incScore();
        newGameRight();
    }
    else{
        decScore();   
    }
    
    
})
document.addEventListener("keydown",function(e){
    if(e.key==="Enter"){
        newGame();
    }
})
function newGameRight(){ //at every right hit in each round want new bubbles and new hit 
    makeBubble();
    getnewhit();

}
function newGame(){ //for new game we need new bubble, new hit, NEW TIMER ,score starting from 0
    makeBubble();
    setScore();
    newGameRight();
    runtimer();
    
}
newGame();