const users = [
  {id: 1, name: "José", cpf: "123-456-78", position: "Front-end"},
  {id: 2, name: "João", cpf: "123-456-78", position: "Front-end"},
  {id: 3, name: "Matheus", cpf: "123-456-78", position: "Front-end"},
  {id: 4, name: "Thiago", cpf: "123-456-78", position: "Back-end"},
  {id: 5, name: "Joaquim", cpf: "123-456-78", position: "Back-end"},
];

console.log(users.filter((u) => u.position == "Front-end"));

console.log(users.filter((u) => u.id == 3));

console.log(users.filter((u) => u.id != 3));
