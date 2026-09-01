// Função que retorna uma promise

function fazerPedidoPizza({pedido, sabor}) {
  return new Promise((resolve, reject) => {
    console.log(`[${pedido}] Pedido solicitado: Pizza sabor ${sabor}.`);
    const tempoEspera = setTimeout(() => {
      if (sabor === "frango") {
        resolve(`[${pedido}]Sua Pizza de Frango chegou!`);
      } else {
        reject(`[${pedido}] Desculpe, Sua pizza não chegará!`);
      }
    }, 3000 * Math.random()); // Espera 3 segundos ...
  });
}

// Async Await surge para simplificar o trabalho com promisses
// O código fica mais legível e estruturado

// async function enviarPedido(...) → permite usar await dentro da função.

// await fazerPedidoPizza(...) → espera a Promise resolver ou rejeitar, sem precisar de .then.

// try { ... } catch { ... } finally { ... } → substitui .then, .catch e .finally,
// deixando o fluxo mais parecido com código “síncrono”.

async function enviarPedido(pedido, sabor) {
  try {
    const mensagem = await fazerPedidoPizza({pedido, sabor});
    console.log(mensagem, "Sucesso!");
  } catch (erro) {
    console.log(erro, "Falha!");
  } finally {
    console.log(`[${pedido}] Pedido Encerrado!`);
  }
}

enviarPedido(1, "frango");
enviarPedido(2, "frango");
enviarPedido(3, "chocolate");
enviarPedido(4, "chocolate");
