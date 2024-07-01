var gamepattern=[];
var userclickedpatterns=[];
var buttoncolours=["red","blue","green","yellow"];
var level =0;
function nextsequence() {
var n =Math.random();
var randomnumber =Math.floor(n*4);
var randomchosencolor =buttoncolours[randomnumber];
gamepattern.push(randomchosencolor);
var withid = '#'+randomchosencolor;
$(withid).fadeIn(100).fadeOut(100).fadeIn(100);
var audio = new Audio ("sounds/"+randomchosencolor+".mp3");
audio.play();
level++;
$("#level-title").text("Level " + level);
userclickedpatterns=[];
};
$(".btn").click(function(event){
    var userchosencolor= $(event.target).attr("id");;
    userclickedpatterns.push(userchosencolor);
    playsound(userchosencolor);
    animatepress(userchosencolor);
    var userclickedlength = userclickedpatterns.length-1;
    checkanswer(userclickedlength);
    
    
});
function playsound(name){
var withid = '#'+name;
$(withid).fadeIn(100).fadeOut(100).fadeIn(100);
var audio = new Audio ("sounds/"+name+".mp3");
audio.play();
};
function animatepress(currentcolor){
    var activebutton =document.querySelector("."+currentcolor);
    activebutton.classList.add("pressed");
    setTimeout(function () {
        activebutton.classList.remove("pressed");
    },100);
};
$(document).keypress(function(event){
    if(event.key=='a'){
        $("h1").text("Level "+level);
        nextsequence();
        
        
    }
});
function checkanswer(currentlevel){
    if(userclickedpatterns[currentlevel]==gamepattern[currentlevel]){
        
        if(userclickedpatterns.length==gamepattern.length){
        setTimeout(function(){
            nextsequence();
        },1000);
        console.log("success");
        console.log(userclickedpatterns);
        console.log(gamepattern);
    }}
    else{
       console.log("wrong"); 
       var wrong = new Audio ("sounds/wrong.mp3");
       wrong.play();
       $("h1").text("Game Over, Refresh to restart");
       $("body").addClass("game-over");
       setTimeout(function(){
        $("body").removeClass("game-over");
       },200);
       startover();
    }
};
function startover(){
    var gamepattern=[];
var userclickedpatterns=[];
var level =0;
};