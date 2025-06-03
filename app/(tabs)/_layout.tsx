import React, { useMemo } from "react";
import { Tabs } from "expo-router";
import { Navbar, TabConfigItem } from "@/components/Navbar";
import { TabHeader } from "@/components/TabHeader";

export const TABS_CONFIG: ReadonlyArray<TabConfigItem> = [
	{ name: "Home", screenName: "index", iconName: "home" },
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
						<TabHeader
							headerTitle={currentTab ? currentTab.name : " "}
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
		/>
	);
}
