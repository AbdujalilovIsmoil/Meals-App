import MealsList from "@/components/MealsList/MealsList";
import { MEALS } from "@/data/dummy-data";
import { FavoriteState } from "@/types/CategoryGridTileProps";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

const Favourite = () => {
  const favoriteMealsIds = useSelector(
    (state: { favoriteMeals: FavoriteState }) => state.favoriteMeals.ids,
  );

  const favoriteMeals = MEALS.filter((meal) => {
    return favoriteMealsIds.includes(meal.id);
  });

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
};

export default Favourite;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
  },
});
