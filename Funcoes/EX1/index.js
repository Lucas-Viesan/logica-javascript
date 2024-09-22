const prompt = require("prompt-sync")();

function seletorTemperatura() {
  console.log("Qual opção de temperatura você deseja coverter ºC ou ºF ?");
  let unidadeTemperatura = prompt(
    "Pressione c (celsius para fahrenheit/ f (fahrenheit para celsis): "
  );
  if (
    unidadeTemperatura == "c" ||
    unidadeTemperatura == "C" ||
    unidadeTemperatura == "f" ||
    unidadeTemperatura == "F"
  ) {
    return unidadeTemperatura;
  } else {
    console.log("Erro! O seletor não é correspondente");
  }
}

function conversorCelsius(celsius) {
  let valCelsius = celsius * 1.8 + 32;
  return valCelsius;
}

function conversorFahrenheit(fahrenheit) {
  let valFahrenheit = (fahrenheit - 32) * 0.555;
  return valFahrenheit;
}

function conversorTemperatura() {
  let conversao = seletorTemperatura();
  if (conversao == "c" || conversao == "C") {
    let valorConvertido = prompt("Digite o valor que deseja converter: ");
    let celsius = conversorCelsius(valorConvertido);
    console.log("Conversão para ºC é: ", celsius);
  } else if (conversao == "f" || conversao == "F") {
    let valorConvertido = prompt("Digite o valor que deseja converter: ");
    let fahrenheit = conversorFahrenheit(valorConvertido);
    console.log("Conversão para ºF é: ", fahrenheit);
  } else {
  }
}

conversorTemperatura();
