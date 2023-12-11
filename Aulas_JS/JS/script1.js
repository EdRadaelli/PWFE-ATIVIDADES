
//Arrays
    //criando listas
var pessoas = ["Maria", "José", "Carlos", "Ana"]; //lista de pessoas
var objetos = ["Colher", "Garfo"]; //lista de objetos
var frutas = ["Uva", "Maça", "Abacaxi"];

    //utilizando as listas
pessoas[0]; //mostra o nome que está na posição 0 da lista (Maria)
pessoas.length; //mostra quantas pessoas tem na lista (4)
objetos[objetos.length] = "Faca"; //adiciona o objeto Faca na lista
frutas.indexOf("Uva"); //mostra a posição em que a fruta Uva está na lista (0)

    //escrevendo as informações das listas
document.write("Lista de pessoas: " + "<br>" + pessoas[0] + "<br>" + pessoas.length);
document.write("<br><br>Lista de objetos: " + "<br>" + objetos[2]);
document.write("<br><br>Lista de frutas: " + "<br>" + frutas.indexOf("Uva"));

//Atvidade
    //lista de animais
var animais = ["Elefante", "Galinha", "Tatu", "Macaco", "Zebra", "Cachorro", "Morcego"];
document.write("Tamanho da lista: " + animais.length);
document.write("<br>Lista de animais antes de incrementar: " + animais);
animais[animais.length] = "Baleia";
animais[animais.length] = "Papagaio";
document.write("<br>Posição do elemento Zebra: ");
document.write(animais.indexOf("Zebra"));
document.write("<br>Lista depois de incrementar: " + animais);

/*
//Datas
var d = new Date("October 13, 2014 11:13:00");
document.getElementById("D1").innerHTML = d;

d = new Date(0);
document.getElementById("D2").innerHTML = d;

var d = new Date(99,5,24,11,33,30,0);
document.getElementById("D3").innerHTML = d;
    //o mês vai de 0 (janeiro) a 11 (dezembro)

var d = new Date(2014,7,20); //20 de agosto de 2014
document.getElementById("D4").innerHTML = d;
console.log(d);

d = new Date(2007,2,18);
document.getElementById("D5").innerHTML = d;

d.toUTCString(); //"Fri, 03 Mar 2023 02:11:00 GMT"
d.toDataString(); //"Thu 02 2023"
d.toLocaleDateString(); //"02/03/2023"
d.toLocaleTimeString(); //"23:11:00"

d = new Date();
document.write("<br>" + d.toUTCString());
document.write("<br>" + d.toDateString());
document.write("<br>" + d.toLocaleDateString());
document.write("<br>" + d.toLocaleTimeString('pt-PT', {hour12: false}));

    //exemplo
var hoje, prazo;
hoje = new Date();
prazo = new Date();

prazo.setFullYear(2023,8,11);
var dia = ["Domingo","Segunda", "Terça", "Quarta", "Quinta","Sexta", "Sábado"];

document.write("<p>Hoje é: " + dia[hoje.getDay()] + ", " + hoje.getDate() + "/" + (hoje.getMonth()) + "/" + hoje.getFullYear() + "<p>");

document.write("<p>O prazo é: " + dia[prazo.getDay()] + ", " + prazo.getDate() + "/" + (prazo.getMonth() + 1) + "/" + prazo.getFullYear() + "<p>");
*/

//Throw
try{
    var x;

    if(x == "") throw "vazio";
    if(isNaN(x)) throw "não é um número";
    if(x == 10) throw x;
    console.log(x);
    document.write(x);
}catch(err){
    console.log("Input is " + err);
    document.write("Input is " + err);
}
/*
try{
    adddlert("ERRO!!!"); //adddlert não existe
}
catch(err){
    document.write = err.message;
}
*/
var dividendo = 0;
var divisor = 0;

try{
    if(divisor == 0){
        throw new
        Error("Erro: Divisão por zero não é permitida");
    }
    var resultado = dividendo/divisor;
    console.log("Resultado: ", resultado);
}catch(err){
    console.log(err.message);
}
/*
try{
    if(!confirm ("Confirma?")) throw "teste";
}
catch(err){
    document.write(err);
}
*/

function myFunction(){
    var message, x;
    message = document.getElementById("message");
    message.innerHTML = "";
    x = document.getElementById("demo").value;
    try{
        if(x == "") throw "empty";
        if(isNaN(x)) throw "not a number";
        x = Number(x);
        if(x < 5) throw "too low";
        if(x > 10) throw "too high";
    }
    catch(err){
        message.innerHTML = "Input is " + err;
    }
}

try{
    adddlert("ERRO!!!");
}catch(err){
    document.write("<br> " + err.message);
}finally{
    document.write("<br>Será mostrado mesmo com o Erro");
}