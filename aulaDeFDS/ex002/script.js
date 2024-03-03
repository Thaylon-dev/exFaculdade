const campo1 = document.querySelector('#campo1');
const campo2 = document.querySelector('#campo2');
const opcoes = document.querySelector('#opcoes')
const botao = document.querySelector('#botao')

let resposta = document.querySelector('#resposta')

botao.addEventListener('click' , calculo)

function calculo(){
    const valor1 = parseInt(campo1.value);
    const valor2 = parseInt(campo2.value);
    
    const operacao = opcoes.value;
    
    if(operacao === "adicao")
        resposta.innerHTML= valor1 + valor2 ;
    if(operacao === "subtracao")
        resposta.innerHTML= valor1 - valor2 ;
    if(operacao === "multiplicao")
        resposta.innerHTML= valor1 * valor2 ;
    if(operacao === "divisao")
        resposta.innerHTML= valor1 / valor2 ;
}