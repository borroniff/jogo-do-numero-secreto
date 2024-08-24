//1 - Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let resposta = prompt("Que dia da semana é hoje?");
if (resposta=="Sábado") {
    alert("Bom fim de semana!");
} else if (resposta=="Domingo") {
    alert("Bom fim de semana!");
    } else {
    alert("Boa semana!");
}

//2 - Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numero = prompt("Digite o número:");
if (numero>0) {
    alert("Este número é positivo");
} else {
    alert("Este número é negativo");
}

//3 - Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!" no console do navegador. Caso contrário, mostre "Tente novamente para ganhar.".
pontuacao = 105;
if (pontuacao >= 100) {
    console.log("Parabéns, você venceu!");
} else {
    console.log("Tente novamente para ganhar.");
}

//4 - Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldo = 25;
alert(`Seu saldo é de ${saldo} reais`);

//5 - Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nome = prompt ("Digite seu nome:");
alert(`Bem vindo(a), ${nome}`);