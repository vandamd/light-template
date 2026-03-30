import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function usePersistedState<T>(key: string, defaultValue: T) {
    const [value, setValue] = useState<T>(defaultValue);

    useEffect(() => {
        AsyncStorage.getItem(key).then((stored) => {
            if (stored !== null) {
                setValue(JSON.parse(stored));
            }
        });
    }, [key]);

    const setPersistedValue = async (newValue: T) => {
        setValue(newValue);
        await AsyncStorage.setItem(key, JSON.stringify(newValue));
    };

    return [value, setPersistedValue] as const;
}
