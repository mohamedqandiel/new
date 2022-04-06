let stars=document.getElementById("stars1")
let moon=document.getElementById("moon2")
let labieb=document.querySelector(".labieb")
let mountains3=document.getElementById("mountains3")
let mountains4=document.getElementById("mountains4")
let river5=document.getElementById("river5")
let boat6=document.getElementById("boat6")
let mountains7=document.getElementById("mountains7")
console.log(labieb)
window.onscroll = function(){
    let value=scrollY;
    stars.style.left=value + "px";
    moon.style.top=value *3 + "px";
    labieb.style.fontSize=value +"px"; 
    mountains3.style.top=value*2+"px"; 
    mountains4.style.top=value *1.5+"px";
    river5.style.top=value +"px";
    boat6.style.top=value +"px";
    boat6.style.left=value*3 +"px";
    if(value >=100){
        moon.style.display="none"
        if(value >=100){
            labieb.style.fontSize=100 + "px"
            labieb.style.position="fixed";
        }
    }else{
        moon.style.display="block"

    }
    if(scrollY >=112){
        document.querySelector(".main").style.background="linear-gradient(#376281,#10001f)";
    }else{
        document.querySelector(".main").style.background="linear-gradient(#200016,#10001f)";

    }
    

}