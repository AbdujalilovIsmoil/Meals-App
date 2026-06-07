import MealItem from "@/components/MealItem";
import { CATEGORIES, MEALS } from "@/data/dummy-data";
import { MealItemProps } from "@/types/CategoryGridTileProps";
import { useGlobalSearchParams, useNavigation } from "expo-router";
import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

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

const MealsOverView = () => {
  const navigation = useNavigation();
  const { categoryId } = useGlobalSearchParams();

  const displayedMeals = MEALS.filter((el) => {
    return el.categoryIds.includes(`${categoryId}`);
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId,
    )?.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MealsOverView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
