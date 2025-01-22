import React, { useCallback, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import RepositoryItem from "../components/RepositoryItem";
import { useFocusEffect } from "@react-navigation/native";

const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState([]);

  // Fetch favorite items from local storage
  const fetchFavorites = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem("favorites");
      const favoritesList = storedFavorites ? JSON.parse(storedFavorites) : [];
      console.log(favoritesList);
      setFavorites(favoritesList);
    } catch (error) {
      console.error("Error fetching favorites:", error);
    }
  };
  useFocusEffect(
    useCallback(() => {
      fetchFavorites();
    }, []) // Dependencies are empty, so fetchFavorites will be called whenever the screen gains focus
  );

  const handleRemoveFavorite = async (item) => {
    try {
      const updatedFavorites = favorites.filter((fav) => fav.id !== item.id);
      setFavorites(updatedFavorites);
      await AsyncStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } catch (error) {
      console.log("Error removing favorite:", error);
    }
  };

  return (
    <View style={styles.container}>
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <RepositoryItem index={index} item={item} />
              <TouchableOpacity onPress={() => handleRemoveFavorite(item)}>
                <Icon name="delete" size={24} color="black" />
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={styles.emptyText}>No favorite repositories found.</Text>
        </View>
      )}
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingRight: 20,
    backgroundColor: "#f9f9f9",
  },
});
