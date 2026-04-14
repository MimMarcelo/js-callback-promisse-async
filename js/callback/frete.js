let frete = 0;
let produto = 200;
// Comissão de 10% em cima do valor do produto + frete
function precoFinal(){
    return (produto + frete) * 1.1;
}
botao.onclick = function(){
    mensagem.innerText = "Calculando preço final...";
    // Função anônima para permitir usar "()"
    setTimeout(()=>{
        calcularFrete(faturamento)
    }, 3000);
}
// Usada como callback que usa outra função como callback
function calcularFrete(callback){
    frete = 15;
    mensagem.innerText = "Preço final: R$ " + precoFinal();
    callback();// Chama o nome do argumento seguido de "()"
}
// Usada como callback
function faturamento() {
    console.log("Produto: R$ " + produto);
    console.log("Frete: R$ " + frete);
    console.log("Preço final: R$ " + precoFinal());
}

