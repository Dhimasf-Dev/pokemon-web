import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  query: string;
  results: string[];
}

const initialState: SearchState = {
  query: '',
  results: [],
};

const searchPokeSlice = createSlice({
  name: 'searchPoke',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    setResults(state, action: PayloadAction<string[]>) {
      state.results = action.payload;
    }
  },
});

export const { setQuery, setResults } = searchPokeSlice.actions;
export default searchPokeSlice.reducer;
