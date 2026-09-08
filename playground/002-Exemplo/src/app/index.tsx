import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, Text } from "react-native";
import { Link } from "expo-router";

export default function ToDoScreen() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Link href="/" style={styles.linkStyle}>
          Home
        </Link>
        <Link href="/about" style={styles.linkStyle}>
          About
        </Link>
        <Link href="/todo" style={styles.linkStyle}>
          To Do App
        </Link>
        <Link href="/theansweris42" style={styles.linkStyle}>
          The Answer is 42
        </Link>
      </View>

      <Image
        source={require("../assets/images/lion.png")}
        style={{ width: 200, height: 200, marginTop: 20, borderRadius: 200 }}
      ></Image>
      <Text
        style={{
          color: "#ffffff",
          marginTop: 10,
          fontSize: 40,
        }}
      >
        Dev Mobile
      </Text>
      <Image
        source={{
          uri: "https://cdn.pixabay.com/photo/2016/08/28/11/39/mobile-1625717_1280.jpg",
        }}
        style={{
          width: "75%",
          height: 200,
          marginTop: 10,
          borderRadius: 5,
          borderWidth: 2,
          borderColor: "#3b3852",
        }}
      ></Image>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    backgroundColor: "#121212", // cor de fundo escura
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50, // espaço interno para evitar que o texto encoste nas bordas
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
