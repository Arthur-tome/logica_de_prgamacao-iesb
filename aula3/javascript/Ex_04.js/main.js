// Solicita ao usuário que insira um número
let numero = parseFloat(prompt("Digite um número: "));

// Verifica se o número é positivo, negativo ou zero
if (numero > 0) {
    alert(`O número ${numero} é POSITIVO.`);
} else if (numero < 0) {
    alert(`O número ${numero} é NEGATIVO.`);
} else {
    alert(`O número é ZERO.`);
}