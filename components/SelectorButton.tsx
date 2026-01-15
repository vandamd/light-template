import React from "react";
import { StyleSheet } from "react-native";
import { StyledText } from "./StyledText";
import { HapticPressable } from "./HapticPressable";
import { useTheme } from "@/hooks/useTheme";

interface SelectorButtonProps {
    label: string;
    value: string;
    onPress: () => void;
}

export function SelectorButton({ label, value, onPress }: SelectorButtonProps) {
    const { spacing } = useTheme();

    return (
        <HapticPressable style={[styles.button, { gap: spacing.xs }]} onPress={onPress}>
            <StyledText size="md">{label}</StyledText>
            <StyledText size="xl">{value}</StyledText>
        </HapticPressable>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: "flex-start",
    },
});
