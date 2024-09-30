const prompt = require("prompt-sync")();

const user = prompt("Digite uma data no formato dia/mes/ano: ");

const spliter = user.split("/");
const dia = Number(spliter[0]);
const mes = Number(spliter[1]);
const ano = Number(spliter[2]);

const date = new Date();
date.setDate(dia);
date.setMonth(mes - 1);
date.setFullYear(ano);

console.log("Date String: ", date.toDateString());
console.log("UTC: ", date.toUTCString());
console.log("ISO: ", date.toISOString());
