botao.onclick = function(){
    mensagem.innerText = "Carregando...";

    finalizar().then((msg) => {
        mensagem.innerText = msg;
    });
}

function finalizar(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Concluído");
        }, 5000);
    });
}