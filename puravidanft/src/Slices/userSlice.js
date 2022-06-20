import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    users: [],
    isLoggedIn: false,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
    login: {
      prepare: (email, password) => {
        const user = postLogin(email, password).toString();
        console.log("userName: " + user);
        return { payload: user };
      },
      reducer: (state, action) => {
        if (action.payload === "") {
          alert("User not found");
        } else {
          state.user = action.payload;
          state.isLoggedIn = true;
        }
      },
    },
  },
});

const usersData = [
  {
    name: "Zack",
    email: "zack@mailinator.com",
    password: "1234",
  },
  {
    name: "Dante",
    email: "dante@mailinator.com",
    password: "1234",
  },
];

export const { logout, login } = userSlice.actions;

export const postLogin = (email, password) => {
  var name = "";
  usersData.forEach((user) => {
    if (user.email === email && user.password === password) {
      name = user.name.toString();
    }
  });
  return name;
};

export const getAllUsers = () => {
  if (usersData != null) {
    return usersData;
  } else {
    return null;
  }
};

export default userSlice.reducer;
