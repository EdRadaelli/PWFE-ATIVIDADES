function Exibir(){
    let preco = document.getElementById("preco").value; //preco recebe o que foi digitado no input

    if(isNaN(preco)){ //se preco não for um número vai exibir um alert
        alert("Digite um número!");
    }else{
        Number(preco); //objeto encapsulado que permite trabalhar com valores numéricos
        document.getElementById("texto").innerHTML = ""; //limpa o for da página HTML
        document.getElementById("texto").textContent = "Opções de Pagamento";
        for(i = 1; i < 11; i++){
            let novo = document.createElement("p");
            let node = document.createTextNode(i + "x  de R$: " + (preco/i).toFixed(2)); //toFixed deixa somente duas casas depois da vírgula
            novo.appendChild(node);
            let elemento = document.getElementById("texto");
            elemento.appendChild(novo);
            console.log(i + "x  de R$: " + (preco/i).toFixed(2));
        }
        limparCampo();
    }
}

function limparCampo(){
    document.getElementById("preco").value = ""; //limpa o input
}