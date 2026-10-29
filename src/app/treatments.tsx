import { StyleSheet, View } from "react-native";

import { ContentScreen } from "@/components/content-screen";
import { ExternalLink } from "@/components/external-link";
import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";

const diagnosticSteps = [
  "Reviewing symptoms and how the illness has progressed",
  "Testing cerebrospinal fluid (the fluid around the brain and spinal cord)",
  "Using MRI to examine the brain",
  "Using an EEG to measure the brain’s electrical activity",
];

export default function DiagnosisScreen() {
  const theme = useTheme();
  return (
    <ContentScreen eyebrow="TESTING & DIAGNOSIS" title="Diagnosing CJD">
      <ThemedText themeColor="textSecondary">
        Healthcare professionals assess suspected CJD using the course of the
        illness and several tests:
      </ThemedText>
      <View style={[styles.list, { backgroundColor: theme.backgroundElement }]}>
        {diagnosticSteps.map((step, index) => (
          <View
            key={step}
            style={[
              styles.item,
              index > 0 && {
                borderTopWidth: StyleSheet.hairlineWidth,
                borderTopColor: theme.backgroundSelected,
              },
            ]}
            accessible
          >
            <ThemedText themeColor="textSecondary" accessible={false}>
              •
            </ThemedText>
            <ThemedText style={styles.step}>{step}</ThemedText>
          </View>
        ))}
      </View>
      <ThemedText themeColor="textSecondary">
        These findings help identify suspected CJD. Definitive confirmation
        requires testing brain tissue from a biopsy or autopsy.
      </ThemedText>
      <ExternalLink
        href="https://www.cdc.gov/creutzfeldt-jakob/about/index.html"
        style={[styles.source, { color: theme.textSecondary }]}
      >
        Source: CDC · Classic Creutzfeldt-Jakob Disease
      </ExternalLink>
    </ContentScreen>
  );
}

const styles = StyleSheet.create({
  list: { borderRadius: 20, paddingHorizontal: Spacing.three },
  item: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: Spacing.three,
    paddingVertical: Spacing.three,
  },
  step: { flex: 1 },
  source: {
    fontSize: 14,
    lineHeight: 22,
    textDecorationLine: "underline",
    paddingVertical: 12,
  },
});
