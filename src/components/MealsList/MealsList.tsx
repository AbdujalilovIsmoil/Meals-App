import { MealItemProps } from "@/types/CategoryGridTileProps";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";

interface MealsListProps {
  id: string;
  categoryIds: string[];
  title: string;
  affordability: string;
  complexity: string;
  imageUrl: string;
  duration: string | number;
  ingredients: string[];
  steps: string[];
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isLactoseFree: boolean;
}

const renderMealItem = (itemData: { item: MealItemProps }) => {
  const item = itemData.item;

  const mealItemProps: MealItemProps = {
    mealId: item.id,
    title: item.title,
    imageUrl: item.imageUrl,
    duration: item.duration,
    complexity: item.complexity,
    affordability: item.affordability,
  };

  return <MealItem {...mealItemProps} />;
};

const MealsList = ({ items }: { items: MealsListProps[] }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderMealItem}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
