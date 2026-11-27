// if e else:

/*
let idade = 16
if (idade >= 18) {
    console.log("Pode tirar a carteira de motorista. ");
} else {
    console.log("Ainda não pode tirar carteira de motorista. ");
}
*/

// *****************************************************
//  else if: mais de dois caminhos.
/*
let media = 5;

if (media >= 7) {
    console.log("Aprovado!");
} else if (media >= 5) {
    console.log("Recuperação!");
} else {
    console.log("Reprovado!");
}
*/

let cor = "verde";

switch (cor) {
    case "verde":
        console.log("Siga");
        break;
    case "amarelo":
        console.log("Atenção reduza!");
        break;
    case "vermelho":
        console.log("Pare");
        break;
    default:
        console.log("Semáforo em amarelo piscante!!!");
} 
