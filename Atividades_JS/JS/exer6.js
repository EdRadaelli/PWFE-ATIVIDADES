function Gerar(){
    let nomeCompleto = document.getElementById("nomeAutor").value;
    let primeironome = nomeCompleto.split(" ")[0];
    let segundonome = nomeCompleto.split(" ")[1];
    let sobrenome = nomeCompleto.split(" ")[2];
    document.getElementById("escrever").innerHTML = "<b>Citação Bibliográfica: " + sobrenome.toUpperCase() +
    ", " + primeironome[0].toUpperCase() + ". " + segundonome[0].toUpperCase() + ".";
}

//toUpperCase retorna o que foi escrito no input em letra maiúscula