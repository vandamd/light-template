import React from "react";
import { StyleSheet } from "react-native";
import { StyledText } from "./StyledText";
import { HapticPressable } from "./HapticPressable";
import { useInvertColors } from "@/contexts/InvertColorsContext";

interface ButtonProps {
	text: string;
	onPress?: () => void;
}

export function StyledButton({ text, onPress }: ButtonProps) {
	const { invertColors } = useInvertColors();

	return (
		<HapticPressable style={styles.button} onPress={onPress}>
			<StyledText
				style={[
					styles.buttonText,
					{ color: invertColors ? "black" : "white" },
				]}
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
		fontSize: 30,
	},
});
