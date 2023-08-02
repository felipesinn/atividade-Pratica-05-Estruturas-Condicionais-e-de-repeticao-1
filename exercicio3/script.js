let valorInicial = parseInt(prompt("Digite o primeiro Valor: "));
let valorFinal = parseInt(prompt("Digite o último Valor: "));
let incremento = parseInt(prompt("Digite o incremento: "));

if (isNaN(valorInicial) || isNaN(valorFinal) || isNaN(incremento)) {
  console.log("Digite o primeiro Valor.");
} else if (incremento <= 0) {
  console.log("Digite o último Valor");
} else if (valorFinal < valorInicial) {
  console.log("Digite o incremento: 2");
} else {
  console.log("contador:");
  while (valorInicial <= valorFinal) {
    console.log(valorInicial);
    valorInicial += incremento;
  }
  console.log("Acabou!");
}


// 3. Crie um algoritmo que leia o valor inicial da contagem, o valor final e
// o incremento, mostrando em seguida todos os valores no intervalo:
// Ex:
// Digite o primeiro Valor: 3
// Digite o último Valor: 10
// Digite o incremento: 2
// Contagem: 3 5 7 9 Acabou!