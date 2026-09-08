import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function TelaSobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>❌</Text>
      <Link href="/" style={styles.linkStyle}>
        Home
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#342e2e",
  },
  text: {
    color: "#fff",
    fontSize: 12,
  },
  linkStyle: {
    color: "#3498db",
    fontSize: 16,
    margin: 5,
    marginTop: 15,
    padding: 5,
    borderWidth: 1,
    borderColor: "#37343f",
    borderRadius: 5,
  },
});
