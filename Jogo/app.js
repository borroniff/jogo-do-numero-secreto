//let titulo = document.querySelector("h1"); // "document" - Pegar no documento
//titulo.innerHTML = "Jogo do número secreto"; // "innerHTML" - Que está dentro do HTML

//let paragrafo = document.querySelector("p"); // "querySelector" - A parte do documento que deseja
//paragrafo.innerHTML = "Escolha um número entre 1 e 10"

let numerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1;

function textoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
}

function mensagemInicial() {
    textoNaTela("h1", "Jogo do número secreto");
    textoNaTela("p", "Escolha um número entre 1 e 10");
}

mensagemInicial()

function verificarChute() {
    let chute = document.querySelector("input").value;
    if(chute==numeroSecreto) {
        textoNaTela("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}.`;
        textoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else if(chute>numeroSecreto) {
        textoNaTela("p", "O número secreto é menor");
        
    } else {
        textoNaTela("p", "O número secreto é maior");
    }
    tentativas++;
    limparCampo()
}

function gerarNumeroSecreto() {
    let numeroEscolhido = parseInt(Math.random()*numeroLimite+1);
    let quantidadeDeNumerosSorteados = numerosSorteados.length
    if (quantidadeDeNumerosSorteados == numeroLimite) {
        numerosSorteados = []
    }

    if (numerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroSecreto()
    } else {
        numerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroSecreto();
    limparCampo()
    tentativas = 1;
    mensagemInicial()
    document.getElementById("reiniciar").setAttribute("disabled", true);
}