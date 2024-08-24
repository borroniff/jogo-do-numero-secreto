//1 - Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador1 = 1;
while (contador1 < 11) {
    alert(contador1);
    contador1++;
}

//2 - Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let contador2 = 10;
while (contador2 > -1) {
    alert(contador2);
    contador2--;
}

//3 - Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let numero1 = prompt("Digite um número:");
while (numero1 > -1) {
    console.log(numero1);
    numero1--;
}

//4 - Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let numero2 = prompt("Digite um número:");
let resposta = 0;
while (resposta <= numero2) {
    console.log(resposta);
    resposta++;
}