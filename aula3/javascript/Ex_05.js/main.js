// Solicita ao usuário que insira dois números
let num1 = parseFloat(prompt("Digite o primeiro número: "));
let num2 = parseFloat(prompt("Digite o segundo número: "));

// Calcula a distância entre os números (valor absoluto da diferença)
let distancia = Math.abs(num1 - num2);

// Exibe o resultado
alert(`A distância entre ${num1} e ${num2} é ${distancia}.`);