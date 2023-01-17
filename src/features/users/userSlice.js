import { createSlice } from '@reduxjs/toolkit';
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    gender: '',
    email: '',
    mobile: '',
    technology: '',
    profilePicture: '',
  },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.email = action.payload.email;
      state.mobile = action.payload.mobile;
      state.technology = action.payload.technology;
      state.profilePicture = action.payload.profilePicture;
    },
    getUser: (state) => {
      return state;
    },
    updateUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.email = action.payload.email;
      state.mobile = action.payload.mobile;
      state.technology = action.payload.technology;
      state.profilePicture = action.payload.profilePicture;
    },
  },
});

export const { setUser, getUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
