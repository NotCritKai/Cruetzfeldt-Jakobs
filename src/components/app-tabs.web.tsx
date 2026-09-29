import { TabList, Tabs, TabSlot, TabTrigger, type TabTriggerSlotProps } from 'expo-router/ui';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export default function AppTabs() {
  const theme = useTheme();
  return (
    <Tabs style={[styles.tabs, { backgroundColor: theme.background }]}>
      <TabList style={[styles.tabList, { borderBottomColor: theme.backgroundSelected }]}>
        <View style={styles.brand}><ThemedText type="smallBold">CJD Guide</ThemedText></View>
        <TabTrigger name="home" href="/" asChild><TabButton>Home</TabButton></TabTrigger>
        <TabTrigger name="symptoms" href="/symptoms" asChild><TabButton>Symptoms</TabButton></TabTrigger>
        <TabTrigger name="likely-people" href="/likely-people" asChild><TabButton>Risk Factors</TabButton></TabTrigger>
      </TabList>
      <TabSlot style={styles.slot} />
    </Tabs>
  );
}

function TabButton({ children, isFocused, ...props }: TabTriggerSlotProps) {
  const theme = useTheme();
  return (
    <Pressable {...props} accessibilityRole="tab" accessibilityState={{ selected: isFocused }} style={({ pressed }) => [styles.button, { backgroundColor: isFocused ? theme.backgroundSelected : 'transparent', opacity: pressed ? 0.7 : 1 }]}>
      <ThemedText type="smallBold" themeColor={isFocused ? 'text' : 'textSecondary'}>{children}</ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tabs: { flex: 1 },
  slot: { flex: 1, minHeight: 0 },
  tabList: { width: '100%', maxWidth: MaxContentWidth + Spacing.four * 2, alignSelf: 'center', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: Spacing.two, padding: Spacing.three, borderBottomWidth: 1 },
  brand: { marginRight: 'auto', padding: Spacing.two },
  button: { minHeight: 44, justifyContent: 'center', paddingHorizontal: Spacing.three, paddingVertical: Spacing.two, borderRadius: 12 },
});
