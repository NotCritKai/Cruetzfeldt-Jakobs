import { type ReactNode } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { MaxContentWidth } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type ContentScreenProps = {
  title: string;
  eyebrow: string;
  children: ReactNode;
};

export function ContentScreen({ title, eyebrow, children }: ContentScreenProps) {
  const theme = useTheme();
  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme.background }]}
      edges={['top', 'left', 'right']}
    >
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.content}>
          <View style={styles.heading}>
            <ThemedText type="smallBold" themeColor="textSecondary">
              {eyebrow}
            </ThemedText>
            <ThemedText accessibilityRole="header" style={styles.title}>
              {title}
            </ThemedText>
          </View>
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
    padding: 24,
    paddingBottom: 64,
  },
  content: {
    width: '100%',
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    gap: 24,
  },
  heading: {
    gap: 8,
    paddingTop: 16,
  },
  title: {
    fontSize: 34,
    lineHeight: 42,
    fontWeight: '700',
  },
});
