import { router } from "expo-router";
import { useState } from "react";
import ContentContainer from "@/components/ContentContainer";
import { SearchInput } from "@/components/SearchInput";

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
      rightAction={{
        icon: "search",
        onPress: handleSearch,
        show: query.length > 0,
      }}
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
