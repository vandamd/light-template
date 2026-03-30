import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet } from "react-native";
import ContentContainer from "@/components/ContentContainer";
import { SearchInput } from "@/components/SearchInput";
import { n } from "@/utils/scaling";

export default function SearchScreen() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.length > 0) {
      router.push({
        pathname: "/search-results",
        params: { query },
      });
    }
  };

  return (
    <ContentContainer
      headerTitle="Search"
      hideBackButton
      onRightIconPress={handleSearch}
      rightIcon="search"
      showRightIcon={query.length > 0}
      style={styles.container}
    >
      <SearchInput
        autoFocus
        onChangeText={setQuery}
        onSubmit={handleSearch}
        placeholder="Search..."
        value={query}
      />
    </ContentContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: n(32),
    paddingBottom: n(20),
  },
});
