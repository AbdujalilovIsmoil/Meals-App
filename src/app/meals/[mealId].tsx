import { useLocalSearchParams } from "expo-router/build/hooks";
import { Text, View } from "react-native";

const MealDetailScreen = () => {
  const { mealId } = useLocalSearchParams();

  return (
    <View>
      <Text>This is Meal Detail {mealId}</Text>
    </View>
  );
};

export default MealDetailScreen;
