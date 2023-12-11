function Alert(){
    let palavra = prompt("Digite uma palavra:");
    let inversao = palavra.split("");
    let palavrainvertida = inversao.reverse().join("");
    alert("Palavra: " + palavra + "\nPalavra Invertida: " + palavrainvertida);
}
