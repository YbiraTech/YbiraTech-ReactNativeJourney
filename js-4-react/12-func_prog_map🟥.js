const users = [
  {id: 1, name: "José", cpf: "123-456-78"},
  {id: 2, name: "João", cpf: "123-456-78"},
  {id: 3, name: "Matheus", cpf: "123-456-78"},
  {id: 4, name: "Thiago", cpf: "123-456-78"},
  {id: 5, name: "Joaquim", cpf: "123-456-78"},
];

const names = users.map((u) => u.name);

const idsAndNames = users.map((u) => ({
  id: u.id,
  name: u.name,
}));

const idsAndNames2 = users.map(({id, name}) => ({
  id: id,
  name: name,
}));

const idsAndNames3 = users.map(({id, name}) => ({id, name}));

console.log(names);
console.log(idsAndNames);
console.log(idsAndNames2);
console.log(idsAndNames3);
