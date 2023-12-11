function verificarSenha(){
    try{
        let senha = document.getElementById("Senha").value;
        if(senha == "") throw "Digite um número!";
        if(senha.match(/[^0-9]/g)) throw "Erro nos números";
        if(senha.match(/[^a-z]/g)) throw "Erro nas letras minúsculas";
        if(senha.match(/[^A-Z]/g)) throw "Erro nas letras maiúsculas";
    }catch(err){
        document.getElementById("texto").innerHTML = err;
    }
}
/*
{
    document.getElementById("texto").innerHTML = "Erro... A senha deve possuir entre 8 e 15 caracteres, possuir: números (no mínimo 1), letras minúsculas (no mínimo 1), letras maiúsculas (no mínimo 2) e símbolos especiais (no mínimo 1).";
}
*/

//let senha = document.getElementById("Senha").value;
    /*if(senha != ""){
        if(senha >= 8 || senha <= 15){
        }else if(senha.match(/[0-9]/g)){
            document.getElementById("texto").innerHTML = "Erro nos números!";
        }else if(senha.match(/[a-z]/g)){
            document.getElementById("texto").innerHTML = "Erro nas letras minúsculas!";
        }else if(senha.match(/[A-Z]/g)){
            document.getElementById("texto").innerHTML = "Erro nas letras maiúsculas!";
        }
    }else{
        alert("Digite uma senha!");
    }*/