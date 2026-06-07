import { Stack } from "expo-router";
import { StatusBar, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Layout = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={"light-content"} />

      <Stack
        initialRouteName="index"
        screenOptions={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#351401" },
          contentStyle: {
            backgroundColor: "#3f2f25",
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "All Categories",
          }}
        />
        <Stack.Screen name="meals/index" />
        <Stack.Screen name="meals/[mealId]" />
      </Stack>
    </SafeAreaProvider>
  );
};

export default Layout;

const styles = StyleSheet.create({});
