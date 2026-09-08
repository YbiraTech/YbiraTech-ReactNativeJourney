import { showDateNow } from "../utils/utils";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {
  useState, // Para criar variáveis de estado que podem ser atualizadas e refletidas na interface do usuário.
  useEffect, // Para executar código quando algo acontece no ciclo de vida do componente.
} from "react";

import { Link } from "expo-router";

// IMPORTANTE: importar isso ANTES de qualquer outro import,
// idealmente no topo do arquivo index.js/App.tsx
//import "react-native-get-random-values";
//import { v4 as uuidv4 } from "uuid";

export default function TheAnswerIs42() {
  // hooks são chamados sempre no topo do componente, antes de qualquer return ou lógica condicional
  const [count, setCount] = useState<number>(42); // Exemplo de estado para armazenar um número (count) e uma função para atualizá-lo (setCount)
  let wrightAnswer: number = 42;

  const [newTaskTitle, setNewTaskTitle] = useState<string>(""); // Estado para armazenar o título da nova tarefa

  function showMessage() {
    const answer = `the answer to the ultimate question of life, the universe, and everything is ${wrightAnswer}`;
    console.log("the answer is", answer);
    console.log(`wrightAnswer value is ${wrightAnswer}`);
    alert(answer);
    wrightAnswer++; // o valor é incrementado, mas não é refletido na interface do usuário (continua mostrando 42) porque não estamos usando o estado para armazenar wrightAnswer
  }

  // Exemplo de uso do useEffect para monitorar mudanças em uma variável de estado específica (count)
  // e também quando o componente é montado.
  useEffect(() => {
    console.log("useEffect called with count:", count);
  }, [count]);

  // Exemplo de uso do useEffect que executa em toda renderização do componente, independentemente de mudanças em variáveis de estado
  useEffect(() => {
    console.log("useEffect que executa em toda renderização", count);
    showDateNow();
  });

  return (
    <View style={styles.container}>
      <Text
        style={
          count === 42
            ? styles.title
            : { ...styles.title, backgroundColor: "#bc3333" }
        }
      >
        {" "}
        {count}
      </Text>
      <Text style={styles.subtitle}>
        {wrightAnswer}: The Answer to the Ultimate Question of Life, the
        Universe, and Everything.
      </Text>
      <Button
        title="What is the answer ?"
        onPress={showMessage}
        color="#676e66"
      />
      <View style={styles.opbuttonContainer}>
        <TouchableOpacity
          onPress={() => {
            console.log("Decrementing count from", count, "to", count - 1);

            // O react usará o novo valor de count na próxima renderização,
            // mas o console.log abaixo ainda mostrará o valor antigo de count, porque a atualização do estado é assíncrona.
            setCount(count - 1);

            console.log(
              "count:",
              count,
              "atualização do estado é assíncrona, então o valor mostrado aqui ainda é o antigo",
            );
          }}
        >
          <Text style={styles.opbutton}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log("Incrementing count from", count, "to", count + 1);

            // O react usará o novo valor de count na próxima renderização,
            // mas o console.log abaixo ainda mostrará o valor antigo de count, porque a atualização do estado é assíncrona.
            setCount(count + 1);

            console.log(
              "count:",
              count,
              "atualização do estado é assíncrona, então o valor mostrado aqui ainda é o antigo",
            );
          }}
        >
          <Text style={styles.opbutton}>+</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter a number"
        keyboardType="numeric"
        /* O conteúdo mostrado dentro da caixa de texto é exatamente o valor da variável nome. */
        value={count.toString()}
        onChangeText={(text) => setCount(parseInt(text) || 0)}
      />
      {count === 42 && (
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: "#16ca46", textAlign: "center" }}>
            You have found the answer!
          </Text>
        </View>
      )}
      <View>
        <Link href="/" style={styles.linkStyle}>
          Home
        </Link>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa toda a tela
    backgroundColor: "#121212", // cor de fundo escura
    alignItems: "center",
    justifyContent: "center",
    padding: 20, // espaço interno para evitar que o texto encoste nas bordas
  },
  opbuttonContainer: {
    flexDirection: "row", // organiza os botões em linha
    justifyContent: "space-between", // espaço entre os botões
    marginTop: 10, // espaço acima dos botões
  },
  listContainer: {
    marginTop: 10, // espaço acima dos botões
    width: "85%", // Largura do retângulo
    height: 200, // Altura FIXA (ou use maxHeight: 300)
    backgroundColor: "#fff",
    borderRadius: 12, // Bordas arredondadas
    padding: 16,
  },
  title: {
    color: "#fff",
    fontWeight: "bold", // texto em negrito
    fontSize: 26,
    width: 150,
    backgroundColor: "#4f7a4f", // fundo escuro para o título
    padding: 10, // espaço interno para o título
    borderRadius: 15, // cantos arredondados
    textAlign: "center",
  },
  subtitle: {
    color: "#ccc", // cinza clara para contraste com o fundo escuro
    marginTop: 10, // espaço entre o título e o subtítulo,
    marginBottom: 10, // espaço abaixo do subtítulo
    fontSize: 12,
    fontStyle: "italic", // texto em itálico
    textAlign: "center",
  },
  opbutton: {
    backgroundColor: "#676e66", // cor de fundo do botão
    margin: 2, // espaço entre os botões
    color: "#fff", // cor do texto do botão
    fontSize: 18, // tamanho da fonte do botão
    textAlign: "center", // centraliza o texto do botão
    paddingVertical: 10, // espaço interno vertical
    paddingHorizontal: 20, // espaço interno horizontal
    borderRadius: 5, // cantos arredondados do botão
  },
  input: {
    height: 40, // altura do campo de entrada
    borderColor: "#676e66", // cor da borda do campo de entrada
    borderWidth: 1, // largura da borda do campo de entrada
    borderRadius: 5, // cantos arredondados do campo de entrada
    color: "#fff", // cor do texto digitado
    paddingHorizontal: 10, // espaço interno horizontal
    marginTop: 20, // espaço acima do campo de entrada
    width: "20%", // largura do campo de entrada
    textAlign: "center", // centraliza o texto digitado
  },
  inputTask: {
    height: 40, // altura do campo de entrada
    borderColor: "#676e66", // cor da borda do campo de entrada
    borderWidth: 1, // largura da borda do campo de entrada
    borderRadius: 5, // cantos arredondados do campo de entrada
    color: "#fff", // cor do texto digitado
    paddingHorizontal: 10, // espaço interno horizontal
    marginTop: 10, // espaço acima do campo de entrada
    width: "85%", // largura do campo de entrada
    fontSize: 12, // tamanho da fonte do botão
    textAlign: "center", // centraliza o texto digitado
  },
  addTaskButton: {
    backgroundColor: "#676e66", // cor de fundo do botão
    marginTop: 10, // espaço entre os botões
    color: "#fff", // cor do texto do botão
    fontSize: 12, // tamanho da fonte do botão
    textAlign: "center", // centraliza o texto do botão
    paddingVertical: 6, // espaço interno vertical
    paddingHorizontal: 20, // espaço interno horizontal
    borderRadius: 5, // cantos arredondados do botão
  },
  errorText: {
    color: "#ff3300", // cor do texto de erro
    fontSize: 16, // tamanho da fonte do texto de erro
    textAlign: "center", // centraliza o texto de erro
    marginTop: 20, // espaço acima do texto de erro
  },
  linkStyle: {
    color: "#3498db",
    fontSize: 16,
    margin: 5,
    marginTop: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: "#37343f",
    borderRadius: 5,
  },
});
