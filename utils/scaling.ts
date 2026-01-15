import { PixelRatio } from "react-native";

const BASELINE_DENSITY = 2.55;

export const getDensityNormalization = () => BASELINE_DENSITY / PixelRatio.get();

export const n = (size: number) => size * getDensityNormalization();
