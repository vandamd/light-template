import { useEffect } from "react";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { HapticProvider } from "@/contexts/HapticContext";
import { InvertColorsProvider, useInvertColors } from "@/contexts/InvertColorsContext";
import { DisplayModeProvider } from "@/contexts/DisplayModeContext";

function RootLayout() {
    const { invertColors } = useInvertColors();

    const [fontsLoaded, fontError] = useFonts({
        "PublicSans-Regular": require("../assets/fonts/PublicSans-Regular.ttf"),
    });

    useEffect(() => {
        if (fontsLoaded || fontError) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <Stack
            screenOptions={{
                headerShown: false,
                animation: "none",
                contentStyle: {
                    backgroundColor: invertColors ? "white" : "black",
                },
            }}
        />
    );
}

export default function App() {
    return (
        <InvertColorsProvider>
            <DisplayModeProvider>
                <HapticProvider>
                    <StatusBar hidden />
                    <RootLayout />
                </HapticProvider>
            </DisplayModeProvider>
        </InvertColorsProvider>
    );
}
