var pr= document.getElementById("present_count");
var ab= document.getElementById("absent_count");
var res= document.getElementById("result");
var lef= document.getElementById("left");
const Div = document.getElementById("div_left");
Div.style.display="none";

document.getElementById("compute").addEventListener("click", function(){
    res.value=   (parseInt(pr.value)/(parseInt(pr.value)+parseInt(ab.value)) * 100).toFixed(2) + "%" ;
    lef.value=null;
    if(parseInt(res.value)<75 && parseInt(res.value)!=null){
        var toattend= (parseInt(ab.value)*3);
        var left = (parseInt(toattend)-parseInt(pr.value));
        lef.value= left;
        
    }
    if(left != null){
        Div.style.display = "block";
    }
    else{
        Div.style.display = "none";
    }

    
});



document.getElementById("clear").addEventListener("click", function(){
    res.value=   null;
    pr.value=null;
    ab.value=null;
    lef.value=null;
});








document.getElementById("toggle").addEventListener("click", function(){
    var element = document.body;
    element.classList.toggle("dark-mode");
    
});