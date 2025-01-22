import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Save data to AsyncStorage
 * @param {string} key - The key to store the data under
 * @param {any} value - The value to store (will be serialized to JSON)
 */
export const setItem = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    console.log(`Data saved successfully under key: ${key}`);
  } catch (error) {
    console.error(`Error saving data for key: ${key}`, error);
  }
};

/**
 * Retrieve data from AsyncStorage
 * @param {string} key - The key of the data to retrieve
 * @returns {Promise<any>} - The retrieved data, parsed from JSON, or null if not found
 */
export const getItem = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error(`Error retrieving data for key: ${key}`, error);
    return null;
  }
};

/**
 * Remove data from AsyncStorage
 * @param {string} key - The key of the data to remove
 */
export const removeItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log(`Data removed successfully for key: ${key}`);
  } catch (error) {
    console.error(`Error removing data for key: ${key}`, error);
  }
};

/**
 * Clear all data from AsyncStorage
 */
export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log('All data cleared successfully');
  } catch (error) {
    console.error('Error clearing storage', error);
  }
};
