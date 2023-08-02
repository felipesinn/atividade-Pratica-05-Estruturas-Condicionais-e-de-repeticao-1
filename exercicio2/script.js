
let totalSalarioHomens = 0;
let totalSalarioMulheres = 0;
let continuar = true;

while (continuar) {
  const salario = parseFloat(prompt("Digite o salário do funcionário:"));
  const sexo = prompt("Digite o sexo do funcionário (M ou F):").toUpperCase();

  if (sexo === "M") {
    totalSalarioHomens += salario;
  } else if (sexo === "F") {
    totalSalarioMulheres += salario;

  }

  continuar = confirm("Deseja continuar cadastrando funcionários?");
}

document.write(`Total de salários pagos aos homens: R$ ${totalSalarioHomens.toFixed(2)}</p>`);
document.write(`Total de salários pagos às mulheres: R$ ${totalSalarioMulheres.toFixed(2)}`);



// 2. Desenvolva um aplicativo que leia o salário e o sexo de vários
// funcionários. No final, mostre o total de salários pagos aos homens e
// o total pago às mulheres. O programa vai perguntar ao usuário se
// ele quer continuar ou não sempre que ler os dados de um
// funcionário.