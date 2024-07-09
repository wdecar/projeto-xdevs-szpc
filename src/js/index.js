// Passo 1 - pegar o elemento HTML da seta avançar e voltar
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

// Função para atualizar a seleção dos cartões
function atualizarCartaoSelecionado(novoIndice) {
    // Remover a classe "selecionado" do cartão atual
    cartoes[cartaoAtual].classList.remove("selecionado");
    // Atualizar o índice do cartão atual
    cartaoAtual = novoIndice;
    // Adicionar a classe "selecionado" ao novo cartão atual
    cartoes[cartaoAtual].classList.add("selecionado");
}

// Passo 2 - identificar o clique do usuário na seta avançar
btnAvancar.addEventListener("click", function() {
    // Incrementar o cartão atual, ou voltar ao primeiro cartão se for o último
    let novoIndice = (cartaoAtual + 1) % cartoes.length;
    atualizarCartaoSelecionado(novoIndice);
});

// Passo 3 - identificar o clique do usuário na seta voltar
btnVoltar.addEventListener("click", function() {
    // Decrementar o cartão atual, ou voltar ao último cartão se for o primeiro
    let novoIndice = (cartaoAtual - 1 + cartoes.length) % cartoes.length;
    atualizarCartaoSelecionado(novoIndice);
});

// Inicializar o primeiro cartão como selecionado
cartoes[cartaoAtual].classList.add("selecionado");
