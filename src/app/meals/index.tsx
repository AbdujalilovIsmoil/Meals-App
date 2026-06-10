import MealsList from "@/components/MealsList/MealsList";
import { CATEGORIES, MEALS } from "@/data/dummy-data";
import { useGlobalSearchParams, useNavigation } from "expo-router";
import { useLayoutEffect } from "react";

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

  return <MealsList items={displayedMeals} />;
};

export default MealsOverView;
