import { StatusBar, StyleSheet, Text, View } from "react-native";
import { replace } from "../utils/navigationUtils";
import { AntDesign } from "react-native-vector-icons";
import { useEffect } from "react";
import { Colors, ScreenWidth } from "../constants/constants";
import { initializeTheme } from "../store/slices/themeSlice";
import { useSelector } from "react-redux";
const SplashScreen = () => {
  const { theme } = useSelector((state) => state.theme);
  useEffect(() => {
    const timer = setTimeout(() => {
      replace("Tabs"); // Navigate to the next screen
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={theme ? Colors.primary : "#fff"}
        barStyle={theme ? "light-content" : "dark-content"}
      ></StatusBar>
      <AntDesign
        size={ScreenWidth * 0.2}
        color={theme ? "#fff" : Colors.primary}
        name="github"
      ></AntDesign>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#fff"
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
});
export default SplashScreen;
