botao.onclick = function(){
    mensagem.innerText = "3";

    mostrar(2)
    .then((msg)=>{ // Imprime 2
        mensagem.innerText = msg;
        return mostrar(msg-1);
    })
    .then((msg)=>{ // Imprime 1
        mensagem.innerText = msg;
        return mostrar(msg-1);
    })
    .then((msg)=>{ // Vai ser rejeitado
        mensagem.innerText = msg;
        return mostrar(msg-1);
    })
    .catch((msg_final) =>{
        mensagem.innerText = msg_final;
    });
}

function mostrar(numero) {
    return new Promise((resolve, reject) => {
        if(numero >= 0){
            setTimeout(() => {
                resolve(numero);
            }, 1000);
        }
        else{
            reject("Pronto!");
        }
    })
}

