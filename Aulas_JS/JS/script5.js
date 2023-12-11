
var titulo = document.getElementById("titulo"); //seleciona elemento
var conteudo = titulo.textContent; //seleciona o conteúdo texto do elemento
titulo.textContent = "Alterar";
console.log(conteudo); //imprime "meu cabeçalho"

var x = document.getElementsByTagName("li");
document.getElementById("demo").innerHTML = x[1].innerHTML;
console.log("pegando " + x[1].innerHTML);

var elemento = document.getElementsByClassName("exemplo1");
elemento[0].innerHTML = "testando classe";
console.log("JS " + elemento[0].innerHTML);

var num = document.getElementsByName("cor").length;
document.getElementById("seletor").innerHTML = num;
console.log("JS numero = " + num);

var element = document.getElementById("cabecalho");
element.innerHTML = "novo cabeçalho";
document.getElementById("imagem").src = "IMG/ahsoka.jpg";

document.getElementById("p2").style.color = "blue";

var txt = document.getElementById("intro").childNodes[0].innerHTML;
document.write(txt);

var x = document.getElementById("left");
var txt = "";
for (var i = 0; i < x.childNodes.length; i++){
    txt += "Nodo: " + x.childNodes[i].nodeName + " Valor: " + x.childNodes[i].nodeValue + "<br>";
}
alert(txt);

var para = document.createElement("p");
var node = document.createTextNode("Esse é novo.");
para.appendChild(node);

var element = document.getElementById("left");
element.appendChild(para);

var para = document.createElement("p");
var node = document.createTextNode("Esse é novo.")
para.appendChild(node);

var element = document.getElementById("div1");
var child = document.getElementById("p1");
element.insertBefore(para, child);

alert('Bummmmmmmmmm!');
if(confirm ('Alerta confirmado?')){
    alert('Positivo central');
}else{
    alert('Negativo central');
}

document.write(document.images.length);


function funcao(){
    alert("Hello World!");
}

function bemvindo(nome1, nome2){
    alert("Bemvindo " + nome1 + " e " + nome2);
}

function multiplicacao(a,b){
    return a*b;
}
document.getElementById("resposta").innerHTML = multiplicacao(4,3);

function multiplicacao(a,b){
    opr = "multiplicacao";
    var res = a*b;
    return res;
}