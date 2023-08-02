// 1. Faça um algoritmo que leia a idade de vários alunos de uma turma.
// O programa vai parar quando for digitada a idade 999. No final,
// mostre quantos alunos existem na turma e qual é a média de idade
// do grupo.
// Inicialização das variáveis
let idadeAluno = 0;
 totalAlunos = 0;
 somaIdades = 0;

while (true) {
  idadeAluno = parseInt(prompt('Digite a idade do aluno (ou 999 para sair):'));
  if (idadeAluno === 999) {
    break;
  }
  somaIdades += idadeAluno;
  totalAlunos++;
} 

let mediaIdade = somaIdades / totalAlunos;  

console.log(`Total de alunos na turma: ${totalAlunos}`);
console.log(`Média de idade do grupo: ${mediaIdade.toFixed(2)}`);
