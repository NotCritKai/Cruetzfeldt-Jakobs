import { useFonts } from 'expo-font';
import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import { Platform, ScrollView, StyleSheet, useColorScheme, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ExternalLink } from '@/components/external-link';
import { ThemedText, type ThemedTextProps } from '@/components/themed-text';
import { useTheme } from '@/hooks/use-theme';

const symptomGroups = [
  {
    title: 'Thinking & memory',
    description: 'Confusion and problems with thinking, memory, and judgment.',
  },
  {
    title: 'Movement & balance',
    description: 'Poor coordination, walking and balance problems, dizziness, tremors, weakness of the arms and legs, and paralysis.',
  },
  {
    title: 'Other changes',
    description: 'Vision changes or blindness; speech difficulty; insomnia or changes in sleeping patterns; behavior changes including depression, mood swings, and anxiety; delusions; hallucinations; problems swallowing; and becoming comatose.',
  },
];

export default function SymptomsScreen() {
  const theme = useTheme();
  const dark = useColorScheme() === 'dark';
  const { width } = useWindowDimensions();
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  const wide = ready && Platform.OS === 'web' && width >= 1000;
  const background = dark ? theme.background : '#E7E9E2';
  const surface = dark ? theme.backgroundElement : '#F1F2EC';

  useFonts({
    'Spline Sans': require('../../assets/fonts/SplineSans-Regular.ttf'),
    'Spline Sans Bold': require('../../assets/fonts/SplineSans-Bold.ttf'),
  });

  return (
    <SafeAreaView style={[styles.screen, { backgroundColor: background }]} edges={['top', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={[styles.page, wide && styles.widePage]}>
          {!wide && (
            <SymptomsText bold style={[styles.brand, { color: theme.accent }]}>
              CJD Guide
            </SymptomsText>
          )}
          <View style={[styles.columns, wide && styles.wideColumns]}>
            <View style={styles.reading}>
              <View style={styles.introduction}>
                <SymptomsText bold accessibilityRole="header" style={[styles.title, wide && styles.wideTitle]}>
                  {wide ? 'Recognizing the symptoms' : 'Recognizing\nthe symptoms'}
                </SymptomsText>
                <SymptomsText themeColor="textSecondary" style={[styles.intro, wide && styles.wideIntro]}>
                  Symptoms vary with the type and stage of CJD. Explore the changes described in this guide.
                </SymptomsText>
              </View>

              {symptomGroups.map((group) => (
                <View key={group.title} style={[styles.card, { backgroundColor: surface }]}>
                  <SymptomsText bold accessibilityRole="header" style={styles.cardTitle}>
                    {group.title}
                  </SymptomsText>
                  <SymptomsText themeColor="textSecondary" style={styles.body}>
                    {group.description}
                  </SymptomsText>
                </View>
              ))}

              <View style={styles.source}>
                <ExternalLink href="https://www.cdc.gov/creutzfeldt-jakob/hcp/clinical-overview/index.html" asChild>
                  <SymptomsText bold style={{ ...styles.sourceLink, color: theme.accent }}>
                    Source: CDC · Creutzfeldt-Jakob Disease
                  </SymptomsText>
                </ExternalLink>
                <SymptomsText themeColor="textSecondary" style={styles.caption}>
                  Educational information
                </SymptomsText>
              </View>
            </View>

            {wide && (
              <View style={[styles.sidebar, { backgroundColor: theme.backgroundSelected }]}>
                <SymptomsText bold accessibilityRole="header" style={styles.cardTitle}>
                  In this guide
                </SymptomsText>
                <Link href="/" asChild>
                  <SymptomsText themeColor="textSecondary" style={styles.guideLink}>Home</SymptomsText>
                </Link>
                <SymptomsText bold style={{ color: theme.accent }}>Symptoms</SymptomsText>
                <Link href="/likely-people" asChild>
                  <SymptomsText themeColor="textSecondary" style={styles.guideLink}>Risk Factors</SymptomsText>
                </Link>
                <Link href="/diagnosis" asChild>
                  <SymptomsText themeColor="textSecondary" style={styles.guideLink}>Diagnosis</SymptomsText>
                </Link>
                <SymptomsText bold style={styles.sidebarTitle}>Keep exploring</SymptomsText>
                <SymptomsText themeColor="textSecondary" style={styles.sidebarBody}>
                  Move between symptoms, risk factors, and diagnosis using the navigation above.
                </SymptomsText>
              </View>
            )}
          </View>
          {wide && (
            <SymptomsText themeColor="textSecondary" style={styles.footer}>
              CJD Guide / Clear information, one topic at a time.
            </SymptomsText>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function SymptomsText({ bold = false, style, ...props }: ThemedTextProps & { bold?: boolean }) {
  return (
    <ThemedText
      {...props}
      style={[
        { fontWeight: bold ? '700' : '400' },
        Platform.OS === 'web' && { fontFamily: bold ? 'Spline Sans Bold' : 'Spline Sans' },
        style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  scroll: { flexGrow: 1 },
  page: { width: '100%', maxWidth: 748, alignSelf: 'center', padding: 24, paddingBottom: 48 },
  widePage: { maxWidth: 1200, padding: 48 },
  brand: { fontSize: 18, lineHeight: 25, marginBottom: 48 },
  columns: { gap: 40 },
  wideColumns: { flexDirection: 'row', alignItems: 'flex-start' },
  reading: { flex: 1, minWidth: 0, gap: 20 },
  introduction: { gap: 12 },
  title: { fontSize: 34, lineHeight: 47 },
  wideTitle: { fontSize: 48, lineHeight: 66 },
  intro: { fontSize: 17, lineHeight: 23 },
  wideIntro: { fontSize: 20, lineHeight: 28 },
  card: { borderRadius: 16, padding: 20, gap: 8 },
  cardTitle: { fontSize: 20, lineHeight: 26 },
  body: { fontSize: 16, lineHeight: 25 },
  source: { gap: 8 },
  sourceLink: { fontSize: 13, lineHeight: 18, cursor: 'pointer' },
  caption: { fontSize: 12, lineHeight: 17 },
  sidebar: { width: '33%', maxWidth: 364, borderRadius: 16, padding: 24, gap: 20 },
  guideLink: { lineHeight: 22, cursor: 'pointer' },
  sidebarTitle: { fontSize: 18, lineHeight: 25 },
  sidebarBody: { fontSize: 15, lineHeight: 21 },
  footer: { fontSize: 13, lineHeight: 18, marginTop: 80 },
});
