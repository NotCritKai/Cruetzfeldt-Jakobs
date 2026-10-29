import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export function useTheme() {
  const colorScheme = useColorScheme();

  if (colorScheme === 'dark') {
    return Colors.dark;
  }

  return Colors.light;
}
