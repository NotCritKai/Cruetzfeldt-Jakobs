import { useFonts } from "expo-font";
import { Link, type Href } from "expo-router";
import { SymbolView } from "expo-symbols";
import { useState } from "react";
import { Platform, Pressable, ScrollView, StyleSheet, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ExternalLink } from "@/components/external-link";
import { ThemedText, type ThemedTextProps } from "@/components/themed-text";
import { useTheme } from "@/hooks/use-theme";

export default function HomeScreen() {
  const theme = useTheme();
  const { width } = useWindowDimensions();
  const wide = Platform.OS === "web" && width >= 1000;
  const surface = theme.background === "#17221C" ? theme.backgroundElement : "#F1F2EC";
  useFonts({
    "Spline Sans": require("../../assets/fonts/SplineSans-Regular.ttf"),
    "Spline Sans Bold": require("../../assets/fonts/SplineSans-Bold.ttf"),
  });

  return (
    <SafeAreaView style={[styles.screen, { backgroundColor: theme.background }]} edges={["top", "left", "right"]}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={[styles.page, wide && styles.widePage]}>
          {!wide && <HomeText bold style={[styles.brand, { color: theme.accent }]}>CJD Guide</HomeText>}
          <View style={[styles.columns, wide && styles.wideColumns]}>
            <View style={styles.reading}>
              <View style={styles.introduction}>
                <HomeText bold accessibilityRole="header" style={[styles.title, wide && styles.wideTitle]}>
                  {wide ? "Understanding Creutzfeldt-Jakob disease" : "Understanding\nCreutzfeldt-Jakob\ndisease"}
                </HomeText>
                <HomeText themeColor="textSecondary" style={[styles.intro, wide && styles.wideIntro]}>
                  A clear guide to CJD: what it is, how it can affect people, and how it is diagnosed.
                </HomeText>
              </View>

              <View style={[styles.card, { backgroundColor: surface }]}>
                <HomeText bold accessibilityRole="header" style={styles.cardTitle}>What is CJD?</HomeText>
                <HomeText themeColor="textSecondary" style={styles.body}>
                  CJD is a rare, degenerative brain disorder that causes rapid cognitive decline and neurological symptoms. There is currently no cure.
                </HomeText>
              </View>

              <HomeText bold accessibilityRole="header" style={[styles.sectionTitle, wide && styles.wideSectionTitle]}>Extra Information</HomeText>
              <HomeLink href="/symptoms" label="Symptoms" description="Signs and changes" surface={surface} primary />
              <HomeLink href="/likely-people" label="Risk Factors" description="Who is at higher risk" surface={surface} />
              <HomeLink href="/diagnosis" label="Diagnosis" description="Assessment and testing" surface={surface} />

              <View style={styles.source}>
                <ExternalLink href="https://www.cdc.gov/creutzfeldt-jakob/about/index.html" asChild>
                  <HomeText bold style={[styles.sourceLink, { color: theme.accent }]}>Source: CDC · Creutzfeldt-Jakob Disease</HomeText>
                </ExternalLink>
                <HomeText themeColor="textSecondary" style={styles.caption}>Educational information</HomeText>
              </View>
            </View>

            {wide && (
              <View style={[styles.sidebar, { backgroundColor: theme.backgroundSelected }]}>
                <HomeText bold accessibilityRole="header" style={styles.cardTitle}>In this guide</HomeText>
                <HomeText bold style={{ color: theme.accent }}>Home</HomeText>
                <Link href="/symptoms" asChild><HomeText themeColor="textSecondary" style={styles.guideLink}>Symptoms</HomeText></Link>
                <Link href="/likely-people" asChild><HomeText themeColor="textSecondary" style={styles.guideLink}>Risk Factors</HomeText></Link>
                <Link href="/diagnosis" asChild><HomeText themeColor="textSecondary" style={styles.guideLink}>Diagnosis</HomeText></Link>
                <HomeText bold style={styles.linkTitle}>Keep exploring</HomeText>
                <HomeText themeColor="textSecondary" style={styles.sidebarBody}>Move between symptoms, risk factors, and diagnosis using the navigation above.</HomeText>
              </View>
            )}
          </View>
          {wide && <HomeText themeColor="textSecondary" style={styles.footer}>CJD Guide     /     Clear information, one topic at a time.</HomeText>}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function HomeText({ bold = false, style, ...props }: ThemedTextProps & { bold?: boolean }) {
  return (
    <ThemedText
      {...props}
      style={[
        { fontWeight: bold ? "700" : "400" },
        Platform.OS === "web" && { fontFamily: bold ? "Spline Sans Bold" : "Spline Sans" },
        style,
      ]}
    />
  );
}

type HomeLinkProps = {
  href: Href;
  label: string;
  description: string;
  surface: string;
  primary?: boolean;
};

function HomeLink({ href, label, description, surface, primary = false }: HomeLinkProps) {
  const theme = useTheme();
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [pressed, setPressed] = useState(false);
  const textColor = primary ? theme.onAccent : theme.text;
  let opacity = 1;
  if (hovered) opacity = 0.88;
  if (pressed) opacity = 0.75;

  return (
    <Link href={href} asChild>
      <Pressable
        onHoverIn={() => setHovered(true)}
        onHoverOut={() => setHovered(false)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}
        style={{
          ...styles.button,
          backgroundColor: primary ? theme.accent : surface,
          borderColor: focused ? theme.text : "transparent",
          opacity,
        }}
      >
        <View style={styles.linkCopy}>
          <HomeText bold style={[styles.linkTitle, { color: textColor }]}>{label}</HomeText>
          <HomeText style={[styles.linkDescription, { color: primary ? theme.onAccent : theme.textSecondary }]}>{description}</HomeText>
        </View>
        <SymbolView name={{ ios: "arrow.right", android: "arrow_forward", web: "arrow_forward" }} tintColor={textColor} size={20} style={styles.arrow} />
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  scroll: { flexGrow: 1 },
  page: { width: "100%", maxWidth: 748, alignSelf: "center", padding: 24, paddingBottom: 48 },
  widePage: { maxWidth: 1200, padding: 48 },
  brand: { fontSize: 18, lineHeight: 25, marginBottom: 48 },
  columns: { gap: 40 },
  wideColumns: { flexDirection: "row", alignItems: "flex-start" },
  reading: { flex: 1, minWidth: 0, gap: 20 },
  introduction: { gap: 12 },
  title: { fontSize: 34, lineHeight: 47 },
  wideTitle: { fontSize: 48, lineHeight: 66 },
  intro: { fontSize: 17, lineHeight: 23 },
  wideIntro: { fontSize: 20, lineHeight: 28 },
  card: { borderRadius: 16, padding: 20, gap: 8 },
  cardTitle: { fontSize: 20, lineHeight: 26 },
  body: { fontSize: 16, lineHeight: 25 },
  sectionTitle: { fontSize: 23, lineHeight: 32 },
  wideSectionTitle: { fontSize: 28, lineHeight: 39 },
  button: { cursor: "pointer", borderWidth: 2, borderRadius: 14, padding: 16, flexDirection: "row", alignItems: "flex-start", gap: 12, minHeight: 80 },
  linkCopy: { flex: 1, gap: 4 },
  linkTitle: { fontSize: 18, lineHeight: 25 },
  linkDescription: { fontSize: 14, lineHeight: 19 },
  arrow: { width: 20, height: 20, marginTop: 2 },
  source: { gap: 8 },
  sourceLink: { fontSize: 13, lineHeight: 18, cursor: "pointer" },
  caption: { fontSize: 12, lineHeight: 17 },
  sidebar: { width: "33%", maxWidth: 364, borderRadius: 16, padding: 24, gap: 20 },
  guideLink: { cursor: "pointer" },
  sidebarBody: { fontSize: 15, lineHeight: 21 },
  footer: { fontSize: 13, lineHeight: 18, marginTop: 80 },
});
