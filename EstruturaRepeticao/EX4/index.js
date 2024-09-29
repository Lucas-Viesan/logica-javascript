const prompt = require("prompt-sync")();
let n = 0;
do {
  n = Number(prompt("Digite um número: "));
  if (n % 2 == 0) {
  } else {
    console.log("O", n, "é ímpar");
  }
} while (n != 0);
