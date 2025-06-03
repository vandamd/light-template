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
}

export function Header({
	iconName,
	onIconPress,
	iconShowLength = 1,
	headerTitle,
	backEvent,
}: HeaderProps) {
	const { invertColors } = useInvertColors();
	const handleBack = backEvent
		? backEvent
		: () => {
				if (router.canGoBack()) {
					router.back();
				} else {
					router.replace("/");
				}
		  };

	return (
		<View
			style={[
				styles.header,
				{ backgroundColor: invertColors ? "white" : "black" },
			]}
		>
			<HapticPressable onPress={handleBack}>
				<View style={{ width: 32, height: 32, alignItems: "center" }}>
					<MaterialIcons
						name="arrow-back-ios"
						size={28}
						color={invertColors ? "black" : "white"}
					/>
				</View>
			</HapticPressable>
			<StyledText
				style={[
					styles.title,
					{ color: invertColors ? "black" : "white" },
				]}
				numberOfLines={1}
			>
				{headerTitle}
			</StyledText>
			{iconShowLength > 0 && iconName ? (
				<HapticPressable onPress={onIconPress}>
					<View
						style={{ width: 32, height: 32, alignItems: "center" }}
					>
						<MaterialIcons
							name={iconName}
							size={28}
							color={invertColors ? "black" : "white"}
						/>
					</View>
				</HapticPressable>
			) : (
				<View
					style={{ width: 32, height: 32, alignItems: "center" }}
				></View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 22,
		paddingVertical: 10,
		zIndex: 1,
	},
	title: {
		fontSize: 20,
		fontFamily: "PublicSans-Regular",
		paddingBottom: 10,
		maxWidth: "75%",
	},
});
