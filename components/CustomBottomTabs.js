import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { navigate } from "../utils/navigationUtils";
import Icon from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";
const CustomBottomTabs = ({ state }) => {
  const { index } = state; // Get the active index
  const activeRouteName = state?.routeNames?.[index]; // Get the active route name

  const tabs = [
    { name: "Home", label: "Home", selectedIcon: "home", icon: "home-outline" },
    {
      name: "Profile",
      label: "Profile",
      selectedIcon: "person",
      icon: "person-outline",
    },
    {
      name: "Favorites",
      label: "Favorites",
      selectedIcon: "heart",
      icon: "heart-outline",
    },
    
  ];

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }} edges={["bottom"]}>
      <View style={styles.tabContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.name}
            accessibilityRole="button"
            onPress={() => navigate(tab.name)}
            style={[styles.tabButton]}
          >
            <Icon
              size={RFValue(20)}
              name={activeRouteName === tab.name ? tab.selectedIcon : tab.icon}
            ></Icon>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default CustomBottomTabs;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    height: 60,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    alignItems: "center",
    justifyContent: "space-around",
  },
  tabButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabButtonActive: {
    backgroundColor: "#3700B3",
    borderRadius: 10,
    marginHorizontal: 5,
    paddingVertical: 5,
  },
});
