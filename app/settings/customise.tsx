import { StyledButton } from "@/components/StyledButton";
import { SelectorButton } from "@/components/SelectorButton";
import { router } from "expo-router";
import ContentContainer from "@/components/ContentContainer";
import { useOptionExample } from "@/contexts/OptionExampleContext";

const OPTION_LABELS: Record<string, string> = {
    "option-1": "Option 1",
    "option-2": "Option 2",
    "option-3": "Option 3",
};

export default function CustomiseScreen() {
    const { optionExample } = useOptionExample();

    return (
        <ContentContainer headerTitle="Customise">
            <StyledButton
                text="Interface"
                onPress={() => router.push("/settings/customise-interface" as any)}
            />
            <SelectorButton
                label="Option Example"
                value={OPTION_LABELS[optionExample]}
                href="/settings/option-example"
            />
        </ContentContainer>
    );
}
