import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { HapticProvider } from "@/contexts/HapticContext";
import { InvertColorsProvider, useInvertColors } from "@/contexts/InvertColorsContext";
import { DisplayModeProvider } from "@/contexts/DisplayModeContext";

function RootLayout() {
    const { invertColors } = useInvertColors();

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
