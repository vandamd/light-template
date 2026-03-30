import { useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";
import { CenteredMessage } from "@/components/CenteredMessage";
import ContentContainer from "@/components/ContentContainer";
import CustomScrollView from "@/components/CustomScrollView";
import { ListItem } from "@/components/ListItem";
import { Separator } from "@/components/Separator";
import { n } from "@/utils/scaling";

interface SearchResult {
  id: string;
  subtitle: string;
  title: string;
}

function search(query: string): SearchResult[] {
  // Example search - replace with your actual search logic
  const mockData: SearchResult[] = [
    { id: "1", title: "Example Result 1", subtitle: "Description here" },
    { id: "2", title: "Example Result 2", subtitle: "Another description" },
    { id: "3", title: "Example Result 3", subtitle: "More details" },
  ];

  return mockData.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(query.toLowerCase())
  );
}

export default function SearchResultsScreen() {
  const { query } = useLocalSearchParams<{ query: string }>();

  const results = query ? search(query) : [];

  const handleItemPress = (_item: SearchResult) => {
    // Navigate to detail screen
    // router.push({ pathname: "/detail/[id]", params: { id: item.id } });
  };

  if (!query) {
    return <ContentContainer headerTitle=" " style={styles.container} />;
  }

  return (
    <ContentContainer
      headerTitle={`Results for "${query}"`}
      style={styles.container}
    >
      {results.length > 0 ? (
        <CustomScrollView
          data={results}
          ItemSeparatorComponent={() => <Separator />}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ListItem
              onPress={() => handleItemPress(item)}
              primaryText={item.title}
              secondaryText={item.subtitle}
            />
          )}
        />
      ) : (
        <CenteredMessage message={`No results found for "${query}"`} />
      )}
    </ContentContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: n(20),
  },
});
