import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { StatusBar, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { store } from "@/store/redux/store";

const Layout = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={"light-content"} />
      <Provider store={store}>
        <Stack
          screenOptions={{
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#351401" },
            contentStyle: {
              backgroundColor: "#3f2f25",
            },
          }}
        >
          <Stack.Screen
            name="(drawer)"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="meals/index" />
          <Stack.Screen name="meals/[mealId]" />
        </Stack>
      </Provider>
    </SafeAreaProvider>
  );
};

export default Layout;

const styles = StyleSheet.create({});
