const prompt = require("prompt-sync")();

function verificacaoNumeros(valor) {
  let p = "P";
  let n = "N";
  if (valor > 0) {
    return p;
  } else {
    return n;
  }
}
console.log("O programa retona ´P´ se for > 0 e ´N´ se <= 0");
let verificador = parseInt(prompt("Digite um valor: "));
let resultValor = verificacaoNumeros(verificador);
console.log("O valor ", verificador, " é: ", resultValor);
