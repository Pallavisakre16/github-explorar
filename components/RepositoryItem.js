import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // Make sure to install react-native-vector-icons
import { navigate } from "../utils/navigationUtils";

const RepositoryItem = ({ item }) => {
  return (
    <TouchableOpacity
      onPress={() => navigate("Details", { item: item })}
      style={styles.container}
    >
      <View style={styles.row}>
        <Icon name="book" size={24} color="#000" />
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth:0.2,
    padding: 10,
    margin: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding:5
  },
  title: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});

export default RepositoryItem;
