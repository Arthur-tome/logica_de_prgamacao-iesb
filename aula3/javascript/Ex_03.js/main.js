// Solicita ao usuário que insira três números
let num1 = parseFloat(prompt("Digite o primeiro número: "));
let num2 = parseFloat(prompt("Digite o segundo número: "));
let num3 = parseFloat(prompt("Digite o terceiro número: "));

// Determina o maior número
let maior = Math.max(num1, num2, num3);

// Exibe o resultado
alert(`O maior número entre ${num1}, ${num2} e ${num3} é ${maior}.`);