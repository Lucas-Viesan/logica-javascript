const prompt = require("prompt-sync")();

function paisesAmericaDoSul(pais) {
  if (
    pais == "Argentina" ||
    pais == "Bolivia" ||
    pais == "Brasil" ||
    pais == "Chile" ||
    pais == "Colombia" ||
    pais == "Equador" ||
    pais == "Guiana" ||
    pais == "Paraguai" ||
    pais == "Peru" ||
    pais == "Suriname" ||
    pais == "Uruguai" ||
    pais == "Venezula"
  ) {
    return "Esse país é da América do Sul";
  } else {
    return "Não pertence a América do Sul";
  }
}

let pais = prompt("Digite um país: ");
let verifica = paisesAmericaDoSul(pais);
console.log(verifica);
let continua = prompt("Deseja continuar? s/n: ");
while (continua == "s" || continua == "S") {
  pais = prompt("Digite um país: ");
  verifica = paisesAmericaDoSul(pais);
  console.log(verifica);
  continua = prompt("Deseja continuar? s/n");
}
