import React, { useEffect } from "react";
import { Stack } from "expo-router";
import { HapticProvider } from "../contexts/HapticContext";
import { InvertColorsProvider } from "../contexts/InvertColorsContext";
import { useFonts } from "expo-font";
import { setStatusBarHidden } from "expo-status-bar";

function RootNavigation() {
	useFonts({
		"PublicSans-Regular": require("../assets/fonts/PublicSans-Regular.ttf"),
	});

	useEffect(() => {
		setStatusBarHidden(true, "none");
	}, []);

	return (
		<Stack
			screenOptions={{
				headerShown: false,
				animation: "none",
			}}
		></Stack>
	);
}

export default function RootLayout() {
	return (
		<HapticProvider>
			<InvertColorsProvider>
				<RootNavigation />
			</InvertColorsProvider>
		</HapticProvider>
	);
}
