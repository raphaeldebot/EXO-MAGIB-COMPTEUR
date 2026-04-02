let compteur = 0
document.getElementById("+").addEventListener("click",function(){
    compteur += 1;
    document.getElementById("compteur").innerHTML =`${compteur}`;
})
document.getElementById("-").addEventListener("click",function(){
    compteur -= 1;
    document.getElementById("compteur").innerHTML =`${compteur}`;
})
document.getElementById("reset").addEventListener("click",function(){
    compteur = 0;
    document.getElementById("compteur").innerHTML =`${compteur}`;
})