const prompt = require("prompt-sync")();

const carro = new Object();
carro.ano = prompt("Ano do carro: ");
carro.marca = prompt("Marca do carro: ");
carro.modelo = prompt("Modelo do carro: ");
carro.cor = prompt("Cor do carro: ");
carro.valor = Number(prompt("Valor do carro: "));

for (let propridade in carro) {
  console.log(propridade + " : " + carro[propridade]);
}
