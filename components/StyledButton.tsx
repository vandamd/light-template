import React from "react";
import { StyleSheet } from "react-native";
import { StyledText } from "./StyledText";
import { HapticPressable } from "./HapticPressable";

interface ButtonProps {
    text: string;
    onPress?: () => void;
}

export function StyledButton({ text, onPress }: ButtonProps) {
    return (
        <HapticPressable style={styles.button} onPress={onPress}>
            <StyledText style={styles.buttonText}>{text}</StyledText>
        </HapticPressable>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-start",
        flexShrink: 0,
    },
    buttonText: {
        fontSize: 30,
        flexShrink: 0,
    },
});

