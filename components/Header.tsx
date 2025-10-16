import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { router } from "expo-router";
import { StyledText } from "./StyledText";
import { HapticPressable } from "./HapticPressable";
import { useInvertColors } from "@/contexts/InvertColorsContext";

interface HeaderProps {
    iconName?: keyof typeof MaterialIcons.glyphMap;
    onIconPress?: () => void;
    iconShowLength?: number;
    headerTitle?: string;
    backEvent?: () => void;
    hideBackButton?: boolean;
    leadingIcon?: React.ReactNode;
}

export function Header({
    iconName,
    onIconPress,
    iconShowLength = 1,
    headerTitle,
    backEvent,
    hideBackButton = false,
    leadingIcon,
}: HeaderProps) {
    const { invertColors } = useInvertColors();
    const handleBack = backEvent
        ? backEvent
        : () => {
            if (router.canGoBack()) {
                router.back();
            }
        };

    return (
        <View
            style={[
                styles.header,
                { backgroundColor: invertColors ? "white" : "black" },
            ]}
        >
            {!hideBackButton ? (
                <HapticPressable onPress={handleBack}>
                    <View style={[styles.button]}>
                        <MaterialIcons
                            name="arrow-back-ios"
                            size={28}
                            color={invertColors ? "black" : "white"}
                        />
                    </View>
                </HapticPressable>
            ) : (
                <View style={[styles.button]} />
            )}

            <View style={styles.titleContainer}>
                {leadingIcon}
                <StyledText style={[styles.title]} numberOfLines={1}>
                    {headerTitle}
                </StyledText>
            </View>
            {iconShowLength > 0 && iconName ? (
                <HapticPressable onPress={onIconPress}>
                    <View style={[styles.button]}>
                        <MaterialIcons
                            name={iconName}
                            size={28}
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
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        maxWidth: "75%",
    },
    title: {
        fontSize: 20,
        fontFamily: "PublicSans-Regular",
        paddingTop: 2,
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

