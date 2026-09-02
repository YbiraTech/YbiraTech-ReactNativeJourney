const users = [
  {id: 1, name: "José", cpf: "123-456-78", position: "Front-end", age: 41},
  {id: 2, name: "João", cpf: "123-456-78", position: "Front-end", age: 42},
  {id: 3, name: "Matheus", cpf: "123-456-78", position: "Front-end", age: 43},
  {id: 4, name: "Thiago", cpf: "123-456-78", position: "Back-end", age: 38},
  {id: 5, name: "Joaquim", cpf: "123-456-78", position: "Back-end", age: 39},
];

// Esta função seré executada em cada elemento do array
let somaIdades = (accumulator, user) => accumulator + user.age;
let total = users.reduce(somaIdades, 0);
let idadeMedia = Math.floor(total / users.length);
console.log("Media das idades", idadeMedia);

let menorIdade = users.reduce(
  (menor, user) => (user.age < menor ? (menor = user.age) : menor),
  users[0].age
);

console.log("menor idade", menorIdade);
