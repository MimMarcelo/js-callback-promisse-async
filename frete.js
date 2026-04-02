let preco = 0;
botao.onclick = function(){
    mensagem.innerText = "Consultando o servidor...";

    setTimeout(function(){
        preco = 15;
        mensagem.innerText = "Frete: R$ " + preco;
    }, 3000);

    console.log("Frete: R$ " + preco);
}
    