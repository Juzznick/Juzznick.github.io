var pr= document.getElementById("present_count");
var ab= document.getElementById("absent_count");
var res= document.getElementById("result");
var lef= document.getElementById("left");

document.getElementById("compute").addEventListener("click", function(){
    res.value=   (parseInt(pr.value)/(parseInt(pr.value)+parseInt(ab.value)) * 100).toFixed(2) + "%" ;
    if(parseInt(res.value)<75 && parseInt(res.value)!=null){

        var toattend= (parseInt(ab.value)*3);
        var left = (parseInt(toattend)-parseInt(pr.value));
        lef.value= left;
        
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