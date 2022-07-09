import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
      console.log(state.isLoggedIn)
    }
  },
    extraReducers(builder) {
      builder
          .addCase(postLogin.fulfilled, (state, action) => {
            if (action.payload.error){
              state.isLoggedIn = false;
              state.user = null;
              state.errorMessage = action.payload.message;
            } else {
              state.isLoggedIn = true;
              state.user = action.payload;
            }
          })
          .addCase(postLogin.rejected, (state) => {
            state.isLoggedIn = false;
            state.user = null;
          })
  },
});

export const { logout } = userSlice.actions;

export const postRegister = createAsyncThunk('usuarios/postRegister', async (credentials) => {
  console.log("Credenciales: " + credentials.name + credentials.email + credentials.password);
  const registerFetch = await fetch('http://localhost:7500/user/signup', {
      method: 'POST',
      headers: {
          "Content-type": "application/json",
      },
      body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
          confirmpassword: credentials.confirmpassword
      }),
  });
  const userData = await registerFetch.json();
  console.log("fetch status: " + registerFetch.status);
  if (registerFetch.status === 200) {
      return userData;
  } else {
      return {
          error: true,
          message: userData.error.message,
      }
  }
});

export const postEditAccount = createAsyncThunk('usuarios/postEditAccount', async (credentials) => {
  console.log("Credenciales: " + credentials.name + credentials.email + credentials.password);
  const editAccountFetch = await fetch('http://localhost:7500/user/editaccount', {
      method: 'POST',
      headers: {
          "Content-type": "application/json",
      },
      body: JSON.stringify({
          id: credentials.id,
          name: credentials.name,
          email: credentials.email,
      }),
  });
  console.log("Se cae");
  const userData = await editAccountFetch.json();
  console.log("lllllllllllllllllllllllllllll");
  console.log("fetch status: " + editAccountFetch.status);
  if (editAccountFetch.status === 200) {
      return userData;
  } else {
      return {
          error: true,
          message: userData.error.message,
      }
  }
});

export const postLogin = createAsyncThunk('usuarios/postLogin', async (credentials) => {
  console.log("Credenciales: " + credentials.email + credentials.password);
  const loginFetch = await fetch('http://localhost:7500/user/login', {
      method: 'POST',
      headers: {
          "Content-type": "application/json",
      },
      body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
      }),
  });
  const userData = await loginFetch.json();
  console.log("fetch status: " + loginFetch.status);
  if (loginFetch.status === 200) {
      return userData;
  } else {
      return {
          error: true,
          message: userData.error.message,
      }
  }
});
/* export const getAllUsers = () => {
  if (usersData != null) {
    return usersData;
  } else {
    return null;
  }
}; */

export default userSlice.reducer;
