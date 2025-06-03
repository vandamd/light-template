import React, { ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import { Header } from "@/components/Header";
import { useInvertColors } from "@/contexts/InvertColorsContext";

interface ContentContainerProps {
	headerTitle?: string;
	children: ReactNode;
}

export default function ContentContainer({
	headerTitle,
	children,
}: ContentContainerProps) {
	const { invertColors } = useInvertColors();
	return (
		<View
			style={[
				styles.container,
				{ backgroundColor: invertColors ? "white" : "black" },
			]}
		>
			{headerTitle && <Header headerTitle={headerTitle} />}
			<View style={styles.content}>{children}</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "flex-start",
		paddingHorizontal: 37,
		paddingTop: 3,
		gap: 47,
	},
});
