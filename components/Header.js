import React from "react";
import { StyleSheet, Text,TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Install react-native-vector-icons if not already done
import { goBack } from "../utils/navigationUtils";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../constants/constants";
import { useSelector } from "react-redux";
import { AntDesign } from "react-native-vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
const Header = ({ title = "Header", Back }) => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <SafeAreaView
      edges={["top"]}
      style={[
        styles.container,
        { backgroundColor: theme ? Colors.secondary : "#fff" },
      ]}
    >
      {/* Go Back Icon */}
      {Back ? (
        <TouchableOpacity onPress={() => goBack()} style={styles.iconContainer}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
      ) : (
        <AntDesign size={RFValue(30)} name="github"></AntDesign>
        // <ThemeToggle></ThemeToggle>
      )}

      {/* Title */}
      <Text style={[styles.title, { color: theme ? "#fff" : "#000" }]}>
        {title}
      </Text>

      {/* Profile Image */}
      <Image
        source={{
          uri: "https://avatars.githubusercontent.com/u/175584099?v=4",
        }}
        style={styles.profileImage}
      />
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,

    elevation: 2, // Add shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  iconContainer: {
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profileImage: {
    width: RFValue(32),
    height: RFValue(32),
    borderRadius:RFValue(16),
    backgroundColor: "#ccc", // Placeholder color for no image
  },
});
