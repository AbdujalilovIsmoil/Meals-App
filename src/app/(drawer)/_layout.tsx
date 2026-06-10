import { Drawer } from "expo-router/drawer";

const RootLayout = () => {
  return (
    <Drawer
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: "All Categories",
        }}
      />
      <Drawer.Screen
        name="favourite"
        options={{
          title: "Favourite",
        }}
      />
    </Drawer>
  );
};

export default RootLayout;
