import { OptionsSelector } from "@/components/OptionsSelector";
import { useOptionExample, OptionExample } from "@/contexts/OptionExampleContext";

const OPTIONS = [
    { label: "Option 1", value: "option-1" },
    { label: "Option 2", value: "option-2" },
    { label: "Option 3", value: "option-3" },
];

export default function OptionExampleScreen() {
    const { optionExample, setOptionExample } = useOptionExample();

    return (
        <OptionsSelector
            title="Option Example"
            options={OPTIONS}
            selectedValue={optionExample}
            onSelect={(value) => setOptionExample(value as OptionExample)}
        />
    );
}
