document.getElementById("btMostrar").addEventListener("click", function(){
    let inMedicamento = document.getElementById("inMedicamento").value;
    let inPreco = document.getElementById("inPreco").value;
    if(isNaN(inPreco)){
        alert("Digite um número em Preço!");
        return;
    }
    let promocao = (inPreco * 2) - (inPreco * (2 * 0.10));
    document.getElementById("outMedicamento").textContent = "Promoção de " + inMedicamento;
    document.getElementById("outPromocao").textContent = "Leve 2 por apenas " + promocao.toFixed(0);
});
