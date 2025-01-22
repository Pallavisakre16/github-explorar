import React, { useState, useEffect } from "react";
import { Image, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // Install via `react-native-vector-icons`
import AsyncStorage from "@react-native-async-storage/async-storage"; // Install via `@react-native-async-storage/async-storage`
import { ScreenWidth } from "../constants/constants";

const DetailsScreen = ({ navigation, route }) => {
  const { item } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);

  // Check if the item is already in local storage
  useEffect(() => {
    const checkIfFavorite = async () => {
      try {
        const favorites = await AsyncStorage.getItem("favorites");
        const favoritesList = favorites ? JSON.parse(favorites) : [];
        const exists = favoritesList.some((fav) => fav.id === item.id);
        setIsFavorite(exists);
      } catch (error) {
        console.error("Error checking favorites:", error);
      }
    };

    checkIfFavorite();
  }, [item.id]);

  const handleFavoriteToggle = async () => {
    try {
      const favorites = await AsyncStorage.getItem("favorites");
      const favoritesList = favorites ? JSON.parse(favorites) : [];

      if (isFavorite) {
        // Remove item from favorites
        const updatedFavorites = favoritesList.filter(
          (fav) => fav.id !== item.id
        );
        await AsyncStorage.setItem(
          "favorites",
          JSON.stringify(updatedFavorites)
        );
        setIsFavorite(false);
      } else {
        // Add item to favorites
        if (favoritesList.some((fav) => fav.id === item.id)) {
        } else {
          favoritesList.push(item);
          await AsyncStorage.setItem(
            "favorites",
            JSON.stringify(favoritesList)
          );
          setIsFavorite(true);
        }
      }
    } catch (error) {
      console.error("Error updating favorites:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ position: "absolute", top: 10, right: 10 }}
        onPress={handleFavoriteToggle}
      >
        <Icon
          name={isFavorite ? "heart" : "heart-outline"}
          size={RFValue(30)}
          color={isFavorite ? "red" : "black"}
        />
      </TouchableOpacity>
      <Image source={{ uri: item.owner.avatar_url }} style={styles.avatar} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.description}>
        {item.description || "No description provided."}
      </Text>
      <View style={styles.infoRow}>
        <Icon name="star-outline" size={24} color="#FFD700" />
        <Text style={styles.infoText}>{item.stargazers_count} Stars</Text>
      </View>
      <View style={styles.infoRow}>
        <Icon name="source-fork" size={24} color="#00BFFF" />
        <Text style={styles.infoText}>{item.forks_count} Forks</Text>
      </View>
      <View style={styles.infoRow}>
        <Icon name="language-python" size={24} color="#4CAF50" />
        <Text style={styles.infoText}>{item.language || "N/A"}</Text>
      </View>
      <View style={styles.infoRow}>
        <Icon name="account-circle" size={24} color="#FF5722" />
        <Text style={styles.infoText}>Owner: {item.owner.login}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  avatar: {
    width: ScreenWidth * 0.5,
    height: ScreenWidth * 0.5,
    borderRadius: ScreenWidth * 0.25,
    marginBottom: 20,
    backgroundColor:"#f3f3f3",
    resizeMode:"contain"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
});

export default DetailsScreen;
