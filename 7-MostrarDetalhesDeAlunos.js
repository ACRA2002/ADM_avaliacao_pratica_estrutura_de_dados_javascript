

let alunos = [{nome: "Pedro", idade: 10}, {nome: "Maria", idade: 11}];

let imprimir = alunos.forEach(aluno => {
    console.log(`Nome: ${aluno.nome}, Idade: ${aluno.idade} anos.`);
});