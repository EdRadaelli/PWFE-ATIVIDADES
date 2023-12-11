function Saque(){
    let valorSaque = document.getElementById("valorSaque").value;
    if(isNaN(valorSaque)){
        alert("Digite um número!");
        return;
    }
    let notascem = (Math.trunc(valorSaque/100));
    let notascinquenta = (Math.trunc((valorSaque%100)/50));
    let notasdez = (Math.trunc((valorSaque%50)/10));

    document.getElementById("saque").innerHTML = "<b>Notas de R$ 100: " + notascem + "<br>Notas de R$ 50: " + notascinquenta + "<br>Notas de R$ 10: " + notasdez;
}