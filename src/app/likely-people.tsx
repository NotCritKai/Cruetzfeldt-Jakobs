import { StyleSheet, View } from 'react-native';

import { ContentScreen } from '@/components/content-screen';
import { ExternalLink } from '@/components/external-link';
import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

const factors = [
  {
    title: 'Older adults',
    description: 'Classic CJD mainly affects older adults. The average age is in the late 60s, and cases under age 30 are very rare.',
  },
  {
    title: 'Inherited gene changes',
    description: 'About 5–15% of cases are linked to an inherited mutation in the prion protein gene.',
  },
  {
    title: 'Rare medical exposures',
    description: 'Rare cases have been linked to prion-contaminated medical equipment or donated tissues, and certain historical human growth hormone treatments.',
  },
];

export default function RiskFactorsScreen() {
  const theme = useTheme();
  return (
    <ContentScreen eyebrow="EXTRA INFORMATION" title="Who is at higher risk?">
      <ThemedText themeColor="textSecondary">
        CJD is very rare. About 85% of cases occur sporadically, without a fully understood cause. These factors do not mean someone will develop the disease.
      </ThemedText>
      {factors.map(({ title, description }) => (
        <View key={title} style={[styles.card, { backgroundColor: theme.backgroundElement }]}>
          <ThemedText accessibilityRole="header" style={styles.heading}>{title}</ThemedText>
          <ThemedText>{description}</ThemedText>
        </View>
      ))}
      <ExternalLink href="https://www.cdc.gov/creutzfeldt-jakob/about/index.html" style={[styles.source, { color: theme.textSecondary }]}>
        Source: CDC · Classic Creutzfeldt-Jakob Disease
      </ExternalLink>
    </ContentScreen>
  );
}

const styles = StyleSheet.create({
  card: { borderRadius: 20, padding: Spacing.four, gap: Spacing.two },
  heading: { fontSize: 22, lineHeight: 30, fontWeight: '600' },
  source: { fontSize: 14, lineHeight: 22, textDecorationLine: 'underline', paddingVertical: 12 },
});
