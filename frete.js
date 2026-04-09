let preco = 0;
let produto = 386.97;

botao.onclick = function(){
    mensagem.innerText = "Consultando o servidor...";

    setTimeout(function(){
        preco = 15;
        mensagem.innerText = "Preço final: R$ " + (produto + preco) * 1.1;
    }, 3000);

    console.log("Produto: R$ " + produto);
    console.log("Frete: R$ " + preco);
    // Comissão de 10% em cima do valor do produto + frete
    console.log("Preço final: R$ " + (produto + preco) * 1.1);
}
    