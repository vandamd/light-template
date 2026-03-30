import type { MaterialIcons } from "@expo/vector-icons";
import type { ReactNode } from "react";
import { type StyleProp, StyleSheet, View, type ViewStyle } from "react-native";
import { Header } from "@/components/Header";
import { useInvertColors } from "@/contexts/InvertColorsContext";
import { n } from "@/utils/scaling";

interface ContentContainerProps {
  children?: ReactNode;
  headerTitle?: string;
  hideBackButton?: boolean;
  onRightIconPress?: () => void;
  rightIcon?: keyof typeof MaterialIcons.glyphMap;
  showRightIcon?: boolean;
  style?: StyleProp<ViewStyle>;
}

export default function ContentContainer({
  headerTitle,
  children,
  hideBackButton = false,
  rightIcon,
  showRightIcon = true,
  onRightIconPress,
  style,
}: ContentContainerProps) {
  const { invertColors } = useInvertColors();
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: invertColors ? "white" : "black" },
      ]}
    >
      {headerTitle && (
        <Header
          headerTitle={headerTitle}
          hideBackButton={hideBackButton}
          onRightIconPress={onRightIconPress}
          rightIcon={showRightIcon ? rightIcon : undefined}
        />
      )}
      <View style={[styles.content, style]}>{children ?? null}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: n(37),
    paddingTop: n(14),
    gap: n(47),
  },
});
