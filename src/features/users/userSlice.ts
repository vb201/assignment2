import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserInterface {
  name: string;
  gender: string;
  email: string;
  mobile: number;
  technology: string[];
  profilePicture?: string;
}
// forEach(arg0: (element: any) => void): unknown;

export interface UserState {
  users: UserInterface[];
}
const initialState: UserState = {
  users: [],
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<UserInterface>) => {
      const { name, gender, email, mobile, technology } = action.payload;

      const currentUser = {
        name,
        gender,
        email,
        mobile,
        technology,
      };

      if (action.payload.profilePicture !== undefined) {
        const { profilePicture } = action.payload;
        const currentUserWithProfilePicture = {
          ...currentUser,
          profilePicture,
        };

        state.users.push(currentUserWithProfilePicture);
      } else {
        state.users.push(currentUser);
      }
    },
  },
});

export const { setUsers } = userSlice.actions;

export default userSlice.reducer;
