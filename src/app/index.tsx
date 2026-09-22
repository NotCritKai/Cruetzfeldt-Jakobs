import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Home</Text>
        <Text style={styles.subtitle}>Your homepage content goes here.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#ffffff",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111111",
  },

  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: "#666666",
  },
});
