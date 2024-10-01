const prompt = require("prompt-sync")();

const solicitaTaxi = prompt("Deseja solicitar Taxi? s/n: ");
if (solicitaTaxi == "s" || solicitaTaxi == "S") {
  const solicitacao = prompt("Hora da solicitação do taxi (formato HH:mm): ");
  const spliter = solicitacao.split(":");
  const hora = Number(spliter[0]);
  const minutos = Number(spliter[1]);

  const dataAtual = new Date();
  dataAtual.setHours(hora);
  dataAtual.setMinutes(minutos);

  console.log("Solicitação confirmada em: ", `${dataAtual.toString()}`);
  const tempoTrajeto = Number(
    prompt("Digite o tempo para chegar ao destino(em minutos): ")
  );
  const tempoTotal = tempoTrajeto + minutos;

  let dataChegada = dataAtual;

  if (tempoTotal > 60) {
    const minutosExcedentes = tempoTotal - 60;
    dataChegada.setHours(hora + 1);
    dataChegada.setMinutes(minutosExcedentes);
    console.log("A previsão de chegada é: ", `${dataChegada.toString()}`);
  } else {
    dataChegada.setMinutes(tempoTotal);
    console.log("A previsão de chegada é: ", `${dataChegada.toString()}`);
  }
} else {
  console.log("Inicialize o app para uma nova solicitação");
  [];
}
