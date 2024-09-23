const prompt = require("prompt-sync")();

function marcaNacionalidade(marca) {
  if (
    marca == "Volkswagen" ||
    marca == "Audio" ||
    marca == "BMW" ||
    marca == "Mercedes"
  ) {
    return "A marca é de origem alemã";
  } else {
    return "A marca NÃO é de origem alemã";
  }
}

let marcaCarro = prompt("Digite a marca de um carro: ");
let result = marcaNacionalidade(marcaCarro);
console.log(result);
