function Parcelamento(){
    let modelo = document.getElementById("modeloVeiculo").value;
    let preco = document.getElementById("Preco").value;
    let entrada = document.getElementById("valorEntrada").value;

    let resto = preco - entrada;
    let parcelas = (resto/10);
    let juros = parcelas + (parcelas * 0.10);

    document.getElementById("comprovante").innerHTML = "Preço do veículo " + modelo + ": R$ " 
    + preco + ";" + "<br>Valor da entrada: R$ " + entrada + ";" + "<br>Resto a ser pago: R$ " + resto 
    + ";" + "<br>Parcelas: 10x de R$ " + juros + " com juros.";
}