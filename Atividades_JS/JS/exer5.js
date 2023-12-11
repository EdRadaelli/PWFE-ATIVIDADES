function Parouimpar(){ //nome da função Parouimpar
    let input = document.getElementById("Numero").value; 
    //let input é uma variável que recebe o que foi escrito no input
    if(isNaN(input)){
        alert("Digite um número!"); //caso digite uma letra vai mostrar o aviso
        return;
    }else if((input%2) == 0){ //se o resto da divisão do valor por 2 for igual a zero então é par
        document.getElementById("valor").innerHTML = "<b>Resposta: " + input + " é par";
    }else{ //senão é igual a ímpar
        document.getElementById("valor").innerHTML = "<b>Resposta: " + input + " é ímpar";
    }
}