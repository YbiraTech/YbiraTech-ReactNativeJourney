// React Native --- service/api.ts --- HTTP ---  JSONPlaceholder

import { Task } from "../types/Task";
import TaskItem from "../components/TaskItem";
import { fetchTasks, createTask, updateTaskDone, delTask } from "../services/api";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  FlatList,
  ActivityIndicator,
} from "react-native";

import {
  useState, // Para criar variáveis de estado que podem ser atualizadas e refletidas na interface do usuário.
  useEffect, // Para executar código quando algo acontece no ciclo de vida do componente.
} from "react";

import { Link } from "expo-router";

export default function ToDoScreen() {
  // hooks são chamados sempre no topo do componente, antes de
  // qualquer return ou lógica condicional
  const [tasks, setTasks] = useState<Task[]>([]); // Exemplo de estado para armazenar uma lista de tarefas
  const [loading, setLoading] = useState<boolean>(true); // Exemplo de estado para armazenar o status de carregamento (loading)
  const [error, setError] = useState<string | null>(null); // Exemplo de estado para armazenar mensagens de erro (error)>

  const [newTaskTitle, setNewTaskTitle] = useState<string>(""); // Estado para armazenar o título da nova tarefa

  async function loadTasks() {
    try {
      const data = await fetchTasks();
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      setTasks(data);
      // setError("Test: Failed to fetch tasks!."); // Testando a exibição de erro
      console.log("Tasks fetched successfully:", data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      setError("Failed to fetch tasks. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadTasks();
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1f3158",
        }}
      >
        <ActivityIndicator size="large" color="#4f7a4f" />
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text style={styles.errorText}>Error ao carregar dados</Text>
      </View>
    );
  }
  
  // API > Mudanca de Estado
  async function toggleTaskDone(taskId: number) {
  
    console.log(`Id da Tarefa: ${taskId}`);
    
    // obter a tarefa
    const task = tasks.find( (t) => t.id === taskId);
    console.log('tarefa para atualizar:', task);
    
    
    
    if(!task) return;  
    
    const taskUp = await updateTaskDone(taskId, !task.completed!);
    console.log('tarefa atualizada:', taskUp);
    
      
    setTasks((prevTasks /* o novo estado depende do estado anterior. */) =>
      prevTasks.map((task /* O map() percorre cada tarefa. */) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
    alert("tarefa atualizada!");
  }

  // API > Mudanca de Estado
  async function addTask(title: string) {
    // Impede que o usuário adicione uma tarefa vazia ou apenas com espaços.
    if (title.trim() === "") {
      alert("Task title cannot be empty.");
      return;
    }

    try {
    
        // O TypeScript garante que estamos criando algo compatível com Task
        //const newTask: Task = {
        //  id: Date.now(), // usando timestamp como id único
        //  title: title,
        //  completed: false,
        //};
        
        const newTask = await createTask({title:title.trim(), completed:false});
        
        setTasks((prevTasks) => [newTask, ...prevTasks]);
        setNewTaskTitle("");
        alert("tarefa inserida!");    
        
    } catch(error){
        alert("Erro ao criar a tarefa!")
    }
    
    
    

  }

  // API > Mudanca de Estado
  async function removeTask(taskId: number) {
    try {
        
      
    await delTask(taskId);  
      
      
    // Filtra a lista de tarefas, removendo a tarefa com o id
    // correspondente da FlatList.
    // O resultado é uma nova lista de tarefas sem a tarefa removida.
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== taskId));
    
    alert("Tarefa removida!");
    } catch(error){
         alert("Erro ao remover tarefa!");
    }
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas</Text>
      <TextInput
        style={styles.inputTask}
        placeholder="O que fazer ?"
        placeholderTextColor="#999"
        keyboardType="default"
        value={newTaskTitle}
        onChangeText={(text) => setNewTaskTitle(text)}
      />

      {/*onPress > await addTask() > await createTask() > await fetch()*/}
      <TouchableOpacity
        onPress={async () => {
          console.log("Adding new task:", newTaskTitle);
          await addTask(newTaskTitle);
        }}
      >
        <Text style={styles.addTaskButton}>Add Task</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setTasks([]);
        }}
      >
        <Text style={styles.addTaskButton}>Remover Tudo</Text>
      </TouchableOpacity>

<Text style={ {color:'#aaaaaa', marginTop:10, fontSize:14} }>
  {tasks.length} tarefas
</Text>      
      
      <View style={styles.listContainer}>
        <FlatList
          data={tasks}
          keyExtractor={(task: Task) => task.id.toString()}
          renderItem={(contexto) => (
            /* Passando a função como prop no componente pai para o componente filho TaskItem */
            <TaskItem
              task={contexto.item}
              onToggleDone={toggleTaskDone}
              onDelTask={removeTask}
            />
          )}
        />
      </View>
      <View style={styles.footer}>
        <Link href="/" style={styles.linkStyle}>
          Home
        </Link>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa toda a tela
    backgroundColor: "#121212", // cor de fundo escura
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20, // espaço interno para evitar que o texto encoste nas bordas
  },
  title:{
      color:"#fff",
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom:10, 
  },
  listContainer: {
    marginTop: 10, // espaço acima dos botões
    width: "100%", // Largura do retângulo
    // height: 400, // Altura FIXA (ou use maxHeight: 300)
    flex: 1, 
    backgroundColor: "#fff",
    borderRadius: 12, // Bordas arredondadas
    padding: 16,
  },
  inputTask: {
    height: 42, // altura do campo de entrada
    borderColor: "#676e66", // cor da borda do campo de entrada
    borderWidth: 1, // largura da borda do campo de entrada
    borderRadius: 10, // cantos arredondados do campo de entrada
    color: "#fff", // cor do texto digitado
    paddingHorizontal: 10, // espaço interno horizontal
    marginTop: 10, // espaço acima do campo de entrada
    width: "100%", // largura do campo de entrada
    fontSize: 14, // tamanho da fonte do botão
    textAlign: "center", // centraliza o texto digitado
    backgroundColor:"#1e1e1e",
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
  footer: {
    marginTop: 15,
    //justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "#2c3e50",
    //width: "75%",
  },
});
