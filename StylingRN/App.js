import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightbluebg]}>
        <Text>LightBlue Box</Text>
      </View>
      <View style={[styles.box, styles.lightgreenbg]}>
        <Text>LightGreen Box</Text>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 60,
  },
  box: {
    padding: 20,
    width: 100,
    height: 100,
  },
  lightbluebg: {
    backgroundColor: "lightblue",
  },
  lightgreenbg: {
    backgroundColor: "lightgreen",
  },
});
