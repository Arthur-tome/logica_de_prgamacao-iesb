// Solicita ao usuário que insira as medidas do trapézio
let baseMaior = parseFloat(prompt("Digite o valor da base maior: "));
let baseMenor = parseFloat(prompt("Digite o valor da base menor: "));
let altura = parseFloat(prompt("Digite o valor da altura: "));

// Calcula a área do trapézio usando a fórmula: ( (baseMaior + baseMenor) * altura ) / 2
let area = ((baseMaior + baseMenor) * altura) / 2;

// Exibe o resultado
alert(`A área do trapézio com bases ${baseMaior} e ${baseMenor}, e altura ${altura}, é ${area}.`);
