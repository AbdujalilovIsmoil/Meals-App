import { Stack } from "expo-router";
import { Platform, StatusBar, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Layout = () => {
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={Platform.OS === "android" ? "light-content" : "dark-content"}
      />

      <Stack initialRouteName="index">
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen
          name="meals-overview"
          options={{ title: "Meals Over View" }}
        />
      </Stack>
    </SafeAreaProvider>
  );
};

export default Layout;

const styles = StyleSheet.create({});
