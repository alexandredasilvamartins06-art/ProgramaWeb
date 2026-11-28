// Desafio 13
let a = 10;
let b = 4;
let operacao = "*";

switch (operacao) {
  case "+":
    console.log(`${a} + ${b} = ${a + b}`);
    break;
  case "-":
    console.log(`${a} - ${b} = ${a - b}`);
    break;
  case "*":
    console.log(`${a} * ${b} = ${a * b}`);
    break;
  case "/":
    if (b === 0) {
      console.log("Não dá para dividir por zero!");
    } else {
      console.log(`${a} / ${b} = ${a / b}`);
    }
    break;
  default:
    console.log("Operação inválida");
}
