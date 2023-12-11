function nomeMedicamento(remedio){
    nome = remedio;
}
function precoMedicamento(valor){
    preco = valor;
    primeiropreco = (preco * 2);
    valorinteiro = (Math.trunc(primeiropreco));
    valordecimal = primeiropreco - valorinteiro;
    valortotal = primeiropreco - valordecimal;
}

function mostrarPromocao(){
    document.getElementById("remedio").innerHTML = ("<b>Promoção de</b> " + nome);
    document.getElementById("preco").innerHTML = ("<b>Leve 2 por apenas R$: </b> " + valortotal);
}