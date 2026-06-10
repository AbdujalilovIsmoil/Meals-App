import IconButton from "@/components/IconButton";
import List from "@/components/MealDetail/List";
import SubTitle from "@/components/MealDetail/SubTitle";
import MealDetails from "@/components/MealDetails";
import { MEALS } from "@/data/dummy-data";
import { FavouriteContext } from "@/store/context/favourite-context";
import { useNavigation } from "expo-router";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { useContext, useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const MealDetailScreen = () => {
  const favoriteMealsCtx = useContext(FavouriteContext);
  const navigation = useNavigation();
  const { mealId } = useLocalSearchParams();

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavorite = favoriteMealsCtx.ids.includes(String(mealId));

  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavourite(String(mealId));
    } else {
      favoriteMealsCtx.addFavorite(String(mealId));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            color="white"
            onPress={changeFavoriteStatusHandler}
            name={mealIsFavorite ? "star" : "star-outline"}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal?.imageUrl }} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <MealDetails
        textStyle={styles.detailText}
        duration={String(selectedMeal?.duration)}
        complexity={String(selectedMeal?.complexity)}
        affordability={String(selectedMeal?.affordability)}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List data={selectedMeal?.ingredients} />
          <SubTitle>Steps</SubTitle>
          <List data={selectedMeal?.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    height: 350,
    width: "100%",
  },
  title: {
    margin: 8,
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
