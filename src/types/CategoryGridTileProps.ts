export interface CategoryGridTileProps {
  id?: string;
  title: string;
  color?: string;
  onPress?: () => void;
}

export interface MealItemProps extends CategoryGridTileProps {
  mealId?: string;
  imageUrl: string;
  complexity: string;
  affordability: string;
  duration: number | string;
}
