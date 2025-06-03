import React from "react";
import { StyledButton } from "@/components/StyledButton";
import { router } from "expo-router";
import ContentContainer from "@/components/ContentContainer";

export default function CustomiseTabsScreen() {
	const handleCustomiseInterface = () => {
		router.push("/settings/customise-interface" as any);
	};

	return (
		<ContentContainer headerTitle="Customise">
			<StyledButton text="Interface" onPress={handleCustomiseInterface} />
		</ContentContainer>
	);
}
