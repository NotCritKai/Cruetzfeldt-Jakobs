import { NativeTabs } from "expo-router/unstable-native-tabs";
import { useColorScheme } from "react-native";

import { Colors } from "@/constants/theme";

export default function AppTabs() {
  const scheme = useColorScheme();
  const colors = Colors[scheme === "dark" ? "dark" : "light"];

  return (
    <NativeTabs
      backgroundColor={colors.background}
      indicatorColor={colors.backgroundElement}
      labelStyle={{
        selected: {
          color: colors.text,
        },
      }}
    >
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>

        <NativeTabs.Trigger.Icon
          sf={{ default: "house", selected: "house.fill" }}
          md="home"
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="symptoms">
        <NativeTabs.Trigger.Label>Symptoms</NativeTabs.Trigger.Label>

        <NativeTabs.Trigger.Icon
          sf="waveform.path.ecg"
          md="monitor_heart"
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="likely-people">
        <NativeTabs.Trigger.Label>Risk Factors</NativeTabs.Trigger.Label>

        <NativeTabs.Trigger.Icon
          sf={{ default: "person.2", selected: "person.2.fill" }}
          md="groups"
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="diagnosis">
        <NativeTabs.Trigger.Label>Diagnosis</NativeTabs.Trigger.Label>

        <NativeTabs.Trigger.Icon
          sf="stethoscope"
          md="medical_services"
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
