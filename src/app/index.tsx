import CategoryGridTile from "@/components/CategoryGridTile";
import { CATEGORIES } from "@/data/dummy-data";
import { CategoryGridTileProps } from "@/types/CategoryGridTileProps";
import { useRouter } from "expo-router";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const renderCategoryItem = ({ item }: { item: CategoryGridTileProps }) => {
  const router = useRouter();

  const pressHandler = (item: CategoryGridTileProps) => {
    router.push({
      pathname: "/meals",
      params: {
        categoryId: item.id,
      },
    });
  };

  return (
    <CategoryGridTile
      title={item.title}
      color={item.color}
      onPress={() => pressHandler(item)}
    />
  );
};

const CategoriesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={2}
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
      />
    </SafeAreaView>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
