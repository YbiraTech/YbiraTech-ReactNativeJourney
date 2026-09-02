/**
 * Arrays
 */

showOutputs = false;
if (showOutputs) {
  let ListaVazia = [];
  let SistemasOperacionais = ["Windows", "Linux", "OS X"];
  let lstPessoa = ["Fulano", "de Tal", 37, 1.72, 85.2, "(85) 9 9234-5432"];

  console.log(lstPessoa);

  // Acessando uma posição do array
  console.log(lstPessoa[0]);

  // Alterando um item de um array
  lstPessoa[0] = "Cicrano";
  console.log(lstPessoa[0]);

  // Insere novo item ao fim da lista
  lstPessoa[lstPessoa.length] = "Rua ABC, número 35";
  console.log(lstPessoa);

  // Insere novo item ao fim da lista (via método push)
  lstPessoa.push(true);
  console.log(lstPessoa);

  delete lstPessoa[1];
  console.log(lstPessoa);

  let lstNumbers = [0, 100, 200, 300, 400, 500];
  let itensRemovidos = lstNumbers.splice(2, 1); // Remover o elemento de índice 2 (1 item será removido)
  console.log(itensRemovidos); // [200]
  console.log(lstNumbers); // [0, 100, 300, 400, 500]

  lstNumbers = [0, 100, 200, 300, 400, 500];
  itensRemovidos = lstNumbers.splice(2, 2); // Remover o elemento de índice 2 (1 item será removido)
  console.log(itensRemovidos); // [200, 300]
  console.log(lstNumbers); // [0, 100, 400, 500]

  let pf = ["Django", "Flask", "Tornado", "Pyramid"];
  var frameworks = pf.concat(["Vue.js", "React"]);
  console.log(frameworks);

  let st1 = pf.join(";");
  console.log(st1);

  let jsfs = ["Angular2", "ReactJS", "Vue.js", "Meteor.js"];
  jsfs.reverse();
  console.log(jsfs);

  let locais = ["Brasil", "Fortaleza", "Aracati"];
  console.log(locais.indexOf("Brasil")); // 1
  console.log(locais.indexOf("Rio de Janeiro")); // -1
}
