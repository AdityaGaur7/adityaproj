function display(){
    var time= new Date();
    var hr=time.getHours();
    var min=time.getMinutes();
    var sec=time.getSeconds();


    document.getElementById('hour').innerHTML=hr;
    document.getElementById('minute').innerHTML=min;
    document.getElementById('second').innerHTML=sec;
}

setInterval(display,1000);



function color1(){
    document.getElementById("content").style.backgroundColor="#ff7979";
  
}
function color2(){
    document.getElementById("content").style.backgroundColor="#2e86de";
}
function color3(){
    document.getElementById("content").style.backgroundColor="black";
}