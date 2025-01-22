import React from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import RepositoryItem from "../components/RepositoryItem";
import SearchInput from "../components/SearchInput";
import { Colors } from "../constants/constants";

const HomeScreen = () => {
  const { loading, repositories, error } = useSelector(
    (store) => store.repositories
  );
  const { theme } = useSelector((state) => state.theme);
  const renderContent = () => {
    if (loading) {
      return (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color="#000" />
          <Text>Loading...</Text>
        </View>
      );
    }

    if (error) {
      return (
        <View style={styles.centered}>
          <Text style={styles.errorText}>An error occurred: {error}</Text>
          {/* Add a retry button if applicable */}
        </View>
      );
    }

    // Ensure repositories is defined and check items only if repositories exists
    if (
      !repositories === null ||
      !repositories?.items ||
      repositories?.items?.length === 0
    ) {
      return (
        <View style={styles.centered}>
          <Text>No repositories found.</Text>
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <Text style={{ marginBottom: 10, padding: 10 }}>
          Repositories found: {repositories.total_count}
        </Text>
        <FlatList
          data={repositories.items}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <RepositoryItem index={index} item={item} />
          )}
        />
      </View>
    );
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme ? Colors.primary : "#fff" },
      ]}
    >
      <SearchInput />
      {renderContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
    marginHorizontal: 16,
  },
});

export default HomeScreen;
