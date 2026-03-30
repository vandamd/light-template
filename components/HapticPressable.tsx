import { Pressable, PressableProps } from "react-native";
import { triggerHaptic } from "@/utils/haptics";

export const HapticPressable = (props: PressableProps) => {
    return (
        <Pressable
            {...props}
            onPress={(event) => {
                triggerHaptic();
                props.onPress?.(event);
            }}
            android_disableSound={true}
        />
    );
};

