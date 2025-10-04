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
import * as SplashScreen from 'expo-splash-screen';


function RootNavigation() {
    const [loaded] = useFonts({
        "PublicSans-Regular": require("../assets/fonts/PublicSans-Regular.ttf"),
    });

    const { invertColors } = useInvertColors();

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

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
