import { OptionsSelector } from "@/components/OptionsSelector";
import {
  type OptionExample,
  useOptionExample,
} from "@/contexts/OptionExampleContext";

const OPTIONS = [
  { label: "Option 1", value: "option-1" },
  { label: "Option 2", value: "option-2" },
  { label: "Option 3", value: "option-3" },
];

export default function OptionExampleScreen() {
  const { optionExample, setOptionExample } = useOptionExample();

  return (
    <OptionsSelector
      onSelect={(value) => setOptionExample(value as OptionExample)}
      options={OPTIONS}
      selectedValue={optionExample}
      title="Option Example"
    />
  );
}
