import * as Haptics from "expo-haptics";

export const triggerHaptic = () =>
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
