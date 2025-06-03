import { router } from "expo-router";
import { StyledButton } from "@/components/StyledButton";
import ContentContainer from "@/components/ContentContainer";

export default function SettingsScreen() {
	const handleCustomise = () => {
		router.push("/settings/customise" as any);
	};

	return (
		<ContentContainer>
			<StyledButton text="Customise" onPress={handleCustomise} />
		</ContentContainer>
	);
}
