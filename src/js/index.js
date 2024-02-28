/* 
--> Primeiro precisamos linkar esse documento com o index.html pra funfa.



Objetivo 1 - quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma

    Passo 1 - pegar o botão de "selecione a plataforma" no JS pra poder verificar quando o usuário clicar em cima dele

    Passo 2 - pegar o elemento do conteudo que precisa ser mostrado (as plataformas que aparecem lá coloridinhas)

    Passo 3 - pegar o clique do usuario no js (quando o usuário clicar, fazer acontecer alguma coisa)

    Passo 4 - quando o usuário clicar, adicionar a classe ativo na listagem de plataformas dentro do botão pra que o conteúdo apareça (quando a pessoa clicar, vai fazer o conteúdo aparecer)

Objetivo 2 - caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar em cima do botão, o conteúdo deve ser escondido

    Passo 1 - verificar se o botão já esta aberto, se sim, devemos remover a classe ativo pra que ele esconda o conteúdo novamente

*/

const botao = document.querySelector(".botao-plataforma");
const elementoPlataformas = document.querySelector(".botao-plataforma .plataformas")

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});