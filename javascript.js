
var playing = false;
var score;
var action;
var timeremaining;
var z;
document.getElementById("startreset").onclick = function () {
     if (playing == true) {
             location.reload();
     } else {
         playing = true;
         score = 0;
    document.getElementById ("scorevalue").innerHTML = score;
    show("timeremaining"); 
         timeremaining = 60;
         document.getElementById("timeremainingvalue").innerHTML=timeremaining;
       hide("gameover");
    document.getElementById ("startreset").innerHTML = "Reset Game";          
     startcounter();
     generateQA();        
     }
 }


function startcounter(){
    action = setInterval(function(){
       timeremaining -=1;
         document.getElementById("timeremainingvalue").innerHTML=timeremaining;
        if (timeremaining <= 0)
            {
                stopcounter();
                show("gameover");
                document.getElementById("gameover").innerHTML= "<p>game over</p><p>your score is " +score+" .</p>"
            
                hide("timeremaining"); 
                hide("correct"); 
                hide("wrong");
                playing =false;
               
                document.getElementById ("startreset").innerHTML = "Start Game";
                
            }
    },1000);
    
}

for(i=1;i<5;i++)
{
    document.getElementById("box"+i).onclick = function (){
    if(playing==true){
        if(this.innerHTML == z){
            score +=1;
         document.getElementById("scorevalue").innerHTML=score;
            hide("wrong");
            show("correct");
            setInterval(function(){hide("correct")},1000);
            generateQA();
           } else{
              hide("correct");
            show("wrong");
            setInterval(function(){hide("wrong")},1000);
           }
       
       }
}

}
           
function generateQA(){
    
    var x=1+Math.round(9*Math.random());
    var y=1+Math.round(9*Math.random());
     z=x*y;
   document.getElementById("que").innerHTML = x+"x"+y;
    var cp= 1+Math.round(3*Math.random());
document.getElementById("box"+cp).innerHTML = z;
    
    for(i=1;i<5;i++){
        if(i!=cp)
            {
              var w;
               do{
                    w=(1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
                document.getElementById("box"+i).innerHTML= w;
               }while(w==z);
                
            }
    }
}

function stopcounter(){
    clearInterval(action);
}
function hide(id){
    document.getElementById(id).style.display = "none";
}
function show(id){
    document.getElementById(id).style.display = "block";
}