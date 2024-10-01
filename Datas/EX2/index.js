const prompt = require("prompt-sync")();

// const date = (aluno) => {
//   const spliter = aluno.nascimento.split("/");
//   const ano = Number(spliter[0]);
//   const mes = Number(spliter[1]);
//   const dia = Number(spliter[2]);

//   const novaData = new Date();
//   novaData.setFullYear(ano);
//   novaData.setMonth(mes);
//   novaData.setDate(dia);

//   const armazenaData = new Array();
//   armazenaData.push(novaData);

//   console.log(armazenaData);
// };

// const inscritos = new Array();

// for (let i = 0; i < 2; i++) {
//   const aluno = new Object();
//   aluno.nome = prompt("Nome do aluno:");
//   aluno.nascimento = prompt("Nascimento no formato ano/mes/dia: ");

//   const spliter = aluno.nascimento.split("/");
//   const ano = Number(spliter[0]);
//   const mes = Number(spliter[1]);

//   aluno.anoNascimento = ano;
//   aluno.

//   const novaData = new Date();
//   novaData.setFullYear(ano);
//   novaData.setMonth(mes);

//   console.log("---------------------------------------------------");
//   inscritos.push(novaData);
// }

// const datas = inscritos.map((aluno) => aluno.nascimento);
// console.log(datas);

// Array para armazenar os participantes com suas informações
const inscritos = new Array();

for (let i = 0; i < 2; i++) {
  // Coletar informações do aluno
  const aluno = new Object();
  aluno.nome = prompt("Nome do aluno: ");
  aluno.nascimento = prompt("Nascimento no formato ano/mes/dia: ");

  // Separar a data de nascimento e converter para números
  const spliter = aluno.nascimento.split("/");
  const ano = Number(spliter[0]);
  const mes = Number(spliter[1]);

  // Armazenar o ano e mês de nascimento no objeto aluno
  aluno.anoNascimento = ano;
  aluno.mesNascimento = mes;

  console.log("---------------------------------------------------");
  // Adicionar o objeto aluno ao array inscritos
  inscritos.push(aluno);
}

// Funções para contar quantos alunos nasceram no mesmo ano e no mesmo mês
function contarMesmoAno(inscritos) {
  const anos = inscritos.map((aluno) => aluno.anoNascimento);
  return contarRepeticoes(anos);
}

function contarMesmoMes(inscritos) {
  const meses = inscritos.map((aluno) => aluno.mesNascimento);
  return contarRepeticoes(meses);
}

// Função para contar quantas vezes os elementos se repetem
function contarRepeticoes(array) {
  const contagem = {};
  let repeticoes = 0;

  array.forEach((item) => {
    contagem[item] = (contagem[item] || 0) + 1;
  });

  // Verificar quantos itens se repetem mais de uma vez
  for (let key in contagem) {
    if (contagem[key] > 1) {
      repeticoes += contagem[key];
    }
  }

  return repeticoes;
}

// Exibir resultados no console
console.log("\nResultados:");
console.log(
  `Quantidade de participantes que nasceram no mesmo ano: ${contarMesmoAno(
    inscritos
  )}`
);
console.log(
  `Quantidade de participantes que nasceram no mesmo mês: ${contarMesmoMes(
    inscritos
  )}`
);
