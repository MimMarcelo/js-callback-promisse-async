botao.onclick = async function () {
    mensagem.innerText = "3";

    try {
        let numero = 2;
        mensagem.innerText = await mostrar(numero--);
        mensagem.innerText = await mostrar(numero--);
        mensagem.innerText = await mostrar(numero--);
    }
    catch (msg_final) {
        mensagem.innerText = msg_final;
    };
}

function mostrar(numero) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (numero > 0) {
                resolve(numero);
            }
            else {
                reject("Pronto!");
            }
        }, 1000);
    })
}

