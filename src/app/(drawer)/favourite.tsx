import MealsList from "@/components/MealsList/MealsList";
import { MEALS } from "@/data/dummy-data";
import { FavouriteContext } from "@/store/context/favourite-context";
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

const Favourite = () => {
  const favoriteMealsCtx = useContext(FavouriteContext);

  const favoriteMeals = MEALS.filter((meal) => {
    return favoriteMealsCtx.ids.includes(meal.id);
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
    color: "white",
    fontWeight: "bold",
  },
});
