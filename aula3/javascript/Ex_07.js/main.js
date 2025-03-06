// Define o valor de π
const PI = 3.1416;

// Solicita ao usuário que insira o raio do círculo
let raio = parseFloat(prompt("Digite o raio do círculo: "));

// Calcula a área e o perímetro do círculo
let area = PI * Math.pow(raio, 2); // Área = π * r²
let perimetro = 2 * PI * raio; // Perímetro = 2 * π * r

// Exibe os resultados
alert(`Para um círculo com raio ${raio}:\nÁrea = ${area.toFixed(2)}\nPerímetro = ${perimetro.toFixed(2)}`);
