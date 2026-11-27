// Desafio 13
let a = 10;
let b = 4;

console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`);
console.log(`${a} % ${b} = ${a % b}`);

console.log(`${a} === ${b}? ${a === b}`);
console.log(`${a} !== ${b}? ${a !== b}`);
console.log(`${a} > ${b}? ${a > b}`);
console.log(`${a} < ${b}? ${a < b}`);
console.log(`${a} >= ${b}? ${a >= b}`);
console.log(`${a} <= ${b}? ${a <= b}`);

let ambosPares = (a % 2 === 0) && (b % 2 === 0);
console.log("Os dois são pares?", ambosPares);
