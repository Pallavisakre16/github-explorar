import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import { navigationRef } from "../utils/navigationUtils";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomBottomTabs from "../components/CustomBottomTabs";
import { StatusBar } from "react-native";
import Header from "../components/Header";
import SplashScreen from "../screens/SplashScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Define Bottom Tabs Navigator with Custom Tabs
// i have created Custom Bottom Tabs Component
function BottomTabs() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      header: () => {
        let title;
        let Back;
        switch (route.name) {
          case "Home":
            title = "GitHub Explorer";
            Back=false;
            break;
          case "Profile":
            title = "My Profile";
            Back=true
            break;
          case "Favorites":
            title = "Favorites";
            Back=true
            break;
          case "Details":
            title = "Details";
            Back=true
            break;
          default:
            title = "App";
            Back=true
        }
        return <Header title={title} Back={Back}  />;
      },
    })}
      tabBar={(props) => <CustomBottomTabs {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Details" component={DetailsScreen} />
    </Tab.Navigator>
  );
}

// Main Navigation Component
export default function Navigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar barStyle={"dark-content"}></StatusBar>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}
      >
        {/* Embed Bottom Tabs in the Stack Navigator */}
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Tabs" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
