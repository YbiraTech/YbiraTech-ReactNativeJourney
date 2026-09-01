/*
 *Objects
 */

// Também chamado de array associativo
// arrayAssociativo["campo"]
// arrayAssociativo.campo

// Objetos
var nothing = {}; // objeto vazio

var disciplina = {
  sigla: "Dev Web",
  semestre: 7,
  basico: ["html", "css", "javascript"],
};

console.log(disciplina.sigla);
disciplina.sigla2 = "DEVWEB S7";

// Para fazer o merge de dois objetos simples
var aluno = {
  matricula: "12738623764528734",
  semestre_atual: "S7",
};

var pessoa = {
  nome: "Fulano de Tal",
  idade: 23,
};

var telefones = { telefones: ["88 3443-3333", "85 3421-2011"] };

var endereco = {
  rua: "Rua ABC",
  numero: 123,
  complemento: "casa",
};

var p = {
  ...pessoa,
  ...aluno,
  endereco: endereco,
  telefones: telefones,
};
console.log(p);

// ES6 Declarative Functions within Objects
// Método
var contaCorrente = {
  saldo: 0,
  depositar(valor) {
    this.saldo += valor;
  },
  sacar(valor) {
    if (valor <= this.saldo) this.saldo -= valor;
  },
};

contaCorrente.depositar(50.45);
console.log(contaCorrente.saldo);

empregos = {
  Cientista: { ordem: 1, descricao: "Cientista" },
  Entregador: { ordem: 3, descricao: "Entregador da Nave Planet Express" },
  Capitao: { ordem: 4, descricao: "Capitã da Nave Planet Express" },
  Dobrador: { ordem: 5, descricao: "Dobrador na Planet Express" },
  Contador: { ordem: 5, descricao: "Dobrador na Planet Express" },
  Estagiario: { ordem: 5, descricao: "Estagiário na Planet Express" },
};

funcionarios = [
  { id: 6, nome: "Hubert J. Farnsworth", funcao: empregos.Cientista },
  { id: 1, nome: "Philip J. Fry", funcao: empregos.Entregador },
  { id: 8, nome: "Turanga Leela", funcao: empregos.Capitao },
  { id: 3, nome: "Bender", funcao: empregos.Dobrador },
  { id: 5, nome: "Amy Wong", funcao: empregos.Estagiario },
  { id: 7, nome: "Hermes Conrad", funcao: empregos.Contador },
  { id: 2, nome: "Kif Kroker", funcao: null },
  { id: 4, nome: "Zapp Brannigan", funcao: null },
];
