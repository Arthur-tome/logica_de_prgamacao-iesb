// Solicita ao usuário que insira um número
let numero = parseInt(prompt("Digite um número: "));

// Verifica se o número é par ou ímpar
if (numero % 2 === 0) {
    alert(`O número ${numero} é PAR.`);
} else {
    alert(`O número ${numero} é ÍMPAR.`);
}