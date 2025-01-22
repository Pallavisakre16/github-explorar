import React, { useEffect } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { initializeTheme, toggleTheme } from "../store/slices/themeSlice";

const ThemeToggle = () => {
  const {theme} = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(initializeTheme())
  },[dispatch])

  return (
    <View
      style={[
        styles.container,
      ]}
    >
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={theme ? "#f4f3f4" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => dispatch(toggleTheme())}
        value={theme}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ThemeToggle;
