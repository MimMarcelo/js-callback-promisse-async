let frete = 0;
let produto = 200;

// Comissão de 10% em cima do valor do produto + frete
function precoFinal(){
    return (produto + frete) * 1.1;
}

botao.onclick = function(){
    mensagem.innerText = "Calculando preço final...";

    setTimeout(function(){
        frete = 15;
        mensagem.innerText = "Preço final: R$ " + precoFinal();
    }, 3000);

    console.log("Produto: R$ " + produto);
    console.log("Frete: R$ " + frete);
    console.log("Preço final: R$ " + precoFinal());
}
    