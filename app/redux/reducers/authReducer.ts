import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserObjState {
  name: string;
  password: string;
}

interface UserState {
  userLogin: UserObjState[]
  userRegistered: UserObjState[]
}

const initialState: UserState = {
  userLogin: [],
  userRegistered: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action: PayloadAction<UserObjState[]>) {
      state.userLogin = action.payload;
    },
    logout(state) {
      state.userLogin = []
    },
    setRegister(state, action: PayloadAction<UserObjState[]>) {
      state.userLogin = action.payload;
    },
  },
});

export const { login, logout, setRegister } = userSlice.actions;
export default userSlice.reducer;
