botao.onclick = function(){
    mensagem.innerText = "3";
    // Callback hell
    setTimeout(()=>{
        mostrar2(()=>{
            mostrar1(pronto);
        });
    }, 1000);
}
function mostrar2(cb){
    mensagem.innerText = "2";
    setTimeout(cb, 1000);
}
function mostrar1(cb){
    mensagem.innerText = "1";
    setTimeout(cb, 1000);
}
function pronto(){
    mensagem.innerText = "Pronto!";
}

