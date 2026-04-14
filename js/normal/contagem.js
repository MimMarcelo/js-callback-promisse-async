botao.onclick = function(){
    mensagem.innerText = "3";

    setTimeout(function(){
        mensagem.innerText = "2";
    }, 1000);
    
    setTimeout(function(){
        mensagem.innerText = "1";
    }, 2000);
    
    setTimeout(function(){
        mensagem.innerText = "Pronto!";
    }, 3000);
}