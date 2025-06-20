import React, { useEffect } from "react";
import { Stack } from "expo-router";
import { HapticProvider } from "../contexts/HapticContext";
import { useFonts } from "expo-font";
import { setStatusBarHidden } from "expo-status-bar";
import {
	InvertColorsProvider,
	useInvertColors,
} from "@/contexts/InvertColorsContext";
import * as SystemUI from "expo-system-ui";
import * as NavigationBar from 'expo-navigation-bar';


function RootNavigation() {
	useFonts({
		"PublicSans-Regular": require("../assets/fonts/PublicSans-Regular.ttf"),
	});

    const { invertColors } = useInvertColors();
	useEffect(() => {
		setStatusBarHidden(true, "none");
        const newColor = invertColors ? "#FFFFFF" : "#000000";
		SystemUI.setBackgroundColorAsync(newColor);

	}, [invertColors]);

    NavigationBar.setVisibilityAsync("hidden");

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
