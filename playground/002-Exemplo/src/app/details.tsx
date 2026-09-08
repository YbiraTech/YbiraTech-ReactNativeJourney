import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { Link, useLocalSearchParams, router } from "expo-router";

import { fetchTask, delTask } from "../services/api";
import { useState, useEffect } from "react";

import { Task } from "../types/Task";

export default function TaskDetailsScreen() {
  const { id } = useLocalSearchParams();
  const taskId = Number(id);
  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const task = await fetchTask(taskId); // {id, title, completed, userId}

      // espera 3s antes de continuar
      await new Promise((resolve) => setTimeout(resolve, 3000));

      if (!task) {
        return (
          <View>
            <Text>Tarefa não encontrada!</Text>
          </View>
        );
      }

      setTask(task);
      console.log(task);
      console.log("type:", typeof task?.completed);
      setLoading(false);
    })();
  }, [taskId]);

  async function handleDel() {
    try {
      setLoading(true);

      await delTask(taskId);
      console.log("Task deleted");
      router.replace("/todo");
    } catch (error) {
      console.error("Erro ao remover tarefa:", error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <View
        style={{
          backgroundColor: "#362f49",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" />
        <Text style={{ fontSize: 18, color: "#fff", margin: 20 }}>
          Aguarde . . .
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.task}>
        <Text style={styles.label}>Detalhes da Tarefa {id}</Text>
        <Text style={styles.label}>Id: {task?.id} </Text>
        <Text style={styles.label}>Title: {task?.title} </Text>
        <Text style={styles.label}>Status: {task?.completed ? "Y" : "N"} </Text>
        <Text style={styles.label}>Status: {String(task?.completed)} </Text>
        <View
          style={{
            marginTop: 15,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Pressable
            onPress={() => {
              router.replace("/todo");
            }}
            style={{ backgroundColor: "#cacf9d", padding: 8 }}
          >
            <Text style={{ color: "#030303" }}>Voltar</Text>
          </Pressable>
          <Pressable
            // Quando o usuário pressionar, execute a função handleDel
            onPress={handleDel}
            style={{ backgroundColor: "#c27777", padding: 8 }}
          >
            <Text style={{ color: "#030303" }}>Remover</Text>
          </Pressable>
        </View>
      </View>
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
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    flexWrap: "wrap",
    backgroundColor: "#353535", // cor de fundo escura
    alignContent: "center",
    alignItems: "center",
  },
  task: {
    height: 200,
    width: 400,
    backgroundColor: "#284b63",
    padding: 10,
  },

  label: {
    fontSize: 18,
    color: "#fff",
  },
  linkStyle: {
    color: "#3498db",
    fontSize: 16,
    margin: 5,
    marginTop: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: "#3c6e71",
    borderRadius: 5,
  },
});
