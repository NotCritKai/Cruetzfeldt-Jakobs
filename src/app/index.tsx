import { Link } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import { ContentScreen } from '@/components/content-screen';
import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export default function HomeScreen() {
  const theme = useTheme();
  return (
    <ContentScreen eyebrow="UNDERSTANDING CJD" title="Creutzfeldt-Jakob disease">
      <ThemedText style={styles.intro}>
        Creutzfeldt-Jakob disease is a rare and fatal degenerative brain disorder. It
        affects the brain's ability to function properly, leading to rapid
        cognitive decline and neurological symptoms. There is currently no
        cure, and the disease progresses rapidly, often resulting in death
        within a year of onset.
      </ThemedText>
      <View style={[styles.card, { backgroundColor: theme.backgroundElement }]}>
        <ThemedText accessibilityRole="header" style={styles.cardTitle}>Extra Information</ThemedText>
        <ThemedText themeColor="textSecondary">Learn more about CJD, starting with its signs and symptoms.</ThemedText>
        <Link href="/symptoms" asChild>
          <Pressable style={({ pressed }) => [styles.button, { backgroundColor: theme.accent, opacity: pressed ? 0.75 : 1 }]}>
            <ThemedText style={[styles.buttonLabel, { color: theme.onAccent }]}>View Symptoms</ThemedText>
          </Pressable>
        </Link>
      </View>
    </ContentScreen>
  );
}

const styles = StyleSheet.create({
  intro: { fontSize: 18, lineHeight: 30 },
  card: { borderRadius: 20, padding: Spacing.four, gap: Spacing.three },
  cardTitle: { fontSize: 22, lineHeight: 30, fontWeight: '600' },
  button: { width: '100%', minHeight: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 14, paddingHorizontal: 24, paddingVertical: 16 },
  buttonLabel: { fontSize: 20, lineHeight: 28, fontWeight: '700', textAlign: 'center' },
});
