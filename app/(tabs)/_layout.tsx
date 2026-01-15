import React from "react";
import { Tabs } from "expo-router";
import { Navbar, TabConfigItem } from "@/components/Navbar";
import { Header } from "@/components/Header";

export const TABS_CONFIG: ReadonlyArray<TabConfigItem> = [
    { name: "Liked Songs", screenName: "index", iconName: "home" },
    { name: "Settings", screenName: "settings", iconName: "settings" },
] as const;

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={({ route }) => ({
                header: () => {
                    const currentTab = TABS_CONFIG.find(
                        (t) => t.screenName === route.name
                    );
                    return (
                        <Header
                            headerTitle={currentTab ? currentTab.name : " "}
                            hideBackButton
                        />
                    );
                },
                animation: "none",
            })}
            tabBar={(props) => {
                const activeScreenName =
                    props.state.routes[props.state.index].name;
                return (
                    <Navbar
                        tabsConfig={TABS_CONFIG}
                        currentScreenName={activeScreenName}
                        navigation={props.navigation}
                    />
                );
            }}
        >
            <Tabs.Screen name="index" />
            <Tabs.Screen name="settings" />
        </Tabs>
    );
}
