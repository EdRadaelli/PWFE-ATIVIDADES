function categorizarAtleta(){
    nomeAtleta = document.getElementById("nomeAtleta").value;
    let idade = document.getElementById("idade").value;

    if(isNaN(idade)){
        alert("Digite um número!");
    }else{
        Number(idade);
        document.getElementById("nome").innerHTML = nomeAtleta;
        //console.log(nomeAtleta.length);
        retornarTracos();
        if(idade <= 12){
            document.getElementById("categoria").innerHTML = "Categoria: Infantil";
        }else if(idade >= 13 && idade <= 18){
            document.getElementById("categoria").innerHTML = "Categoria: Juvenil";
        }else{
            document.getElementById("categoria").innerHTML = "Categoria: Adulto";
        }
        limparCampos();
    }
}

function retornarTracos(){
    let resultado = nomeAtleta.replace(/[A-Za-z]/g, "-");
    document.getElementById("traco").innerHTML += resultado;
}

function limparCampos(){
    document.getElementById("nomeAtleta").value = "";
    document.getElementById("idade").value = "";
}
