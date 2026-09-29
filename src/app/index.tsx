import { useState } from "react";
import { Link } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";

import { ContentScreen } from "@/components/content-screen";
import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";

const informationLinks = [
  { href: "/symptoms", label: "View Symptoms" },
  { href: "/likely-people", label: "View Risk Factors" },
  { href: "/diagnosis", label: "How CJD Is Diagnosed" },
] as const;

export default function HomeScreen() {
  const theme = useTheme();
  const [pressedLink, setPressedLink] = useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [focusedLink, setFocusedLink] = useState<string | null>(null);
  return (
    <ContentScreen
      eyebrow="UNDERSTANDING CJD"
      title="Creutzfeldt-Jakob disease"
    >
      <ThemedText style={styles.intro}>
        Creutzfeldt-Jakob disease is a rare and fatal degenerative brain
        disorder. It affects the brain's ability to function properly, leading
        to rapid cognitive decline and neurological symptoms. There is currently
        no cure, and the disease progresses rapidly, often resulting in death
        within a year of onset.
      </ThemedText>
      <View style={[styles.card, { backgroundColor: theme.backgroundElement }]}>
        <ThemedText accessibilityRole="header" style={styles.cardTitle}>
          Extra Information
        </ThemedText>
        <ThemedText themeColor="textSecondary">
          Explore the symptoms, risk factors, and how CJD is diagnosed.
        </ThemedText>
        {informationLinks.map(({ href, label }) => (
          <Link key={href} href={href} asChild>
            <Pressable
              onPressIn={() => setPressedLink(href)}
              onPressOut={() => setPressedLink(null)}
              onHoverIn={() => setHoveredLink(href)}
              onHoverOut={() => setHoveredLink(null)}
              onFocus={() => setFocusedLink(href)}
              onBlur={() => setFocusedLink(null)}
              style={StyleSheet.flatten([
                styles.button,
                {
                  backgroundColor: theme.accent,
                  borderColor: focusedLink === href ? theme.text : "transparent",
                  opacity: pressedLink === href ? 0.75 : hoveredLink === href ? 0.88 : 1,
                },
              ])}
            >
              <ThemedText style={[styles.buttonLabel, { color: theme.onAccent }]}>
                {label}
              </ThemedText>
            </Pressable>
          </Link>
        ))}
      </View>
    </ContentScreen>
  );
}

const styles = StyleSheet.create({
  intro: { fontSize: 18, lineHeight: 30 },
  card: { borderRadius: 20, padding: Spacing.four, gap: Spacing.three },
  cardTitle: { fontSize: 22, lineHeight: 30, fontWeight: "600" },
  button: {
    cursor: "pointer",
    borderWidth: 2,
    width: "100%",
    minHeight: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  buttonLabel: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "700",
    textAlign: "center",
  },
});
