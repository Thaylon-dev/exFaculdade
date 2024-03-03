//Estou apenas seguindo os passos do professor , sei que posso fazer tudo isso ultilizando CSS3

let botao = document.querySelector('#botao')

let estaQuebrado = false ;

botao.style.background= "blue" ;

botao.addEventListener('mouseover' , e =>{
    if(estaQuebrado=== false)
    botao.style.background= "green" ;
})
botao.addEventListener('mouseout' , e =>{
    if(estaQuebrado=== false)
    botao.style.background= "blue" ;
})
botao.addEventListener('click' , e =>{
    botao.style.background= "red" ;
    botao.innerHTML="Quebrei :("
    estaQuebrado = true ; 
})