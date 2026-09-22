import {
  JimNightshade_400Regular,
  useFonts,
} from "@expo-google-fonts/jim-nightshade";
import { KaushanScript_400Regular } from "@expo-google-fonts/kaushan-script";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    JimNightshade_400Regular,
    KaushanScript_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Creutzfeldt-Jakob Disease (CJD)</Text>

      <Text style={styles.subtitle}>
        Creutzfeldt-Jakob Disease (CJD) is a rare, degenerative, and fatal brain
        disorder. It is caused by abnormal prion proteins that lead to rapid
        neurodegeneration. CJD can occur sporadically, be inherited, or result
        from exposure to infected tissue. Symptoms include memory loss,
        personality changes, and motor dysfunction. There is currently no cure,
        and treatment focuses on alleviating symptoms and providing supportive
        care.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
    backgroundColor: "#F5F5DC",
  },
  title: {
    fontSize: 80,
    marginBottom: 20,
    fontFamily: "JimNightshade_400Regular",
  },
  subtitle: {
    fontSize: 30,
    fontFamily: "KaushanScript_400Regular",
  },
});
