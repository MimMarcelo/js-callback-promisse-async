let frete = 0;
let produto = 200;
// Comissão de 10% em cima do valor do produto + frete
function precoFinal(){
    return (produto + frete) * 1.1;
}
botao.onclick = function(){
    mensagem.innerText = "Calculando preço final...";

    calcularFrete().then((novo_valor) => {
        frete = novo_valor;
        mensagem.innerText = "Preço final: R$ " + precoFinal();
        faturamento();
    })
    .catch((mensagem_erro) => {
        mensagem.innerText = mensagem_erro;
    });
}
function calcularFrete() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let novo_frete = "15";
            if(typeof novo_frete == "number")
                resolve(novo_frete);
            else
                reject("Erro ao receber os dados");
        }, 3000);
    });
}
function faturamento() {
    console.log("Produto: R$ " + produto);
    console.log("Frete: R$ " + frete);
    console.log("Preço final: R$ " + precoFinal());
}

