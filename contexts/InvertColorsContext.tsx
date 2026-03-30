import { createContext, useContext, ReactNode, useEffect } from "react";
import * as SystemUI from "expo-system-ui";
import { usePersistedState } from "@/hooks/usePersistedState";

interface InvertColorsContextType {
    invertColors: boolean;
    setInvertColors: (value: boolean) => Promise<void>;
}

const InvertColorsContext = createContext<InvertColorsContextType>({
    invertColors: false,
    setInvertColors: async () => {},
});

export const useInvertColors = () => useContext(InvertColorsContext);

export const InvertColorsProvider = ({ children }: { children: ReactNode }) => {
    const [invertColors, setInvertColors] = usePersistedState("invertColors", false);

    useEffect(() => {
        SystemUI.setBackgroundColorAsync(invertColors ? "white" : "black").catch(() => {});
    }, [invertColors]);

    return (
        <InvertColorsContext.Provider value={{ invertColors, setInvertColors }}>
            {children}
        </InvertColorsContext.Provider>
    );
};
