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

const usersFromLocalStorage = localStorage.getItem('users');

const initialState: UserState = {
  users:
    usersFromLocalStorage !== null ? JSON.parse(usersFromLocalStorage) : [],
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
      // set to local storage
      localStorage.setItem('users', JSON.stringify(state.users));
    },
    removeAllUsers: (state) => {
      state.users = [];
      localStorage.removeItem('users');
    },
  },
});

export const { setUsers, removeAllUsers } = userSlice.actions;

export default userSlice.reducer;
