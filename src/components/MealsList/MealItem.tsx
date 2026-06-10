import { MealItemProps } from "@/types/CategoryGridTileProps";
import { useRouter } from "expo-router";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MealDetails from "../MealDetails";

const MealItem = ({
  mealId,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}: MealItemProps) => {
  const router = useRouter();

  const selectMealItemHandler = () => {
    router.push({
      pathname: `/meals/[mealId]`,
      params: {
        mealId: String(mealId),
      },
    });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={selectMealItemHandler}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    elevation: 4,
    borderRadius: 8,
    shadowRadius: 16,
    shadowOpacity: 0.35,
    shadowColor: "black",
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    height: 200,
    width: "100%",
  },
  title: {
    margin: 8,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
