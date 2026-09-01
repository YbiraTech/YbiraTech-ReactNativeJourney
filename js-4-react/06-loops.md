# Loops — `for...of`, `for...in` e Controle de Fluxo

## `for...of`

Use `for...of` quando você precisa percorrer os **valores de um iterável**.

```javascript
const numbers = [10, 20, 30];

for (const number of numbers) {
  console.log(number);
}
```

Resultado:

```text
10
20
30
```

Para percorrer apenas os valores, costuma ser mais legível que o `for` tradicional:

```javascript
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```

Prefira o `for` tradicional quando realmente precisar controlar o índice:

```javascript
for (let i = 0; i < numbers.length; i++) {
  console.log(i, numbers[i]);
}
```

> `for...of` funciona com iteráveis como arrays, strings, `Set` e `Map`.

---

## `for...in`

`for...in` percorre as **chaves enumeráveis de um objeto**.

```javascript
const user = {
  name: "Alice",
  age: 30,
};

for (const key in user) {
  console.log(key);
}
```

Resultado:

```text
name
age
```

Para obter os valores:

```javascript
for (const key in user) {
  console.log(user[key]);
}
```

### Diferença

```text
for...of → valores de um iterável
for...in → chaves de um objeto
```

---

## `break`

`break` encerra imediatamente um loop.

```javascript
let retries = 0;

while (retries < 3) {
  const success = attemptConnection();

  if (success) {
    break;
  }

  retries++;
}
```

Se `success` for `true`, o `while` termina imediatamente.

---

## `break` no `switch`

Normalmente use `break` para impedir que a execução continue no próximo `case`.

```javascript
const role = "admin";

switch (role) {
  case "admin":
    console.log("Administrator");
    break;

  case "user":
    console.log("User");
    break;

  default:
    console.log("Unknown");
}
```

Sem `break`, ocorre **fall-through** para o próximo `case`, salvo quando isso é intencional.

---

# Exercícios

## 1. Optional Chaining

Obtenha com segurança a primeira linha do endereço:

```javascript
function getFirstAddressLine(user) {
  return user?.addresses?.[0]?.line ?? "Unknown";
}
```

---

## 2. Somando com `for...of`

```javascript
function sum(numbers) {
  let total = 0;

  for (const number of numbers) {
    total += number;
  }

  return total;
}

sum([10, 20, 30]); // 60
```

---

## 3. `for` vs `for...of`

Com `for` tradicional:

```javascript
const names = ["Alice", "Bob", "Carol"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
```

Com `for...of`:

```javascript
for (const name of names) {
  console.log(name);
}
```

Quando o índice não é necessário, `for...of` tende a expressar melhor a intenção.

---

## Resumo

```javascript
// Valores
for (const value of array) {
  // ...
}

// Chaves
for (const key in object) {
  // ...
}

// Interrompe o loop
break;

// Acesso seguro
user?.address?.city;

// Padrão apenas para null/undefined
value ?? defaultValue;
```
