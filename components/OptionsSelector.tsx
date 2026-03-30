import { router } from "expo-router";
import ContentContainer from "./ContentContainer";
import { StyledButton } from "./StyledButton";

interface Option {
  label: string;
  value: string;
}

interface OptionsSelectorProps {
  autoBack?: boolean;
  onSelect: (value: string) => void;
  options: Option[];
  selectedValue: string;
  title: string;
}

export function OptionsSelector({
  title,
  options,
  selectedValue,
  onSelect,
  autoBack = true,
}: OptionsSelectorProps) {
  const handleSelect = (value: string) => {
    onSelect(value);
    if (autoBack) {
      router.back();
    }
  };

  return (
    <ContentContainer headerTitle={title}>
      {options.map((option) => (
        <StyledButton
          key={option.value}
          onPress={() => handleSelect(option.value)}
          text={option.label}
          underline={selectedValue === option.value}
        />
      ))}
    </ContentContainer>
  );
}
