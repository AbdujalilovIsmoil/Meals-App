import { StyleSheet, Text, View } from "react-native";

const List = ({ data }: any) => {
  return data.map((dataPoint: string) => {
    return (
      <View key={dataPoint} style={styles.listItem}>
        <Text style={styles.itemText}>{dataPoint}</Text>
      </View>
    );
  });
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    marginVertical: 4,
    paddingVertical: 4,
    marginHorizontal: 12,
    paddingHorizontal: 8,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
