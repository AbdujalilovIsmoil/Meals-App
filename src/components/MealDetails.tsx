import { MealItemProps } from "@/types/CategoryGridTileProps";
import { StyleSheet, Text, View } from "react-native";

type Props = Pick<MealItemProps, "duration" | "complexity" | "affordability" | "style" | "textStyle">;

const MealDetails = ({ duration, complexity, affordability, style, textStyle }: Props) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  detailItem: {
    fontSize: 12,
    marginHorizontal: 4,
  },
});
