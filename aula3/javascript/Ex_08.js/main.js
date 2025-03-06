// Define o valor de π
const PI = 3.1416;

// Solicita ao usuário que insira o raio e a altura do cilindro
let raio = parseFloat(prompt("Digite o raio do cilindro: "));
let altura = parseFloat(prompt("Digite a altura do cilindro: "));

// Calcula o volume do cilindro usando a fórmula: V = π * r² * h
let volume = PI * Math.pow(raio, 2) * altura;

// Exibe o resultado
alert(`O volume do cilindro com raio ${raio} e altura ${altura} é ${volume.toFixed(2)}.`);
