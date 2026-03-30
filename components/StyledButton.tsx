import { StyleSheet } from "react-native";
import { n } from "@/utils/scaling";
import { HapticPressable } from "./HapticPressable";
import { StyledText } from "./StyledText";

interface ButtonProps {
  onPress?: () => void;
  text: string;
  underline?: boolean;
}

export function StyledButton({
  text,
  onPress,
  underline = false,
}: ButtonProps) {
  return (
    <HapticPressable onPress={onPress} style={styles.button}>
      <StyledText
        numberOfLines={1}
        style={[styles.buttonText, underline && styles.underline]}
      >
        {text}
      </StyledText>
    </HapticPressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  buttonText: {
    fontSize: n(30),
  },
  underline: {
    textDecorationLine: "underline",
  },
});
