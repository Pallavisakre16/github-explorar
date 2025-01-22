// exampleSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseApiUrl } from "../../constants/constants";

export const fetchRepositories = createAsyncThunk(
    "repositories/fetchRepositories",
    async (query, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${baseApiUrl}${query}`);
        return response.data;
      } catch (error) {
        // Check for network error
        if (!error.response) {
          return rejectWithValue("Network error: Please check your internet connection.");
        }
        return rejectWithValue(
          error.response?.data?.message || "Failed to fetch repositories"
        );
      }
    }
  );

const repositoriesSlice = createSlice({
  name: "repositories",
  initialState: {
    loading: false,
    repositories: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetching all repositories
      .addCase(fetchRepositories.pending, (state) => {
        state.loading = true;
        state.error = null; // Clear previous errors
      })
      .addCase(fetchRepositories.fulfilled, (state, action) => {
        state.loading = false;
        state.repositories = action.payload;
      })
      .addCase(fetchRepositories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Store error message
      });
  },
});

export default repositoriesSlice.reducer;
