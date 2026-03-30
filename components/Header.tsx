import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import { useInvertColors } from "@/contexts/InvertColorsContext";
import { n } from "@/utils/scaling";
import { HapticPressable } from "./HapticPressable";
import { StyledText } from "./StyledText";

interface HeaderProps {
  headerTitle?: string;
  hideBackButton?: boolean;
  leftIcon?: keyof typeof MaterialIcons.glyphMap;
  onBackPress?: () => void;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
  rightIcon?: keyof typeof MaterialIcons.glyphMap;
}

export function Header({
  headerTitle,
  hideBackButton = false,
  onBackPress,
  leftIcon,
  onLeftIconPress,
  rightIcon,
  onRightIconPress,
}: HeaderProps) {
  const { invertColors } = useInvertColors();
  const iconColor = invertColors ? "black" : "white";

  const handleBack =
    onBackPress ??
    (() => {
      if (router.canGoBack()) {
        router.back();
      }
    });

  const renderLeftButton = () => {
    if (!hideBackButton) {
      return (
        <HapticPressable onPress={handleBack}>
          <View style={styles.button}>
            <MaterialIcons
              color={iconColor}
              name="arrow-back-ios"
              size={n(28)}
            />
          </View>
        </HapticPressable>
      );
    }
    if (leftIcon) {
      return (
        <HapticPressable onPress={onLeftIconPress}>
          <View style={styles.button}>
            <MaterialIcons color={iconColor} name={leftIcon} size={n(28)} />
          </View>
        </HapticPressable>
      );
    }
    return <View style={styles.button} />;
  };

  const renderRightButton = () => {
    if (rightIcon) {
      return (
        <HapticPressable onPress={onRightIconPress}>
          <View style={styles.button}>
            <MaterialIcons color={iconColor} name={rightIcon} size={n(28)} />
          </View>
        </HapticPressable>
      );
    }
    return <View style={styles.button} />;
  };

  return (
    <View
      style={[
        styles.header,
        { backgroundColor: invertColors ? "white" : "black" },
      ]}
    >
      {renderLeftButton()}
      <StyledText numberOfLines={1} style={styles.title}>
        {headerTitle}
      </StyledText>
      {renderRightButton()}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: n(22),
    paddingVertical: n(5),
    zIndex: 1,
  },
  title: {
    fontSize: n(20),
    fontFamily: "PublicSans-Regular",
    paddingTop: n(2),
    maxWidth: "75%",
  },
  button: {
    width: n(32),
    height: n(32),
    alignItems: "center",
    paddingTop: n(6),
    paddingRight: n(4),
  },
});
