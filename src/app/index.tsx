import { JimNightshade_400Regular } from "@expo-google-fonts/jim-nightshade";
import { KaushanScript_400Regular } from "@expo-google-fonts/kaushan-script";
import { useFonts } from "expo-font";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    KaushanScript_400Regular,
    JimNightshade_400Regular,
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, fontsLoaded && styles.titleFont]}>
            Cruetzfeldt-Jakobs
          </Text>
        </View>
        <Text style={[styles.subtitle, fontsLoaded && styles.subtitleFont]}>
          Cruetzfeldt-Jakobs is a rare and fatal degenerative brain disorder. It
          affects the brain's ability to function properly, leading to rapid
          cognitive decline and neurological symptoms. There is currently no
          cure, and the disease progresses rapidly, often resulting in death
          within a year of onset.
        </Text>

        <Text style={[styles.learnMore, fontsLoaded && styles.subtitleFont]}>
          Want to learn more about Cruetzfeldt-Jakobs?
        </Text>
        <Text style={styles.navbarNote}>
          This is also available in the navbar
        </Text>

        <View style={styles.symptomsRow}>
          <TouchableHighlight
            accessibilityRole="button"
            onPress={() => router.navigate("/explore")}
            style={styles.symptomsButton}
            underlayColor="#DADAC0"
          >
            <Text
              style={[styles.symptomsLabel, fontsLoaded && styles.titleFont]}
            >
              Symptoms
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F5DC",
  },

  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#F5F5DC",
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    color: "#111111",
    justifyContent: "center",
    alignItems: "center",
  },

  titleFont: {
    fontFamily: "KaushanScript_400Regular",
  },

  subtitleFont: {
    fontFamily: "JimNightshade_400Regular",
  },

  subtitle: {
    marginTop: 8,
    fontSize: 20,
    lineHeight: 32,
    color: "#000000",
    justifyContent: "center",
    alignItems: "center",
  },
  symptomsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  symptomsButton: {
    minHeight: 22,
    justifyContent: "center",
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 8,
    backgroundColor: "#E6E6CE",
  },
  symptomsLabel: {
    fontSize: 15,
    color: "#111111",
  },
  navbarNote: {
    fontSize: 12,
    lineHeight: 18,
    color: "#555555",
  },
  learnMore: {
    marginTop: 128,
    fontSize: 22,
    lineHeight: 28,
    color: "#000000",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "KaushanScript_400Regular",
    fontWeight: "bold",
  },
});
