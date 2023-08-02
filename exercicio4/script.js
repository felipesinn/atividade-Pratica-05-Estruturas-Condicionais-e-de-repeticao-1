const nome = prompt('Qual o seu nome?');
const sexo = prompt('Digite F(feminino) e M(masculino): ').toUpperCase();
let valorCompra = 0;
let desconto = 0;

  do{
    valorCompra += parseFloat(prompt('Qual o valor da compra?'));
  }while(confirm('Deseja comprar mais?'));

  if(sexo == 'F'){
    desconto = 13;
  } else if(sexo == 'M'){
    desconto = 5;
  }

const valorDesconto = (desconto * 100) / valorCompra;
document.write(`Olá ${nome}, o valor total de sua compra foi de ${valorCompra.toFixed(2)} e com o desconto especial do dia da Mulher sua compra é de ${(valorCompra - valorDesconto).toFixed(2)}.`);

// 4. Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar
// descontos para todos, mas especialmente para mulheres. Faça um
// programa que leia nome, sexo e o valor das compras do cliente e
// calcule o preço com desconto. Sabendo que:
// a. Homens ganham 5% de desconto