//random number genaretor
document.getElementById("randomNumberGenaretor").addEventListener("click",function(){
    var randomNumber  = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("randomNumber").value = randomNumber;
});
//number pad here
document.getElementById("btn7").addEventListener("click",function(){
document.getElementById("screen").value += 7;
});
document.getElementById("btn8").addEventListener("click",function(){
    document.getElementById("screen").value += 8;
});
document.getElementById("btn9").addEventListener("click",function(){
    document.getElementById("screen").value += 9;
});
document.getElementById("btn4").addEventListener("click",function(){
    document.getElementById("screen").value += 4;
});
document.getElementById("btn5").addEventListener("click",function(){
    document.getElementById("screen").value += 5;
});
document.getElementById("btn6").addEventListener("click",function(){
    document.getElementById("screen").value += 6;
});
document.getElementById("btn1").addEventListener("click",function(){
    document.getElementById("screen").value += 1;
});
document.getElementById("btn2").addEventListener("click",function(){
    document.getElementById("screen").value += 2;
});
document.getElementById("btn3").addEventListener("click",function(){
    document.getElementById("screen").value += 3;
});
document.getElementById("btn0").addEventListener("click",function(){
    document.getElementById("screen").value += 0;
});
document.getElementById("back").addEventListener("click",function(){

    var rekensom  = document.getElementById('screen').value;
    document.getElementById('screen').value=rekensom.substring(0,rekensom.length -1);
});
document.getElementById("cleer").addEventListener("click",function(){
    document.getElementById("screen").value = '';
});

//click submit button
document.getElementById("submit-btn").addEventListener("click",function(){

let tamporariNumber = document.getElementById("randomNumber").value;

let screenNumber = document.getElementById("screen").value;

if(tamporariNumber === screenNumber){
document.getElementById("openDoor").style.display = 'block';
document.getElementById("pinNotMatch").style.display = 'none';
document.getElementById("screen").value = '';
}
else{
    document.getElementById("openDoor").style.display = 'none';
    document.getElementById("pinNotMatch").style.display = 'block';
    document.getElementById("screen").value = '';

}

})