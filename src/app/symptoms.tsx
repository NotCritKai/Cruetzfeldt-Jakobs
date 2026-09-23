import { JimNightshade_400Regular } from "@expo-google-fonts/jim-nightshade";
import {
  KaushanScript_400Regular,
  useFonts,
} from "@expo-google-fonts/kaushan-script";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const symptoms = [
  "Declining memory and thinking ability",
  "Changes in personality or behaviour",
  "Trouble with balance, walking and coordination",
  "Speech that becomes slurred",
  "Changes in vision, sometimes progressing to blindness",
  "Involuntary muscle jerks or spasms",
  "Difficulty swallowing as the disease advances",
];

export default function Symptoms() {
  const [fontsLoaded] = useFonts({
    KaushanScript_400Regular,
    JimNightshade_400Regular,
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, fontsLoaded && styles.titleFont]}>
            Symptoms of CJD
          </Text>
        </View>

        <ScrollView contentContainerStyle={styles.list}>
          <Text
            style={[styles.description, fontsLoaded && styles.subtitleFont]}
          >
            Symptoms vary with the type and stage of CJD and may include:
          </Text>
          {symptoms.map((symptom) => (
            <View key={symptom} style={styles.listItem} accessible>
              <Text style={styles.bullet}>•</Text>
              <Text
                style={[styles.symptomText, fontsLoaded && styles.subtitleFont]}
              >
                {symptom}
              </Text>
            </View>
          ))}
          <Text style={styles.source}>
            Source: NHS — Creutzfeldt-Jakob disease
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  list: {
    paddingTop: 20,
    paddingBottom: 32,
    gap: 12,
  },
  description: {
    fontSize: 24,
    lineHeight: 32,
    color: "#111111",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  bullet: {
    fontSize: 25,
    lineHeight: 26,
    color: "#111111",
  },
  symptomText: {
    flex: 1,
    fontSize: 20,
    lineHeight: 32,
    color: "#111111",
  },
  source: {
    marginTop: 8,
    fontSize: 12,
    color: "#555555",
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    color: "#111111",
  },
  titleFont: {
    fontFamily: "KaushanScript_400Regular",
  },
  subtitleFont: {
    fontFamily: "JimNightshade_400Regular",
  },
});
