import { StyleSheet, Text, View } from "react-native";

const MealsOverView = () => {
  return (
    <View style={styles.container}>
      <Text>Meals Over View</Text>
    </View>
  );
};

export default MealsOverView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
