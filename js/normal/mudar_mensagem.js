botao.onclick = function(){
    mensagem.innerText = "Carregando...";

    setTimeout(function(){
        mensagem.innerText = "Concluido!";
    }, 2000);
}

