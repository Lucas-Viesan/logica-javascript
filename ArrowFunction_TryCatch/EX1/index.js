const prompt = require("prompt-sync")();

try {
  const menu = new Array();

  for (let i = 0; i < 5; i++) {
    const item = new Object();
    item.lanche = prompt("Nome do lanche: ");
    item.preco = Number(prompt("Preco do lanche: "));
    item.tamanho = prompt("Tamanho do lanche: ");
    console.log("------------------------------------");
    menu.push(item);
  }
  console.table(menu);
} catch (error) {
  console.log(error);
}
