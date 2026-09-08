import {
  View,
  Text,
  StyleSheet,
  Pressable /* Pressable é um componente do React Native para 
               detectar interações de toque. */,
} from "react-native";
import { Task } from "../types/Task";
import { router } from "expo-router";

type Props = {
  task: Task;
  onToggleDone?: (taskId: number) => void;
  onDelTask?: (taskId: number) => void;
};

export default function TaskItem({ task, onToggleDone, onDelTask }: Props) {
  return (
    <>
      <View style={styles.taskItemView}>
        <Pressable
          style={styles.taskItem}
          onPress={() => onToggleDone && onToggleDone(task.id)}
        >
          <Text style={styles.taskText}>
            {task.completed ? "[✓] " : "[ ] "}
            {task.title}
          </Text>
        </Pressable>

        <Pressable
          onPress={() =>
            router.push({
              pathname: "/details",
              params: {
                id: task.id,
              },
            })
          }
        >
          <Text style={styles.showButton}>Show</Text>
        </Pressable>

        <Pressable onPress={() => onDelTask && onDelTask(task.id)}>
          <Text style={styles.delButton}>Del</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  taskItemView: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#ccc3c3",
    borderRadius: 5,
    shadowColor: "#000",
    padding: 0,
    margin: 2,
  },
  taskItem: {
    padding: 2,
    marginVertical: 2,
    backgroundColor: "#b6beb6",

    borderRadius: 2,
  },
  taskText: {
    color: "#000",
    fontSize: 12,
    width: 150,
  },
  delButton: {
    color: "#352c2c",
    backgroundColor: "#ff6347",
    padding: 5,
    borderRadius: 5,
    width: 60,
    textAlign: "center",
  },
  showButton: {
    color: "#352c2c",
    backgroundColor: "#6a9b6e",
    padding: 5,
    borderRadius: 5,
    width: 60,
    textAlign: "center",
  },
});
