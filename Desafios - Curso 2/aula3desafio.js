//1 - Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function imc(altura, peso) {
    let resultado = peso / (altura * altura);
    return resultado;
}

//2 - Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function fatorial(nro) {
    let resultado = 1
    for (let contador = 1; contador <= nro; contador++) {
        resultado *= contador; //resultado = resultado * contador
    }
    return resultado;
}

//3 - Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function conversao(dolar) {
    let reais = dolar * 4.8;
    return reais;
}

//4 - Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function medidas(altura, largura) {
    let perimetro = ( altura * 2 ) + ( largura * 2 );
    let area = altura * largura;
    console.log(`A área é de ${area} e o perímetro é de ${perimetro}`);
}

//5 - Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function circulo(raio) {
    let area2 = 3.14 * ( raio * raio);
    let perimetro2 = 2 * 3.14 * raio;
    console.log(`A área é de ${area2} e o perímetro é de ${perimetro2}`);
}

//6 - Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(numero) {
    let tabuada = []
    for ( let vezes = 1; vezes < 11; vezes++ ) {
        tabuada.push(numero*vezes)
    }
    return tabuada
}