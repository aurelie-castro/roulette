var div= document.getElementById("case");
var popup= document.getElementById("popup");


div.addEventListener("click", function(){
    if (popup.style.display !== "block"){
        popup.style.display="block";
    }else{
    popup.style.display=="none";}
})



var div= document.getElementById("form");
var popup_formulaire=document.getElementById("popup_formulaire");

div.addEventListener("click", function(){
    if (popup_formulaire.style.display !== "block"){
        popup_formulaire.style.display="block";
    }else{
    popup_formulaire.style.display="none";}
})

