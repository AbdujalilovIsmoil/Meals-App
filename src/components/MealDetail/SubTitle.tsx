import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface SubTitleProps {
  children: React.ReactNode;
}

const SubTitle = ({ children }: SubTitleProps) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};

export default SubTitle;

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 18,
    color: "#e2b497",
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitleContainer: {
    padding: 6,
    marginVertical: 4,
    marginHorizontal: 24,
    borderBottomWidth: 2,
    borderBottomColor: "#e2b497",
  },
});
