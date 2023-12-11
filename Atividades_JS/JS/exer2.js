function adicionarContato(){
    var nome = prompt("Digite seu nome:");
    var email = prompt("Digite seu email:");
    if(nome && email != null){
        var nomes = []; //criando lista de nomes
        nomes[nomes.length] = nome; //adiciona o nome na lista

        var emails = []; //criando lista de emails
        emails[emails.length] = email; //adiciona o email na lista
    }else{
        alert("Você não digitou nenhum Nome ou Email!")
    }
    var novo = document.createElement("p");
    var node = document.createTextNode(" • Nome: " + nomes + ", Email: " + emails);
    novo.appendChild(node);
    var elemento = document.getElementById("texto");
    elemento.appendChild(novo);
}