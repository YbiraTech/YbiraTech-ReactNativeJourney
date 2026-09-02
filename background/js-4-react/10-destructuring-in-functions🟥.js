function obterInfo({nome, sobrenome, idade}) {
  console.log(nome + " " + sobrenome + "," + idade);
}

const pessoa = {
  nome: "José",
  sobrenome: "Lopes",
  idade: 41,
};

obterInfo(pessoa);
