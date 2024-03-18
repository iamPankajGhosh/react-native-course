import { SafeAreaView, StyleSheet, Text, View, Platform } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome!</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "plum",
  },
  container: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  box: {
    padding: 20,
  },
  text: {
    ...Platform.select({
      ios: { fontSize: 30 },
      android: { fontSize: 40 },
    }),
    fontWeight: "bold",
    textAlign: "center",
  },
});
