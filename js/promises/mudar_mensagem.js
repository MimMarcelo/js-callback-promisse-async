botao.onclick = function(){
    mensagem.innerText = "Carregando...";

    p.then((msg) => {
        mensagem.innerText = msg;
    });
}

const p = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Concluído");
    }, 5000);
});

