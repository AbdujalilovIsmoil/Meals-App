import MealDetails from "@/components/MealDetails";
import { MEALS } from "@/data/dummy-data";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { Image, Text, View } from "react-native";

const MealDetailScreen = () => {
  const { mealId } = useLocalSearchParams();

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>
      <Image source={{ uri: selectedMeal?.imageUrl }} />
      <Text>{selectedMeal?.title}</Text>
      <MealDetails
        duration={String(selectedMeal?.duration)}
        complexity={String(selectedMeal?.complexity)}
        affordability={String(selectedMeal?.affordability)}
      />
      <Text>Ingredients</Text>
      {selectedMeal?.ingredients.map((ingredient) => {
        return <Text key={ingredient}>{ingredient}</Text>;
      })}
      <Text>Steps</Text>
      {selectedMeal?.steps.map((step) => {
        return <Text key={step}>{step}</Text>;
      })}
    </View>
  );
};

export default MealDetailScreen;
