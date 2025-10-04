import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { StyledText } from "./StyledText";
import { HapticPressable } from "./HapticPressable";
import { useRouter } from "expo-router";
import { useInvertColors } from "@/contexts/InvertColorsContext";

interface TabHeaderProps {
    leftIconName?: keyof typeof MaterialIcons.glyphMap;
    leftOnIconPress?: () => void;
    rightIconName?: keyof typeof MaterialIcons.glyphMap;
    rightOnIconPress?: () => void;
    iconShowLength?: number;
    headerTitle?: string;
    hideWaveformButton?: boolean;
    hidePlayingButton?: boolean;
}

export function TabHeader({
    leftIconName,
    leftOnIconPress,
    rightIconName,
    rightOnIconPress,
    headerTitle,
}: TabHeaderProps) {
    const router = useRouter();
    const { invertColors } = useInvertColors();

    return (
        <View
            style={[
                styles.header,
                { backgroundColor: invertColors ? "white" : "black" },
            ]}
        >
            {leftIconName ? (
                <HapticPressable onPress={leftOnIconPress}>
                    <View style={[styles.button]}>
                        <MaterialIcons
                            name={leftIconName}
                            size={32}
                            color={invertColors ? "black" : "white"}
                        />
                    </View>
                </HapticPressable>
            ) : (
                <View style={[styles.button]} />
            )}
            <StyledText style={[styles.title]} numberOfLines={1}>{headerTitle}</StyledText>
            {rightIconName ? (
                <HapticPressable onPress={rightOnIconPress}>
                    <View style={[styles.button]}>
                        <MaterialIcons
                            name={rightIconName}
                            size={32}
                            color={invertColors ? "black" : "white"}
                        />
                    </View>
                </HapticPressable>
            ) : (
                <View style={[styles.button]} />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 23,
        paddingTop: 4,
        paddingBottom: 5,
        zIndex: 1,
    },
    title: {
        fontSize: 20,
        fontFamily: "PublicSans-Regular",
        paddingTop: 2,
        maxWidth: "75%",
        flexShrink: 0,
    },
    button: {
        width: 32,
        height: 32,
        alignItems: "center",
        paddingTop: 6,
        paddingRight: 4,
    },
});

