import { StyleSheet, View } from 'react-native';

import { ContentScreen } from '@/components/content-screen';
import { ExternalLink } from '@/components/external-link';
import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

const symptoms = [
  "Poor Coordination",
  "Walking and Balance Problems",
  "Confusion",
  "Delusions",
  "Problems With Thinking, Memory, and Judgment",
  "Behavior Changes (depression, mood swings, and anxiety)",
  "Speech Difficulty",
  "Insomnia or Changes in Sleeping Patterns",
  "Vision Changes",
  "Hallucinations",
  "Dizziness",
  "Tremors",
  "Weakness of the Arms and Legs",
  "Blindness",
  "Paralysis",
  "Problems Swallowing and Becoming Comatose",
];

export default function SymptomsScreen() {
  const theme = useTheme();
  return (
    <ContentScreen eyebrow="SIGNS & SYMPTOMS" title="Symptoms of CJD">
      <ThemedText themeColor="textSecondary">Symptoms vary with the type and stage of CJD and may include:</ThemedText>
      <View style={[styles.list, { backgroundColor: theme.backgroundElement }]}>
        {symptoms.map((symptom, index) => (
          <View key={symptom} style={[styles.item, index > 0 && { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: theme.backgroundSelected }]} accessible>
            <ThemedText themeColor="textSecondary" accessible={false}>•</ThemedText>
            <ThemedText style={styles.symptom}>{symptom}</ThemedText>
          </View>
        ))}
      </View>
      <ExternalLink href="https://www.cdc.gov/creutzfeldt-jakob/hcp/clinical-overview/index.html" style={[styles.source, { color: theme.textSecondary }]}>
        Source: CDC · Clinical Overview of CJD ↗
      </ExternalLink>
    </ContentScreen>
  );
}

const styles = StyleSheet.create({
  list: { borderRadius: 20, paddingHorizontal: Spacing.three },
  item: { flexDirection: 'row', alignItems: 'flex-start', gap: Spacing.three, paddingVertical: Spacing.three },
  symptom: { flex: 1 },
  source: { fontSize: 14, lineHeight: 22, textDecorationLine: 'underline', paddingVertical: 12 },
});
