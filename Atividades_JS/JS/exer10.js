function Mostrar(){
    let numero = document.getElementById("numero").value; //numero recebe o que foi digitado no input

    if(isNaN(numero)){ //se numero não for um número vai exibir um alert
        alert("Digite um número!");
    }else{
        Number(numero); //objeto encapsulado que permite trabalhar com valores numéricos
        document.getElementById("texto").innerHTML = ""; //limpa o for da página HTML
        for(i = 0; i < 11; i++){
            let novo = document.createElement("p");
            let node = document.createTextNode(numero + " x " + i + " = " + (numero * i));
            novo.appendChild(node);
            let elemento = document.getElementById("texto");
            elemento.appendChild(novo);
            console.log(numero + " x " + i + " = " + (numero * i));
        }
        limparCampo();
    }
}

function limparCampo(){
    document.getElementById("numero").value = ""; //limpa o input
}

/*
let um = numero * 1;
let dois = numero * 2;
let tres = numero * 3;
let quatro = numero * 4;
let cinco = numero * 5;
let seis = numero * 6;
let sete = numero * 7;
let oito =  numero * 8;
let nove = numero * 9;
let dez = numero * 10;

document.getElementById("texto").innerHTML = numero + " x 1 = " + um + "<br>" + numero + " x 2 = " + dois + "<br>" 
+ numero + " x 3 = " + tres + "<br>" + numero + " x 4 = " + quatro + "<br>" + numero + " x 5 = " + cinco + "<br>"
+ numero + " x 6 = " + seis + "<br>" + numero + " x 7 = " + sete + "<br>" + numero + " x 8 = " + oito + "<br>"
+ numero + " x 9 = " + nove + "<br>" + numero + " x 10 = " + dez + "<br>";
*/