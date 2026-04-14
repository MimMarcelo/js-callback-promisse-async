botao.onclick = function(){
    mensagem.innerText = "Carregando...";

    setTimeout(finalizar, 2000);
}
// Usada como callback
function finalizar(){
    mensagem.innerText = "Concluido!";
}

