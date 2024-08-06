let display=document.querySelector("h1");
let [hours,minuts,seconds]=[0,0,0];
let timer=null;
let istimerun=false;
let btn=document.querySelector(".start");

function stopwatch(){
    seconds++;
    if(seconds==60)
    {
            minuts++;
            seconds=0;
            if(minuts==60)
            {
                hours++;
                minuts=0;            
            }
        }

        let h = hours < 10 ? '0' + hours : hours;
        let m = minuts < 10 ? '0' + minuts : minuts;
        let s = seconds < 10 ? '0' + seconds : seconds;

        display.innerHTML= h + ":" + m + ":" + s;
        // btn.disabled=true;
}

function start()
{
    if (!istimerun)
    {
        timer=setInterval(stopwatch,1000)
        istimerun=true;
    }
}
function stop(){
    clearInterval(timer)
    istimerun=false;
}
function reset()
    {
        [hours,minuts,seconds]=[0,0,0];
        display.innerHTML="00:00:00" ;
        clearInterval(timer)
        istimerun=false;
        start();
    }