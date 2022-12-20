
const rCount = document.querySelector("#rCount");
const cCount = document.querySelector("#cCount");
const wCount = document.querySelector("#wCount");
const fact1 = document.querySelector("#fact1");
const fact2 = document.querySelector("#fact2");
const fact3 = document.querySelector("#fact3");
const fact4 = document.querySelector("#fact4");
const fact5 = document.querySelector("#fact5");
const fact6 = document.querySelector("#a10mag");
const shots = document.getElementById("firing");
const spool = document.getElementById("spool");
const cooldown = document.getElementById("end");
const brtheader = document.querySelector(".headerBrt");
const headerMv = document.querySelector(".BRRRRRRT")

let elapsedTime = 0;
let startTime = 0;
let intervalId;
let rounds = 0;
let cost = 0;
let costS;
let oz = 0;
let lb = 0;
let refreshIntervalId;
let waited = false;
let magsused = 0;
let timemag = 18.09;


class clickAndHold { /*class from this tutorial: https://www.youtube.com/watch?v=A95mIE2HdcY */
    constructor(target, callback) {
        this.target = target;
        this.callback = callback;
        this.isHeld = false;
        this.activeHoldTimeoutID = null;

        ["mousedown", "touchstart"].forEach(type => {
            this.target.addEventListener(type, this.onHold.bind(this));
        });
        ["mouseup", "mouseleave", "mouseout", "touchend", "touchcancel"].forEach(type => {
            this.target.addEventListener(type, this.onHoldEnd.bind(this));
        });
    }

    onHold(){
        brtheader.classList.toggle("BRRRRRRT");
        this.isHeld = true;
        spool.play();
        this.activeHoldTimeoutID = setTimeout(() => {
            if(this.isHeld){
                refreshIntervalId = setInterval(this.callback, 1);
                waited = true;
                shots.play();
            }
        }, 700);
        
    }
    onHoldEnd (){
        brtheader.classList.toggle("BRRRRRRT");
        this.isHeld = false;
        shots.pause();
        shots.currentTime = 0;
        if(waited){
            cooldown.play();
            waited = false;
        }
        clearTimeout(this.activeHoldTimeoutID);
        clearInterval(refreshIntervalId);
    }
}

const brrrrt = document.getElementById('brrrrt')

function fire(){
        elapsedTime++;
        rounds = Math.floor(elapsedTime*0.26);
        cost = (Math.round(rounds*136.7*100))/100.0
        costS = "$" + cost.toLocaleString()
        oz = oz + 14;
        if(costS.includes(".")){
            costS = costS + "0";
        }
        if(oz>=16){
            oz = oz -16;
            lb++;
        }
        rCount.textContent = `${rounds}`;
        cCount.textContent = `${costS}`;
        wCount.textContent = `${lb} lb ${oz} oz`;
        if(cost==11756.2){
            fact1.textContent = `$11,700 / 86 rounds / ~1.32 seconds - Average cost of overnight hospitalization in the US`;
        }
        if(cost==47024.8){
            fact2.textContent = `$47,000 / 344 rounds / ~5.29 seconds - Average cost of a new car`;
        }
        if(cost==74091.4){
            fact3.textContent = `$74,000 / 542 rounds / ~8.33 seconds - Cost of NYU tuition`;
        }
        if(cost==69717){
            fact4.textContent = `$69,717 / 510 rounds / ~7.85 seconds - Average US salary`;
        }
        if(cost==96373.5){
            fact5.textContent = `$96,371 / 705 rounds / ~10.85 seconds - Average American debt`;
        }
        if(rounds%1176==0 && rounds!= 0){
            magsused++;
            fact6.textContent = `${costS} / ${rounds} rounds / ~${(Math.round((timemag*magsused/3)*100))/100.0} seconds - ${magsused/3} magazines fired!`;
        }
}

new clickAndHold(brrrrt, fire);