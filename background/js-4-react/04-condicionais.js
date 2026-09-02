/**
 * Estrutura Condicional, Switch-Case, . . .
 */

showOutputs = false;
// Ifs e Elses
if (showOutputs) {
  let okay = true;
  if (!okay) {
  } else if (1 < 2) {
  } else {
  }

  // Condição Ternária
  // condition ? exprIfTrue : exprIfFalse
  let success = true;
  if (success == true) {
    console.log("Ok!");
  } else {
    console.log("Erro!");
  }

  let result = success == true ? 1 : 0;
  console.log(result);

  // Swtich Case
  let ddd = 88;
  switch (ddd) {
    case 85:
      text = "Fortaleza";
      console.log(text);
      break; // indica o ponto de interrupção da execução
    case 88:
      text = "Demais cidades";
      console.log(text);
      break;
    default: // nenhuma correspondência foi encontrada
      console.log("DDD incorreto!");
  }
}

// Operador ternário
let resultado = (condicao) ? (retorno se verdadeira) : (retorno se falsa);