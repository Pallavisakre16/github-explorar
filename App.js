import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import Navigation from "./navigation/navigation";
import store from "./store/store";
import { Provider, useSelector } from "react-redux";
const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
