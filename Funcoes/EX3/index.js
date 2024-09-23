const prompt = require("prompt-sync")();

function maiorValor(n1, n2, n3) {
  if (n1 > n2 && n1 > n3) {
    return n1;
  } else if (n2 > n3) {
    return n2;
  } else {
    return n3;
  }
}

function menorValor(n1, n2, n3) {
  if (n1 < n2 && n1 < n3) {
    return n1;
  } else if (n2 < n3) {
    return n2;
  } else {
    return n3;
  }
}

let n1 = parseInt(prompt("Digite um número: "));
let n2 = parseInt(prompt("Digite um número: "));
let n3 = parseInt(prompt("Digite um número: "));
let maior = maiorValor(n1, n2, n3);
console.log("O maior número é: ", maior);
let menor = menorValor(n1, n2, n3);
console.log("O menor número é: ", menor);
