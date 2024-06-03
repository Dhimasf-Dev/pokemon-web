import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokeBagObjState {
  id: string;
  name: string;
  image: string
}

interface PokeBagState {
  pokeBag: PokeBagObjState[]
}

const initialState: PokeBagState = {
  pokeBag: [],
};

const userSlice = createSlice({
  name: 'pokeBag',
  initialState,
  reducers: {
    // login(state, action: PayloadAction<{ name: string }>) {
    //   state.pokeBag = action.payload;
    // },
    // logout(state) {
    //   state.pokeBag = null;
    // },

     addPoke(state, action: PayloadAction<PokeBagObjState[]>) {
      state.pokeBag = action.payload;
    },
  },
});

export const { addPoke } = userSlice.actions;
export default userSlice.reducer;
