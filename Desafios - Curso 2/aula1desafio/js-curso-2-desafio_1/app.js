//2
let titulo1 = document.querySelector("h1");
titulo1.innerHTML = "Hora do desafio";

//3
function consoleClicado() {
    console.log("O botão foi clicado");
}

//4
function alertClicado() {
    alert("Eu amo JS");
}

//5
function promptClicado() {
    let cidade = prompt("Cite o nome de uma cidade do Brasil:");
    alert(`Estive em ${cidade} e lembrei de você`);
}

//6
function somaClicado() {
    let numero1 = parseInt(prompt("Digite um número:"))
    let numero2 = parseInt(prompt("Digite outro número:"))
    alert(`A soma dos dois números é igual a ${numero1 + numero2}`)
}