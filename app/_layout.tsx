import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { InvertColorsProvider, useInvertColors } from "@/contexts/InvertColorsContext";
import { OptionExampleProvider } from "@/contexts/OptionExampleContext";

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
            <OptionExampleProvider>
                <StatusBar hidden />
                <RootLayout />
            </OptionExampleProvider>
        </InvertColorsProvider>
    );
}
