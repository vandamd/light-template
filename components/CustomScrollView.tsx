import React, { useState, useRef } from "react";
import {
    FlatList,
    View,
    Animated,
    StyleSheet,
    FlatListProps,
    NativeSyntheticEvent,
    NativeScrollEvent,
} from "react-native";
import { useInvertColors } from "@/contexts/InvertColorsContext";

interface CustomScrollViewProps<T = any> extends FlatListProps<T> {
    // We can add any custom props here if needed in the future
}

const CustomScrollView = <T,>({
    style,
    contentContainerStyle,
    ...rest
}: CustomScrollViewProps<T>) => {
    const { invertColors } = useInvertColors();
    const [contentHeight, setContentHeight] = useState<number>(0);
    const [scrollViewHeight, setScrollViewHeight] = useState<number>(0);
    const scrollY = useRef(new Animated.Value(0)).current;

    const scrollIndicatorHeight =
        scrollViewHeight > 0 &&
            contentHeight > 0 &&
            contentHeight > scrollViewHeight
            ? Math.max(
                (scrollViewHeight * scrollViewHeight) / contentHeight,
                20
            ) // Min height of 20
            : 0;

    const scrollIndicatorPosition =
        contentHeight > scrollViewHeight && scrollIndicatorHeight > 0
            ? scrollY.interpolate({
                inputRange: [0, contentHeight - scrollViewHeight],
                outputRange: rest.inverted
                    ? [scrollViewHeight - scrollIndicatorHeight, 0]
                    : [0, scrollViewHeight - scrollIndicatorHeight],
                extrapolate: "clamp",
            })
            : 0;

    const handleScroll = Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        {
            useNativeDriver: false,
            listener: (event: NativeSyntheticEvent<NativeScrollEvent>) => {
                if (rest.onScroll) {
                    rest.onScroll(event);
                }
            },
        }
    );

    return (
        <View style={styles.container}>
            <FlatList
                style={[{ width: "100%" }, style]}
                contentContainerStyle={[{ flexGrow: 1 }, contentContainerStyle]}
                showsVerticalScrollIndicator={false}
                overScrollMode="never"
                onContentSizeChange={(width, height) => {
                    setContentHeight(height);
                    if (rest.onContentSizeChange) {
                        rest.onContentSizeChange(width, height);
                    }
                }}
                onLayout={(event) => {
                    const { height } = event.nativeEvent.layout;
                    setScrollViewHeight(height);
                    if (rest.onLayout) {
                        rest.onLayout(event);
                    }
                }}
                onScroll={handleScroll}
                scrollEventThrottle={16}
                {...rest}
            />
            {scrollIndicatorHeight > 0 && (
                <View
                    style={[
                        styles.scrollIndicatorTrack,
                        { transform: [{ translateX: 1 }] },
                        { backgroundColor: invertColors ? "black" : "white" },
                    ]}
                >
                    <Animated.View
                        style={[
                            styles.scrollIndicatorThumb,
                            {
                                backgroundColor: invertColors
                                    ? "black"
                                    : "white",
                            },
                            {
                                height: scrollIndicatorHeight,
                                transform: [
                                    {
                                        translateY:
                                            scrollIndicatorPosition as any,
                                    },
                                ],
                            },
                        ]}
                    />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        width: "100%",
    },
    scrollIndicatorTrack: {
        width: 1,
        height: "100%",
        position: "absolute",
        right: -2,
    },
    scrollIndicatorThumb: {
        width: 5,
        position: "absolute",
        right: -2,
    },
});

export default CustomScrollView;
