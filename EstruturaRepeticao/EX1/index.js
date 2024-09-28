const prompt = require("prompt-sync")();

let maior = 0;
let menor = 0;

for (let i = 0; i <= 4; i++) {
  let numero = parseInt(prompt("Digite um número: "));
  if (i === 0) {
    maior = numero;
    menor = numero;
  } else {
    if (numero > maior) {
      maior = numero;
    }
    if (numero < menor) {
      menor = numero;
    }
  }
}

console.log("O maior número: ", maior);
console.log("O menor número: ", menor);
