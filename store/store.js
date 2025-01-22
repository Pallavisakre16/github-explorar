// store.js
import { configureStore } from '@reduxjs/toolkit';
import repositoriesReducer from './slices/repositoriesSlice.js'; // Adjust the path to your slice
import themeReducer from './slices/themeSlice.js';
const store = configureStore({
  reducer: {
    repositories: repositoriesReducer, // Add your reducers here
    theme:themeReducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export default store;
