import { ContentScreen } from '@/components/content-screen';
import { ThemedText } from '@/components/themed-text';

export default function SettingsScreen() {
  return (
    <ContentScreen eyebrow="PREFERENCES" title="Settings">
      <ThemedText themeColor="textSecondary">Appearance follows your device’s light or dark mode.</ThemedText>
    </ContentScreen>
  );
}
