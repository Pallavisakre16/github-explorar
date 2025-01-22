import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Synchronous default value
const initialState = {
  theme: false, // Default to light mode
};

// Theme slice
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = !state.theme;
      AsyncStorage.setItem("theme", JSON.stringify(state.theme)).catch(
        (error) => console.log("Failed to save theme to AsyncStorage:", error)
      );
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;

export const initializeTheme = () => async (dispatch) => {
  try {
    const storedTheme = await AsyncStorage.getItem("theme");
    const parsedTheme = storedTheme ? JSON.parse(storedTheme) : false;
    dispatch(setTheme(parsedTheme));
  } catch (error) {
    console.error("Failed to load theme from AsyncStorage:", error);
  }
};

export default themeSlice.reducer;
