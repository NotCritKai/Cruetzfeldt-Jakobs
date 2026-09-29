import { type PropsWithChildren } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export function ContentScreen({ title, eyebrow, children }: PropsWithChildren<{
  title: string;
  eyebrow: string;
}>) {
  const theme = useTheme();
  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]} edges={['top', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.content}>
          <View style={styles.heading}>
            <ThemedText type="smallBold" themeColor="textSecondary">{eyebrow}</ThemedText>
            <ThemedText accessibilityRole="header" style={styles.title}>{title}</ThemedText>
          </View>
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  scroll: { flexGrow: 1, padding: Spacing.four, paddingBottom: Spacing.six },
  content: { width: '100%', maxWidth: MaxContentWidth, alignSelf: 'center', gap: Spacing.four },
  heading: { gap: Spacing.two, paddingTop: Spacing.three },
  title: { fontSize: 34, lineHeight: 42, fontWeight: '700' },
});
