// 10
let precoIngresso = 40;
let idade = 16;
let ehEstudante = false;

if (idade < 18 || idade >= 60 || ehEstudante === true) {
  console.log(`Meia-entrada: R$ ${precoIngresso / 2}`);
} else {
  console.log(`Inteira: R$ ${precoIngresso}`);
}