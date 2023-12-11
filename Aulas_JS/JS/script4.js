/*
//setTimeout
function myFunction(){
    alert('Olá');
}
*/
/*
var myVar = setInterval(myTimer, 1000);
function myTimer(){
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
    
    var t = new Date();
    document.getElementById("data").innerHTML = t.getDay() + "/" + t.getMonth() + "/" + t.getFullYear();
}
*/
/*
function mostrarHora(){
    let t = new Date();
    document.body.innerHTML = "Hora: " + t.getHours() + "<br>Minutos: " + 
    t.getMinutes() + "<br>Segundos: " + t.getSeconds() + t.toLocaleTimeString();
}
mostrarHora();

function Hora(){
    const tempo = new Date();
    const hora = tempo.getHours();
    const minutos = tempo.getMinutes();
    const segundos = tempo.getSeconds();
    console.log(`Hora ${hora} : ${minutos} : ${segundos}`);
    document.body.innerHTML = `Hora ${hora} : ${minutos} : ${segundos}`;
    setInterval(Hora, 1000);
}
Hora();
*/

function myFunction(){
    document.body.style.backgroundImage = "url(IMG/background.jpg)";
}