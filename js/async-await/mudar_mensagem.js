botao.onclick = async function(){
    mensagem.innerText = "Carregando...";

    let msg = await finalizar();
    mensagem.innerText = msg;
}

function finalizar(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Concluído");
        }, 5000);
    });
}