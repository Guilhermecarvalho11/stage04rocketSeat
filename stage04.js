const prompt1 = prompt("Insira seu primeiro numero: ");
const prompt2 = prompt("Insira o segundo numero: ");

const soma = prompt1 + prompt2;
const subtracao = prompt1 - prompt2;
const multiplicacao = prompt1 * prompt2;
const div = prompt1 / prompt2;
const resto =
  prompt2 !== 0
    ? prompt1 % prompt2
    : "Não é possível calcular o resto da divisão por zero";

// Exibe os resultados
console.log(`Soma: ${soma}`);
console.log(`Subtração: ${subtracao}`);
console.log(`Multiplicação: ${multiplicacao}`);
console.log(`Divisão: ${div}`);
console.log(`Resto da divisão: ${resto}`);

const somaPar = soma % 2 === 0 ? "é par" : "é ímpar";
console.log(`A soma dos dois números ${somaPar}.`);

const numerosIguais = prompt1 === prompt2 ? "São iguais" : "Não são iguais";
console.log(`Os dois numeros ${numerosIguais}`);
