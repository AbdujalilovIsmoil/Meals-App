import { TextStyle, ViewStyle } from "react-native";

export interface CategoryGridTileProps {
  id?: string;
  title: string;
  color?: string;
  onPress?: () => void;
}

export interface MealItemProps extends CategoryGridTileProps {
  mealId?: string;
  imageUrl: string;
  style?: ViewStyle;
  complexity: string;
  textStyle?: TextStyle;
  affordability: string;
  duration: number | string;
}

export interface FavoriteState {
  ids: string[];
}